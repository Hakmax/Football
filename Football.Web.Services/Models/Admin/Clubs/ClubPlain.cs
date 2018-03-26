using AutoMapper;
using Football.Web.Services.Models.Admin.Countries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Models.Admin.Clubs
{
    public class ClubPlain:ModelWithName<int>
    {
        public CountryPlain Country { get; set; }
        public DateTime? ClubCreationDate { get; set; }
    }

    /*internal class ClubPlainMappingProfile:Profile
    {
        public ClubPlainMappingProfile()
        {
            CreateMap<Data.Entities.Football.Club, ClubPlain>();
        }
    }*/
}
