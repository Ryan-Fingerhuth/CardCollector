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
            var what = configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection")));

            //services.AddScoped<IApplicationDbContext>(provider => provider.GetRequiredService<AppDbContext>());

            services
                .AddDefaultIdentity<ApplicationUser>()
                .AddEntityFrameworkStores<AppDbContext>();

            services.AddIdentityServer()
                .AddApiAuthorization<ApplicationUser, AppDbContext>();

            services.AddTransient<IApplicationSettings, ApplicationSettings>();
            services.AddTransient<IFileService, FileService>();

            services.AddAuthentication().AddIdentityServerJwt();

            return services;
        }
    }
}
