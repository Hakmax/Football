using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Football
{
    public class City:EntityWithName<int>
    {
        [MaxLength(256),Required]
        public string LatinName { get; set; }
        public virtual Country Country { get; set; }
        public int CountryId { get; set; }
    }
}
