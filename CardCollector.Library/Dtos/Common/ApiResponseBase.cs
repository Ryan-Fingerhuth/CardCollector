using System.Collections.Generic;
using System.Linq;

namespace CardCollector.Library.Dtos
{
    public class ApiResponseBase<T>
    {
        public List<string> Errors { get; set; } = new List<string>();
        public bool IsSuccess => !Errors.Any();
        public bool HasErrors => Errors.Any();
        public T Result { get; set; }

        public ApiResponseBase()
        {
        }
        public ApiResponseBase(T result)
        {
            Result = result;
        }
    }
}