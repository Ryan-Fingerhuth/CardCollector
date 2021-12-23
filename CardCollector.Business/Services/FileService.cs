using CardCollector.Business.Abstractions;
using CardCollector.Library.Dtos.Common;
using System.IO;
using System.Threading.Tasks;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System;

namespace CardCollector.Business.Services
{
    public class FileService : IFileService
    {
        public IApplicationSettings _applicationSettings;

        public FileService(IApplicationSettings appSettings)
        {
            _applicationSettings = appSettings;
        }

        public byte[] ConvertImageToThumbnail(ImageFile file)
        {
            var rootPath = _applicationSettings.FileStoragePath;
            var filePath = $"{rootPath}\\{file.FileId}";

            if (!File.Exists(filePath))
            {
                return null;
            }

            Image img = Image.FromFile(filePath);

            Bitmap imgbitmap = new Bitmap(img);

            var resizedImage = (Image)new Bitmap(imgbitmap, new Size(280, 390));

            var fileData = (byte[])new ImageConverter().ConvertTo(resizedImage, typeof(byte[]));

            return fileData;
        }

        public async Task<byte[]> GetFile(string fileId)
        {
            var rootPath = _applicationSettings.FileStoragePath;
            var filePath = $"{rootPath}\\{fileId}";

            if (!File.Exists(filePath))
            {
                return null;
            }

            return await File.ReadAllBytesAsync(filePath);
        }

        public async Task<bool> UploadFile(ImageFile file)
        {
            var rootPath = _applicationSettings.FileStoragePath;
            var filePath = $"{rootPath}\\{file.FileId}";

            await File.WriteAllBytesAsync(filePath, file.FileData);

            return File.Exists(filePath);
        }
    }
}