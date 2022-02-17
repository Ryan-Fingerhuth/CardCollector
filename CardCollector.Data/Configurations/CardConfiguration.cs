using CardCollector.Library.Dtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CardCollector.Data.Configurations
{
    public class CardConfiguration : IEntityTypeConfiguration<Card>
    {
        public void Configure(EntityTypeBuilder<Card> builder)
        {
            builder.ToTable("Cards");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.CardName).HasMaxLength(50).IsRequired();
            builder.Property(x => x.CardDescription);
            builder.Property(x => x.OriginalSet);
            builder.Property(x => x.YearReleased);
            builder.Property(x => x.FullImageGuid).HasMaxLength(40);
            builder.Property(x => x.FullImageExtension);
            builder.Property(x => x.ThumbnailImageGuid).HasMaxLength(40);
            builder.Property(x => x.ThumbnailImageExtension);
            builder.HasQueryFilter(x => x.IsActive);
        }
    }
}