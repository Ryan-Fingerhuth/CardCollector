using CardCollector.Business.Abstractions;
using CardCollector.Library.Dtos.Common;
using System.IO;
using System.Threading.Tasks;
using System.Drawing;
using System;

namespace CardCollector.Business.Services
{
    public class FileService : IFileService
    {
        public IApplicationSettings ApplicationSettings;

        public FileService(IApplicationSettings appSettings)
        {
            ApplicationSettings = appSettings;
        }

        public byte[] ConvertImageToThumbnail(CardImageFile file)
        {
            try
            {
                var rootPath = ApplicationSettings.FileStoragePath;
                var filePath = $"{rootPath}/{file.FileGuid}";

                if (!File.Exists(filePath))
                {
                    return null;
                }

                using var ms = new MemoryStream(file.FileData);
                using var bitmap = new Bitmap(ms);
                using var resizedImage = (Image)new Bitmap(bitmap, new Size(280, 390));
                var fileData = (byte[])new ImageConverter().ConvertTo(resizedImage, typeof(byte[]));

                return fileData;
            }
            catch (Exception exception)
            {
                return null;
            }
        }

        public async Task<byte[]> GetFile(string fileGuid)
        {
            var rootPath = ApplicationSettings.FileStoragePath;
            var filePath = $"{rootPath}/{fileGuid}";

            if (!File.Exists(filePath))
            {
                return null;
            }

            return await File.ReadAllBytesAsync(filePath);
        }

        public CardImageFile GetImageFile(string fileGuid)
        {
            try
            {
                var rootPath = ApplicationSettings.FileStoragePath;
                var filePath = $"{rootPath}/{fileGuid}"; // todo fix the extension

                if (!File.Exists(filePath))
                {
                    return null;
                }

                var imageFile = new CardImageFile
                {
                    FileGuid = fileGuid
                };

                byte[] buffer = null;
                using (var fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
                {
                    buffer = new byte[fs.Length];
                    fs.Read(buffer, 0, (int)fs.Length);
                }
                imageFile.FileData = buffer;

                return imageFile;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<bool> UploadFile(CardImageFile file)
        {
            var rootPath = ApplicationSettings.FileStoragePath;
            var filePath = $"{rootPath}/{file.FileGuid}";

            // create folder if folder doesn't exist
            if (!string.IsNullOrWhiteSpace(rootPath) && !File.Exists(rootPath))
            {
                Directory.CreateDirectory(rootPath);
            }

            await File.WriteAllBytesAsync(filePath, file.FileData);

            return File.Exists(filePath);
        }
    }
}