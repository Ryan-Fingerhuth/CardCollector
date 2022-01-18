using CardCollector.Business.Abstractions;
using CardCollector.Business.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardCollector.Web
{
    public static class TempClass
    {
        public static void RegisterStuff(this IServiceCollection services)
        {
            services.AddTransient<IApplicationSettings, ApplicationSettings>();
            services.AddTransient<IFileService, FileService>();
        }
    }
}
