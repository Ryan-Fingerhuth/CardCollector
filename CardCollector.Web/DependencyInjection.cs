using CardCollector.Business.Abstractions;
using CardCollector.Business.Services;
using CardCollector.Data;
using CardCollector.Data.Configurations;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CardCollector.Web
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            var sqlDbConnection = configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(sqlDbConnection));

            services
                .AddDefaultIdentity<ApplicationUser>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            services.AddIdentityServer()
                .AddApiAuthorization<ApplicationUser, ApplicationDbContext>();

            services.AddTransient<IApplicationSettings, ApplicationSettings>();
            services.AddTransient<IFileService, FileService>();

            services.AddAuthentication().AddIdentityServerJwt();

            return services;
        }
    }
}
