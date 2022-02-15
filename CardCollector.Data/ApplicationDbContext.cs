using CardCollector.Data.Configurations;
using CardCollector.Library.Dtos;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

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
                    context.Database.ExecuteSqlRaw(Properties.Resources.DataSeeder);
                }
            }
        }
    }
}