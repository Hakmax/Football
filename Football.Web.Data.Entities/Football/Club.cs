using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Football
{
    public class Club:EntityWithName<int>
    {
        public int CountryId { get; set; }
        public virtual Country Country { get; set; }

        public int? CityId { get; set; }
        public virtual City City { get; set; }

        public DateTime? ClubCreationDate { get; set; }
    }
}
