using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Football
{
    public class Team:EntityWithName<int>
    {
        public virtual City City { get; set; }
        public int CityId { get; set; }
    }
}
