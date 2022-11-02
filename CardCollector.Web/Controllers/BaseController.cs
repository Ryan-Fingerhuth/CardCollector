using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CardCollector.Web.Controllers
{
    [ApiController]
    public class BaseController : ControllerBase
    {
        protected readonly IMediator Mediator;

        protected BaseController(IMediator mediator)
        {
            Mediator = mediator;
        }
    }
}