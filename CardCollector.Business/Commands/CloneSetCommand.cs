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
    public class CloneSetCommand : IRequest<ApiResponseBase<bool>>
    {
        public int SetId { get; set; }
        public CloneSetCommand(int setId)
        {
            SetId = setId;
        }
    }

    public class CloneSetCommandHandler : IRequestHandler<CloneSetCommand, ApiResponseBase<bool>>
    {
        private readonly ApplicationDbContext _dbContext;

        public CloneSetCommandHandler(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ApiResponseBase<bool>> Handle(CloneSetCommand request, CancellationToken cancellationToken)
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

                var setCards = await _dbContext.SetCards.Where(x => x.SetId == request.SetId).ToListAsync();

                var clonedSet = set.ConvertBaseToNewBase();

                clonedSet.Id = 0;
                clonedSet.DefaultSet = false;
                clonedSet.DateCreated = DateTime.Now;
                clonedSet.DateModified = DateTime.Now;
                clonedSet.SetDescription = $"{set.SetDescription} (clone)";

                _dbContext.Sets.Add(clonedSet);

                await _dbContext.SaveChangesAsync(cancellationToken);

                var clonedSetCards = setCards.Select(x => new SetCard
                {
                    SetId = clonedSet.Id,
                    CardId = x.CardId,
                    IsActive = x.IsActive,
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now,
                    Order = x.Order
                }).ToList();

                _dbContext.SetCards.AddRange(clonedSetCards);

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