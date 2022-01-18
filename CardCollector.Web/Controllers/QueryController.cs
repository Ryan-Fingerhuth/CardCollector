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
        
        [HttpGet]
        [Route("api/query/searchCardGet/{request}")]
        public async Task<IActionResult> SearchCardGet(string request)
        {
            var result = await Mediator.Send(new SearchCardCommand(request));
            return Ok(result);
        }

    }
}