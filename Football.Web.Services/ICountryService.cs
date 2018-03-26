using Football.Web.Services.Models.Admin;
using Football.Web.Services.Models.Admin.Countries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services
{
    public interface ICountryService
    {
        Country CreateCountry(Country country);
        Country UpdateCountry(Country country);
        List<Country> GetCountries();
        List<City> GetCities(int countryId);
        bool DeleteCountry(int countryId);
        CountryDetails GetCountryDetails(int countryId);
        CountryDetails UpdateCountry(CountryDetails countryDetails);
        CountryDetails CreateCountry(CountryDetails country);
        City CreateCity(City city);
        City UpdateCity(City city);
        bool DeleteCity(int cityId);
        List<CountryPlain> GetPlainCountries();
    }
}
