using CardCollector.Business.Abstractions;
using Microsoft.Extensions.Configuration;

namespace CardCollector.Business.Services
{
    public class ApplicationSettings : IApplicationSettings
    {
        private readonly IConfiguration _configuration;
        public ApplicationSettings(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string FileStoragePath => GetString("AppIdentitySettings:FileStorage:StoragePath", "C:\\CardCollectorFileStorage");

        private string GetString(string key, string defaultValue)
        {
            var setting = _configuration.GetValue<string>(key);

            return string.IsNullOrWhiteSpace(setting) ? defaultValue : setting;
        }
    }
}