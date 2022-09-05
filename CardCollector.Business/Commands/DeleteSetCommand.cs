using CardCollector.Data;
using CardCollector.Library.Dtos;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CardCollector.Business.Commands
{
    public class DeleteSetCommand : IRequest<ApiResponseBase<bool>>
    {
        public int SetId { get; set; }
        public DeleteSetCommand(int setId)
        {
            SetId = setId;
        }
    }

    public class DeleteSetCommandHandler : IRequestHandler<DeleteSetCommand, ApiResponseBase<bool>>
    {
        private readonly ApplicationDbContext _dbContext;

        public DeleteSetCommandHandler(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ApiResponseBase<bool>> Handle(DeleteSetCommand request, CancellationToken cancellationToken)
        {
            var result = new ApiResponseBase<bool>();
            try
            {
                var set = await _dbContext.Sets.FirstOrDefaultAsync(x => x.Id == request.SetId, cancellationToken);

                if (set == null)
                {
                    result.Errors.Add($"Set Id: {request.SetId}. Doesn't Exist");
                    return result;
                }

                set.IsActive = false;

                await _dbContext.SaveChangesAsync(cancellationToken);

                result.Result = true;
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