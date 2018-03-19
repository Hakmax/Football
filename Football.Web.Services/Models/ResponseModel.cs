using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Models
{
    public class ResponseModel<T>
    {
        public T Result { get; set; }
        public List<string> Errors { get; set; } = new List<string>();
    }
}
