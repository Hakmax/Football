using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Football.Web.Services.Models.Admin;
using Football.Web.Services.Models.Admin.Countries;
using Football.Web.Services.Models.Admin.Users;

namespace Football.Web.Services
{
    public static class ModelsConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(AddMappings);
        }

        public static void AddMappings(IMapperConfigurationExpression config)
        {
            config.AddProfile<CityMappingProfile>();
            config.AddProfile<CountryMappingProfile>();
            config.AddProfile<CountryDetailsMappingProfile>();
            config.AddProfile<UserProfileMappingProfile>();
        }
    }
}
