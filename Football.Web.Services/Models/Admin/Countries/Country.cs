using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Models.Admin.Countries
{
    public class Country:ModelWithName<int>
    {
        public int CitiesNumber { get; set; }

    }

    internal class CountryMappingProfile:Profile
    {
        public CountryMappingProfile()
        {
            CreateMap<Data.Entities.Football.Country, Country>()
                .ForMember(dst=>dst.CitiesNumber, opt=>opt.MapFrom(src=>src.Cities.Count))
                .ForMember(dst=>dst.CitiesNumber, opt=>opt.ExplicitExpansion());
            CreateMap<Country, Data.Entities.Football.Country>();
        }
    }
}
