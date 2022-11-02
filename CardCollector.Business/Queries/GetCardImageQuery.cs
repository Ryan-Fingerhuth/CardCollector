using CardCollector.Business.Abstractions;
using CardCollector.Data;
using CardCollector.Library.Dtos;
using CardCollector.Library.Dtos.Common;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CardCollector.Business.Queries
{
    public class GetCardImageQuery : IRequest<ApiResponseBase<CardImageFile>>
    {
        public string ImageGuid { get; set; }
        public bool GetThumbnail { get; set; }
        public GetCardImageQuery(string imageGuid, bool getThumbnail)
        {
            ImageGuid = imageGuid;
            GetThumbnail = getThumbnail;
        }
    }

    public class GetCardImageQueryHandler : IRequestHandler<GetCardImageQuery, ApiResponseBase<CardImageFile>>
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IFileService _fileService;
        public GetCardImageQueryHandler(ApplicationDbContext dbContext, IFileService fileService)
        {
            _dbContext = dbContext;
            _fileService = fileService;
        }

        public async Task<ApiResponseBase<CardImageFile>> Handle(GetCardImageQuery request, CancellationToken cancellationToken)
        {
            var result = new ApiResponseBase<CardImageFile>();
            try
            {
                var card = await _dbContext.Cards.FirstOrDefaultAsync(x =>
                    (request.GetThumbnail && x.ThumbnailImageGuid == request.ImageGuid) ||
                    (!request.GetThumbnail && x.FullImageGuid == request.ImageGuid)
                    , cancellationToken);

                if (card == null)
                {
                    result.Errors.Add("Associated card not found.");
                    return result;
                }

                var image = _fileService.GetImageFile(request.ImageGuid);
                
                if (image == null)
                {
                    result.Errors.Add("image file not found");
                    return result;
                }

                image.FileName = request.GetThumbnail
                    ? $"{card.ThumbnailImageGuid}{card.ThumbnailImageExtension}"
                    : $"{card.FullImageGuid}{card.FullImageExtension}";
                
                result.Result = image;

                return result;
            }
            catch (Exception ex)
            {
                result.Errors.Add(ex.Message);
                return result;
            }
        }
    }
}