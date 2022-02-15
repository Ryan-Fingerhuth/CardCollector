using CardCollector.Library.Dtos.Common;
using System.Threading.Tasks;

namespace CardCollector.Business.Abstractions
{
    public interface IFileService
    {
        Task<bool> UploadFile(CardImageFile file);
        Task<byte[]> GetFile(string fileId);
        CardImageFile GetImageFile(string fileId);
        byte[] ConvertImageToThumbnail(CardImageFile file);
    }
}