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
    public class CardLookUpCommand : IRequest<ApiResponseBase<List<string>>>
    {

        public string SearchTerm { get; set; }
        public CardLookUpCommand(string searchTerm)
        {
            SearchTerm = searchTerm;
        }
    }

    public class CardLookUpCommandHandler : IRequestHandler<CardLookUpCommand, ApiResponseBase<List<string>>>
    {
        private readonly ApplicationDbContext _dbContext;

        public CardLookUpCommandHandler(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ApiResponseBase<List<string>>> Handle(CardLookUpCommand request, CancellationToken cancellationToken)
        {
            var result = new ApiResponseBase<List<string>>();
            try
            {

                //var temps = _dbContext.Cards.ToList();

                //var users = _dbContext.Users.ToList();

                var results = await (_dbContext.Cards.Where(n => n.CardName.ToLower().IndexOf(request.SearchTerm.ToLower()) > -1).Select(c => c.CardName)).Distinct().ToListAsync();

                
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