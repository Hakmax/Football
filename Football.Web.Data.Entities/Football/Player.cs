using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Football
{
    public class Player:EntityWithName<int>
    {
        public DateTime? BirthDate { get; set; }
        public bool Active { get; set; }
    }
}
