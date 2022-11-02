using System;

namespace CardCollector.Library.Dtos.Common
{
    public class BaseEntity : IBaseEntity
    {
        public bool IsActive { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}