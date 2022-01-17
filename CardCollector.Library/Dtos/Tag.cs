using CardCollector.Library.Dtos.Common;
using System.Collections.Generic;

namespace CardCollector.Library.Dtos
{
    public class Tag : BaseEntity
    {
        public string Description { get; set; }
        public virtual ICollection<CardTag> CardTags { get; set; }
    }
}