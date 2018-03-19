using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Models.Admin.Countries
{
    public class CountryDetails:Country
    {
        public string LatinName { get; set; }

    }

    internal class CountryDetailsMappingProfile:Profile
    {
        public CountryDetailsMappingProfile()
        {
            CreateMap<Data.Entities.Football.Country, CountryDetails>();
            CreateMap<CountryDetails, Data.Entities.Football.Country>();
        }
    }
}
