using CardCollector.Business.Commands;
using CardCollector.Library.Dtos;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CardCollector.Web.Controllers
{
    [ApiController]
    public class QueryController : BaseController
    {
        public QueryController(IMediator mediator) : base(mediator)
        {
        }
        
        [HttpPost]
        [Route("api/query/searchCard")]
        public async Task<IActionResult> SearchCard(string request)
        {

            //var result = await Mediator.Send(new SearchCardCommand(request));
            var result = await Mediator.Send(new SearchCardCommand("pikachu"));
            return Ok(result);
        }
        
    }
}