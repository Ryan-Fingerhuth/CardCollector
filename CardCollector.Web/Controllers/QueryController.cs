using CardCollector.Business.Commands;
using CardCollector.Business.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;

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

        [HttpGet]
        [Route("api/query/cardLookUp/{request}")]
        public async Task<List<string>> CardLookUp(string request)
        {
            var result = await Mediator.Send(new CardLookUpCommand(request));
            return result.Result;
        }

        [HttpGet]
        [Route("api/query/getSet/{setId}")]
        public async Task<IActionResult> GetSet(int setId)
        {
            var result = await Mediator.Send(new GetSetQuery(setId));
            return Ok(result);
        }

        [HttpGet]
        [Route("api/query/getSets")]
        public async Task<IActionResult> GetSets()
        {
            var result = await Mediator.Send(new GetSetsQuery());
            return Ok(result);
        }

    }
}