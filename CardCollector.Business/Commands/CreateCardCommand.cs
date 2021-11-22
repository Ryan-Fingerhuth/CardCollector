using CardCollector.Data;
using CardCollector.Library.Dtos;
using MediatR;
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

            // TODO add Card into db's Card Table

            return result;
        }
    }
}