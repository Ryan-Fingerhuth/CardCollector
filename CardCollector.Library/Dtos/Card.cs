using CardCollector.Library.Dtos.Common;

namespace CardCollector.Library.Dtos
{
    public class Card : BaseEntity
    {
        public string CardName { get; set; }
        public string CardDescription { get; set; }
    }
}