using CardCollector.Data;
using CardCollector.Library.Dtos;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CardCollector.Business.Commands
{
    public class CreateCardCommand : IRequest<ApiResponseBase<Card>>
    {
        public Card Card { get; set; }

        public CreateCardCommand(Card card)
        {
            Card = card;
        }
    }

    public class CreateCardCommandHandler : IRequestHandler<CreateCardCommand, ApiResponseBase<Card>>
    {
        private readonly ApplicationDbContext _dbContext;

        public CreateCardCommandHandler(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ApiResponseBase<Card>> Handle(CreateCardCommand request, CancellationToken cancellationToken)
        {
            var result = new ApiResponseBase<Card>();

            if (request.Card.Id > 0)
            {
                result.Errors.Add("Card already created");
                return result;
            }

            request.Card.IsActive = true;
            request.Card.DateCreated = DateTime.Now;
            request.Card.DateModified = DateTime.Now;

            await _dbContext.Cards.AddAsync(request.Card, cancellationToken);

            await _dbContext.SaveChangesAsync();

            result.Result = request.Card;

            return result;
        }
    }
}