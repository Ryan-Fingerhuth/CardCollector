using CardCollector.Library.Dtos.Common;
using System.Threading.Tasks;

namespace CardCollector.Business.Abstractions
{
    public interface IFileService
    {
        Task<bool> UploadFile(ImageFile file);
        Task<byte[]> GetFile(string fileId);
        byte[] ConvertImageToThumbnail(ImageFile file);
    }
}