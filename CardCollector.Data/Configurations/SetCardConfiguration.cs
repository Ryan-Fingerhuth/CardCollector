using CardCollector.Library.Dtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CardCollector.Data.Configurations
{
    public class SetCardConfiguration : IEntityTypeConfiguration<SetCard>
    {
        public void Configure(EntityTypeBuilder<SetCard> builder)
        {
            builder.ToTable("SetCards");
            builder.HasKey(x => new { x.SetId, x.CardId });
            builder.Property(x => x.Order).IsRequired();
            builder.HasOne(x => x.Card).WithMany(x => x.SetCards).HasForeignKey(x => x.CardId).IsRequired();
            builder.HasOne(x => x.Set).WithMany(x => x.SetCards).HasForeignKey(x => x.SetId).IsRequired();
            builder.HasQueryFilter(x => x.IsActive);
        }
    }
}