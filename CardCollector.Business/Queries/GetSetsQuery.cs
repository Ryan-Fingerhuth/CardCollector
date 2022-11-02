using CardCollector.Data;
using CardCollector.Library.Dtos;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CardCollector.Business.Queries
{
    public class GetSetsQuery : IRequest<ApiResponseBase<List<SetDto>>>
    {
        public GetSetsQuery() { }
    }

    public class GetSetsQueryHandler : IRequestHandler<GetSetsQuery, ApiResponseBase<List<SetDto>>>
    {
        private readonly ApplicationDbContext _dbContext;
        public GetSetsQueryHandler(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ApiResponseBase<List<SetDto>>> Handle(GetSetsQuery request, CancellationToken cancellationToken)
        {
            var result = new ApiResponseBase<List<SetDto>>();
            try
            {
                var sets = await _dbContext.Sets.Select(x => x.ConvertBaseToDto()).ToListAsync(cancellationToken);

                if (sets == null)
                {
                    return result;
                }

                result.Result = sets;
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