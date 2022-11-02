using CardCollector.Business.Abstractions;
using CardCollector.Business.Commands;
using CardCollector.Business.Queries;
using CardCollector.Library.Dtos;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using System;
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
            var imageName = string.Empty;
            foreach(var file in data.Files)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    imageData = ms.ToArray();
                    imageName = file.FileName;
                }
            }

            var request = JsonSerializer.Deserialize<CardDto>(data["cardRequest"]);

            request.ImageData = imageData;
            request.FullImageExtension = Path.GetExtension(imageName);

            var result = await Mediator.Send(new CreateCardCommand(request));
            return Ok(result);
        }

        [HttpGet]
        [Route("api/card/getCardImage")]
        public async Task<IActionResult> GetCardImage(Guid imageGuid, bool thumbnail)
        {
            try
            {
                var imageGuidString = imageGuid.ToString();
                var result = await Mediator.Send(new GetCardImageQuery(imageGuidString, thumbnail));

                if (result.HasErrors)
                {
                    return BadRequest();
                }

                var mimeType = GetMimeTypeForFileExtension(result.Result.FileName);

                return File(result.Result.FileData, mimeType);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        private string GetMimeTypeForFileExtension(string filePath)
        {
            const string DefaultContentType = "application/octet-stream";

            var provider = new FileExtensionContentTypeProvider();

            if (!provider.TryGetContentType(filePath, out string contentType))
            {
                contentType = DefaultContentType;
            }

            return contentType;
        }
    }
}