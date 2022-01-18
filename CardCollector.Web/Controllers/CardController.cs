using CardCollector.Business.Commands;
using CardCollector.Library.Dtos;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;

namespace CardCollector.Web.Controllers
{
    [ApiController]
    public class CardController : BaseController
    {
        public CardController(IMediator mediator) : base(mediator)
        {
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("api/card/createCard")]
        public async Task<IActionResult> CreateCard(IFormCollection data)
        {
            var imageData = new byte[] { };
            foreach(var file in data.Files)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    imageData = ms.ToArray();
                }
            }

            var request = JsonSerializer.Deserialize<CardDto>(data["cardRequest"]);

            request.ImageData = imageData;

            var result = await Mediator.Send(new CreateCardCommand(request));
            return Ok(result);
        }
    }
}