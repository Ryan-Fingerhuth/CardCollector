using CardCollector.Data.Configurations;
using CardCollector.Library.Dtos;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.SqlServer.Management.Common;
using Microsoft.SqlServer.Management.Smo;
using System;
using System.IO;
using System.Linq;
using Duende.IdentityServer.EntityFramework.Options;

namespace CardCollector.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Card> Cards { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<CardTag> CardTags { get; set; }
        public DbSet<Set> Sets { get; set; }
        public DbSet<SetCard> SetCards { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfiguration(new CardConfiguration());
            builder.ApplyConfiguration(new TagConfiguration());
            builder.ApplyConfiguration(new CardTagConfiguration());
            builder.ApplyConfiguration(new SetConfiguration());
            builder.ApplyConfiguration(new SetCardConfiguration());
        }
    }

    // This is called within the Startup.cs we are using this to trigger the application to run some seeding sql files.
    public static class AppDbContextExtensions
    {
        public static void SeedData(this IApplicationBuilder app, IConfiguration configuration)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                using (var context = serviceScope.ServiceProvider.GetService<ApplicationDbContext>())
                {
                    var sqlFolderPath = $@"{AppDomain.CurrentDomain.BaseDirectory}Sql\";

                    var paths = Directory.EnumerateDirectories(sqlFolderPath).OrderBy(x => x);

                    foreach (var directoryPath in paths)
                    {
                        var files = Directory.EnumerateFiles(directoryPath, "*.sql").OrderBy(x => x);

                        foreach (var filePath in files)
                        {
                            var content = File.ReadAllText(filePath);
                            var connection = new SqlConnection(context.Database.GetConnectionString());
                            var server = new Server(new ServerConnection(connection));
                            server.ConnectionContext.ExecuteNonQuery(content);
                        }
                    }
                }
            }
        }
    }
}