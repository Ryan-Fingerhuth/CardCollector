using CardCollector.Library.Dtos.Common;

namespace CardCollector.Library.Dtos
{
    public class BinderCard : BaseEntity
    {
        public int BinderCardId { get; set; }
        public int SetId { get; set; }
        public int CardId { get; set; }
        public int Order { get; set; }
        public bool Obtained { get; set; }
        public virtual Set Set { get; set; }
        public virtual Card Card { get; set; }
    }
}