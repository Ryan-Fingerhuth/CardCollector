using CardCollector.Library.Dtos.Common;
using System.Threading.Tasks;

namespace CardCollector.Business.Abstractions
{
    public interface IFileService
    {
        Task<bool> UploadFile(CardImageFile file);
        Task<byte[]> GetFile(string fileGuid);
        CardImageFile GetImageFile(string fileGuid);
        byte[] ConvertImageToThumbnail(CardImageFile file);
    }
}