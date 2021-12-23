using CardCollector.Library.Dtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CardCollector.Data.Configurations
{
    public class CardTagConfiguration : IEntityTypeConfiguration<CardTag>
    {
        public void Configure(EntityTypeBuilder<CardTag> builder)
        {
            builder.ToTable("CardTags");
            builder.HasKey(x => new { x.CardId, x.TagId });
            builder.HasOne(x => x.Card).WithMany(x => x.CardTags).HasForeignKey(x => x.CardId).IsRequired();
            builder.HasOne(x => x.Tag).WithMany(x => x.CardTags).HasForeignKey(x => x.TagId).IsRequired();
            builder.HasQueryFilter(x => !x.IsActive);
        }
    }
}