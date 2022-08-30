using CardCollector.Library.Dtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CardCollector.Data.Configurations
{
    public class SetConfiguration : IEntityTypeConfiguration<Set>
    {
        public void Configure(EntityTypeBuilder<Set> builder)
        {
            builder.ToTable("Sets");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.SetDescription).IsRequired();
            builder.Property(x => x.SetCreatedByUserId).IsRequired();
            builder.Property(x => x.DefaultSet).HasDefaultValue(false).IsRequired();
            builder.HasQueryFilter(x => x.IsActive);
        }
    }
}