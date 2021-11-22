﻿using CardCollector.Library.Dtos;
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
            builder.Property(x => x.CardDescription).IsRequired();
            builder.HasQueryFilter(x => !x.IsActive);
        }
    }
}