﻿using CardCollector.Library.Dtos.Common;
using System.Collections.Generic;

namespace CardCollector.Library.Dtos
{
    public class Set : BaseEntity
    {
        public int Id { get; set; }
        public string SetDescription { get; set; }
        public int SetCreatedByUserId { get; set; }
        public bool DefaultSet { get; set; }
        public int BinderCardsPerPage { get; set; }
        public virtual ICollection<SetCard> SetCards { get; set; } = new List<SetCard>();
        public virtual ICollection<BinderCard> BinderCards { get; set; } = new List<BinderCard>();
    }

    public class SetDto : Set
    {
        public List<CardDto> Cards { get; set; } = new List<CardDto>();
        public List<CardDto> CardsInBinder { get; set; } = new List<CardDto>();
    }

    public static class SetExtensions
    {
        public static Set ConvertBaseToNewBase(this Set set)
        {
            var newSet = new Set
            {
                Id = set.Id,
                SetDescription = set.SetDescription,
                SetCreatedByUserId = set.SetCreatedByUserId,
                DefaultSet = set.DefaultSet,
                BinderCardsPerPage = set.BinderCardsPerPage,
                IsActive = set.IsActive,
                DateCreated = set.DateCreated,
                DateModified = set.DateModified
            };

            return newSet;
        }

        public static SetDto ConvertBaseToDto(this Set set)
        {
            var setDto = new SetDto
            {
                Id = set.Id,
                SetDescription = set.SetDescription,
                SetCreatedByUserId = set.SetCreatedByUserId,
                DefaultSet = set.DefaultSet,
                BinderCardsPerPage = set.BinderCardsPerPage,
                Cards = new List<CardDto>(),
                CardsInBinder = new List<CardDto>(),
            };

            return setDto;
        }
    }
}