using System;

namespace CardCollector.Library.Dtos.Common
{
    public interface IBaseEntity
    {
        bool IsActive { get; set; }
        DateTime DateCreated { get; set; }
        DateTime DateModified { get; set; }
    }
}