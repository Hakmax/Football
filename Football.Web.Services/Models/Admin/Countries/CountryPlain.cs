using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Models.Admin.Countries
{
    public class CountryPlain:ModelWithName<int>
    {
    }

    /*internal class CountryPlainMappingProfile : Profile
    {
        public CountryPlainMappingProfile()
        {
            CreateMap<Data.Entities.Football.Country, CountryPlain>();
        }
    }*/
}
