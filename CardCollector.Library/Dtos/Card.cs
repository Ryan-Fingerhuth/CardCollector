using CardCollector.Library.Dtos.Common;
using System.Collections.Generic;

namespace CardCollector.Library.Dtos
{
    public class Card : BaseEntity
    {
        public int Id { get; set; }
        public string CardName { get; set; }
        public string CardDescription { get; set; }
        public string OriginalSetName { get; set; }
        public int YearReleased { get; set; }
        public int NumberInSet { get; set; }
        public string FullImageGuid { get; set; }
        public string FullImageExtension { get; set; }
        public string ThumbnailImageGuid { get; set; }
        public string ThumbnailImageExtension { get; set; }
        public virtual ICollection<CardTag> CardTags { get; set; } = new List<CardTag>();
        public virtual ICollection<SetCard> SetCards { get; set; } = new List<SetCard>();
    }

    public class CardDto : Card
    {
        public byte[] ImageData { get; set; }
        public List<string> Tags { get; set; } = new List<string>();
    }

    public static class CardExtensions
    {
        public static CardDto ConvertBaseToDto(this Card card)
        {
            var cardDto = new CardDto
            {
                Id = card.Id,
                CardName = card.CardName,
                CardDescription = card.CardDescription,
                OriginalSetName = card.OriginalSetName,
                YearReleased = card.YearReleased,
                FullImageGuid = card.FullImageGuid,
                ThumbnailImageGuid = card.ThumbnailImageGuid,
                ImageData = null
            };

            return cardDto;
        }
    }
}