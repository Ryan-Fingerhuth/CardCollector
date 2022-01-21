using CardCollector.Business.Commands;
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
        
        [HttpGet]
        [Route("api/query/searchCard/{request}")]
        public async Task<IActionResult> SearchCard(string request)
        {
            var result = await Mediator.Send(new SearchCardCommand(request));
            return Ok(result);
        }

    }
}