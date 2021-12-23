using CardCollector.Library.Dtos.Common;
using System.Collections.Generic;

namespace CardCollector.Library.Dtos
{
    public class Card : BaseEntity
    {
        public string CardName { get; set; }
        public string CardDescription { get; set; }
        public string OriginalSet { get; set; }
        public int Year { get; set; }
        public string FullImageGuid { get; set; }
        public string ThumbnailImageGuid { get; set; }
        public virtual ICollection<CardTag> CardTags { get; set; }
    }

    public class CardDto : Card
    {
        public byte[] ImageData { get; set; }
        public List<string> Tags { get; set; }
    }
}