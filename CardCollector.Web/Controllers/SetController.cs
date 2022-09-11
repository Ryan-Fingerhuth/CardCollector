using CardCollector.Business.Commands;
using CardCollector.Library.Dtos;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CardCollector.Web.Controllers
{
    [ApiController]
    public class SetController : BaseController
    {
        public SetController(IMediator mediator) : base(mediator)
        {
        }

        [HttpPost]
        [Route("api/set/save")]
        public async Task<IActionResult> SaveCardSet(SetDto cardSet)
        {
            var result = await Mediator.Send(new SaveCardSetCommand(cardSet));
            return Ok(result);
        }

        [HttpDelete]
        [Route("api/set/delete/{setId}")]
        public async Task<IActionResult> DeleteCardSet(int setId)
        {
            var result = await Mediator.Send(new DeleteSetCommand(setId));
            return Ok(result);
        }


        [HttpGet]
        [Route("api/set/clone/{setId}")]
        public async Task<IActionResult> ClonseCardSet(int setId)
        {
            var result = await Mediator.Send(new CloneSetCommand(setId));
            return Ok(result);
        }
    }
}