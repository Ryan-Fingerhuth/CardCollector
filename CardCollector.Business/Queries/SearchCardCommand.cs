using CardCollector.Data;
using CardCollector.Library.Dtos;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CardCollector.Business.Commands
{
    public class SearchCardCommand : IRequest<ApiResponseBase<List<Card>>>
    {
        
        public string CardName { get; set; }
        public SearchCardCommand(string cardName)
        {
            CardName = cardName;
        }
    }

    public class SearchCardCommandHandler : IRequestHandler<SearchCardCommand, ApiResponseBase<List<Card>>>
    {
        private readonly ApplicationDbContext _dbContext;

        public SearchCardCommandHandler(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ApiResponseBase<List<Card>>> Handle(SearchCardCommand request, CancellationToken cancellationToken)
        {
            var result = new ApiResponseBase<List<Card>>();
            try
            {
             
                var temps = _dbContext.Cards.ToList();

                var users = _dbContext.Users.ToList();

                var results =  await (_dbContext.Cards.Where(n => n.CardName.Equals(request.CardName)).ToListAsync());
                

                result.Result = results;

                return result;
            }
            catch (Exception ex)
            {
                result.Errors.Add("Error");
                return result;
            }
            
        }
    }
}