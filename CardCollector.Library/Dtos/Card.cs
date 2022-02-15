using CardCollector.Library.Dtos.Common;
using System.Collections.Generic;

namespace CardCollector.Library.Dtos
{
    public class Card : BaseEntity
    {
        public int Id { get; set; }
        public string CardName { get; set; }
        public string CardDescription { get; set; }
        public string OriginalSet { get; set; }
        public int YearReleased { get; set; }
        public string FullImageGuid { get; set; }
        public string FullImageName { get; set; }
        public string ThumbnailImageGuid { get; set; }
        public string ThumbnailImageName { get; set; }
        public virtual ICollection<CardTag> CardTags { get; set; } = new List<CardTag>();
        public virtual ICollection<SetCard> SetCards { get; set; } = new List<SetCard>();
    }

    public class CardDto : Card
    {
        public byte[] ImageData { get; set; }
        public List<string> Tags { get; set; } = new List<string>();
    }
}