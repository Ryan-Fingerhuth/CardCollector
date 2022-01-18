using CardCollector.Business.Abstractions;
using CardCollector.Data;
using CardCollector.Library.Dtos;
using CardCollector.Library.Dtos.Common;
using MediatR;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace CardCollector.Business.Commands
{
    public class CreateCardCommand : IRequest<ApiResponseBase<bool>>
    {
        public CardDto Card { get; set; }

        public CreateCardCommand(CardDto card)
        {
            Card = card;
        }
    }

    public class CreateCardCommandHandler : IRequestHandler<CreateCardCommand, ApiResponseBase<bool>>
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IFileService _fileService;

        public CreateCardCommandHandler(ApplicationDbContext dbContext, IFileService fileService)
        {
            _dbContext = dbContext;
            _fileService = fileService;
        }

        public async Task<ApiResponseBase<bool>> Handle(CreateCardCommand request, CancellationToken cancellationToken)
        {
            var result = new ApiResponseBase<bool>();
            try
            {
                if (request.Card.Id > 0)
                {
                    result.Errors.Add("Card already created");
                    return result;
                }

                await CreateCard(request, cancellationToken);

                await CreateTags(request, cancellationToken);

                await UploadImage(request, cancellationToken);

                result.Result = true;

                return result;
            }
            catch (Exception ex)
            {
                result.Errors.Add(ex.Message);
                return result;
            }
        }

        private async Task UploadImage(CreateCardCommand request, CancellationToken cancellationToken)
        {
            if (request.Card.ImageData != null)
            {
                // Full Image
                var fullSizeImage = new ImageFile
                {
                    FileData = request.Card.ImageData,
                    FileId = Guid.NewGuid().ToString()
                };
                await _fileService.UploadFile(fullSizeImage);

                request.Card.FullImageGuid = fullSizeImage.FileId;

                // Thumbnail Image
                var thumbnailData = _fileService.ConvertImageToThumbnail(fullSizeImage);

                var thumbnailImage = new ImageFile
                {
                    FileData = thumbnailData,
                    FileId = Guid.NewGuid().ToString()
                };
                await _fileService.UploadFile(thumbnailImage);

                request.Card.ThumbnailImageGuid = thumbnailImage.FileId;

                await _dbContext.SaveChangesAsync(cancellationToken);
            }
        }

        private async Task CreateTags(CreateCardCommand request, CancellationToken cancellationToken)
        {
            var newTags = new List<Tag>();

            foreach (var tag in request.Card.Tags)
            {
                var newTag = new Tag
                {
                    IsActive = true,
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now,
                    Description = tag.Trim()
                };

                _dbContext.Tags.Add(newTag);
                newTags.Add(newTag);
            }

            await _dbContext.SaveChangesAsync(cancellationToken);

            foreach (var newTag in newTags)
            {
                if (newTag.Id == 0)
                {
                    continue;
                }
                var newCardTag = new CardTag
                {
                    CardId = request.Card.Id,
                    TagId = newTag.Id
                };

                _dbContext.CardTags.Add(newCardTag);
            }

            await _dbContext.SaveChangesAsync(cancellationToken);
        }

        private async Task CreateCard(CreateCardCommand request, CancellationToken cancellationToken)
        {
            request.Card.IsActive = true;
            request.Card.DateCreated = DateTime.Now;
            request.Card.DateModified = DateTime.Now;
            request.Card.CardName = request.Card.CardName.Trim();
            request.Card.CardDescription = request.Card.CardDescription.Trim();

            _dbContext.Cards.Add(request.Card);

            await _dbContext.SaveChangesAsync(cancellationToken);
        }
    }
}