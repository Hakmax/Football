using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Models.Admin
{
    public class City:ModelWithName<int>
    {
        public int CountryId { get; set; }
        public string LatinName { get; set; }
    }

    internal class CityMappingProfile:Profile
    {
        public CityMappingProfile()
        {
            CreateMap<Data.Entities.Football.City, City>();
            CreateMap<City, Data.Entities.Football.City>();
        }
    }
}
