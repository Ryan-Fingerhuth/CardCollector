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
        public IApplicationSettings _applicationSettings;

        public FileService(IApplicationSettings appSettings)
        {
            _applicationSettings = appSettings;
        }

        public byte[] ConvertImageToThumbnail(CardImageFile file)
        {
            try
            {
                var rootPath = _applicationSettings.FileStoragePath;
                var filePath = $"{rootPath}\\{file.FileId}";

                if (!File.Exists(filePath))
                {
                    return null;
                }

                using (var ms = new MemoryStream(file.FileData))
                {
                    using (var bitmap = new Bitmap(ms))
                    {
                        using (var resizedImage = (Image)new Bitmap(bitmap, new Size(280, 390)))
                        {
                            var fileData = (byte[])new ImageConverter().ConvertTo(resizedImage, typeof(byte[]));

                            return fileData;
                        }
                    }
                }

                //byte[] buffer = null;
                //using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
                //{
                //    buffer = new byte[fs.Length];
                //    fs.Read(buffer, 0, (int)fs.Length);

                //    using (var resizedImage = (Image)new Bitmap(buffer, new Size(280, 390)))
                //    {
                //        var fileData = (byte[])new ImageConverter().ConvertTo(resizedImage, typeof(byte[]));

                //        return fileData;
                //    }
                //}


            }
            catch (Exception exception)
            {
                return null;
            }
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

        public CardImageFile GetImageFile(string fileId)
        {
            try
            {
                var rootPath = _applicationSettings.FileStoragePath;
                var filePath = $"{rootPath}\\{fileId}";

                if (!File.Exists(filePath))
                {
                    return null;
                }

                var imageFile = new CardImageFile
                {
                    FileId = fileId
                };

                //using (var fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
                //{
                //    using (var bitmap = new Bitmap(fs))
                //    {
                //        var fileData = (byte[])new ImageConverter().ConvertTo((Image)bitmap, typeof(byte[]));

                //        imageFile.FileData = fileData;
                //    }
                //}


                byte[] buffer = null;
                using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
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
            var rootPath = _applicationSettings.FileStoragePath;
            var filePath = $"{rootPath}\\{file.FileId}";

            await File.WriteAllBytesAsync(filePath, file.FileData);

            return File.Exists(filePath);
        }
    }
}