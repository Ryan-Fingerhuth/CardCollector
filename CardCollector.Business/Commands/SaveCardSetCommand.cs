using CardCollector.Data;
using CardCollector.Library.Dtos;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CardCollector.Business.Commands
{
    public class SaveCardSetCommand : IRequest<ApiResponseBase<SetDto>>
    {
        public SetDto Set { get; set; }
        public SaveCardSetCommand(SetDto set)
        {
            Set = set;
        }
    }

    public class SaveCardSetCommandHandler : IRequestHandler<SaveCardSetCommand, ApiResponseBase<SetDto>>
    {
        private readonly ApplicationDbContext _dbContext;
        public SaveCardSetCommandHandler(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ApiResponseBase<SetDto>> Handle(SaveCardSetCommand request, CancellationToken cancellationToken)
        {
            var result = new ApiResponseBase<SetDto>();
            try
            {
                var updatedSet = request.Set;

                var dbSet = _dbContext.Sets.FirstOrDefault(x => x.Id == updatedSet.Id);

                if (dbSet == null)
                {
                    dbSet = new Set();
                    dbSet.DateCreated = DateTime.Now;
                    dbSet.IsActive = true;
                    dbSet.SetCreatedByUserId = 1;
                }

                dbSet.SetDescription = updatedSet.SetDescription;
                dbSet.DateModified = DateTime.Now;
                


                // Update Set.

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