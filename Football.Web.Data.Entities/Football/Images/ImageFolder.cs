using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Football.Images
{
    public class ImageFolder:EntityWithName<int>
    {
        public int? ParentId { get; set; }
        public virtual ImageFolder Parent { get; set; }
    }
}
