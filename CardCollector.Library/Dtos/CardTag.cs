using CardCollector.Library.Dtos.Common;

namespace CardCollector.Library.Dtos
{
    public class CardTag : BaseEntity
    {
        public int CardId { get; set; }
        public int TagId { get; set; }
        public virtual Card Card { get; set; }
        public virtual Tag Tag { get; set; }
    }
}