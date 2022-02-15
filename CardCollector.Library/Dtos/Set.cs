﻿using CardCollector.Library.Dtos.Common;
using System.Collections.Generic;

namespace CardCollector.Library.Dtos
{
    public class Set : BaseEntity
    {
        public int Id { get; set; }
        public string SetDescription { get; set; }
        public int SetCreatedByUserId { get; set; }
        public virtual ICollection<SetCard> SetCards { get; set; } = new List<SetCard>();
    }

    public class SetDto : Set
    {
        public List<Card> Cards { get; set; } = new List<Card>();
    }

    public static class SetExtensions
    {
        public static SetDto ConvertBaseToDto(this Set set)
        {
            var setDto = new SetDto
            {
                Id = set.Id,
                SetDescription = set.SetDescription,
                SetCreatedByUserId = set.SetCreatedByUserId,
                Cards = new List<Card>()
            };

            return setDto;
        }
    }
}