using CardCollector.Business.Commands;
using CardCollector.Library.Dtos;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CardCollector.Web.Controllers
{
    [ApiController]
    public class CardController : BaseController
    {
        public CardController(IMediator mediator) : base(mediator)
        {
        }

        [HttpPost]
        [Route("api/card/createCard")]
        public async Task<IActionResult> CreateCard(CardDto request)
        {
            var result = await Mediator.Send(new CreateCardCommand(request));
            return Ok(result);
        }
    }
}