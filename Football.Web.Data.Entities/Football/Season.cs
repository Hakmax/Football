using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Football
{
    public class Season:EntityWithName<int>
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public virtual Tournament Tournament { get; set; }
        public int TournamentId { get; set; }
    }
}
