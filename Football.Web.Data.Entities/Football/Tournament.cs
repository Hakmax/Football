using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Football
{
    public class Tournament:EntityWithName<int>
    {
        public virtual ICollection<Season> Seasons { get; set; }
    }
}
