using CardCollector.Business.Abstractions;
using CardCollector.Business.Commands;
using CardCollector.Business.Queries;
using CardCollector.Library.Dtos;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace CardCollector.Web.Controllers
{
    [ApiController]
    public class CardController : BaseController
    {
        private IFileService _fileService;
        public CardController(IMediator mediator, IFileService fileService) : base(mediator)
        {
            _fileService = fileService;
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
            request.FullImageName = imageName;

            var result = await Mediator.Send(new CreateCardCommand(request));
            return Ok(result);
        }

        [HttpGet]
        [Route("api/card/getCardImage/{imageGuid}")]
        public async Task<HttpResponseMessage> GetCardImage(string imageGuid)
        {
            try
            {
                var result = await Mediator.Send(new GetCardImageQuery(imageGuid));

                if (result.HasErrors)
                {
                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }

                var image = result.Result;

                var response = new HttpResponseMessage(HttpStatusCode.OK) { Content = new ByteArrayContent(image.FileData) };
                response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("inline")
                {
                    FileName = image.FileName
                };
                response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream");
                return response;
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }
    }
}