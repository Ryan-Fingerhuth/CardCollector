using CardCollector.Library.Dtos;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace CardCollector.Data.Configurations
{
    public class BinderCardConfiguration : IEntityTypeConfiguration<BinderCard>
    {
        public void Configure(EntityTypeBuilder<BinderCard> builder)
        {
            builder.ToTable("BinderCards");
            builder.HasKey(x => x.BinderCardId);
            builder.Property(x => x.Order).IsRequired();
            builder.Property(x => x.Obtained).HasDefaultValue(false).IsRequired();
            builder.HasOne(x => x.Card).WithMany(x => x.BinderCards).HasForeignKey(x => x.CardId).IsRequired();
            builder.HasOne(x => x.Set).WithMany(x => x.BinderCards).HasForeignKey(x => x.SetId).IsRequired();
            builder.HasQueryFilter(x => x.IsActive);
        }
    }
}