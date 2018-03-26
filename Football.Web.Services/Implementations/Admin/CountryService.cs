using AutoMapper;
using AutoMapper.QueryableExtensions;
using Football.Web.Data.Entities.Services;
using Football.Web.Services.Models.Admin;
using Football.Web.Services.Models.Admin.Countries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Implementations.Admin
{
    internal class CountryService:ICountryService
    {
        private readonly Lazy<ICountryDataService> _countryDataService;
        private readonly Lazy<ICityDataService> _cityDataService;
        private readonly Lazy<IUnitOfWork> _unitOfWork;

        public CountryService(Lazy<ICountryDataService> countryDataService,
            Lazy<ICityDataService>cityDataService, Lazy<IUnitOfWork> unitOfWork)
        {
            _countryDataService = countryDataService;
            _cityDataService = cityDataService;
            _unitOfWork = unitOfWork;
        }

        public Country CreateCountry(Country country)
        {
            var newDbCountry = Mapper.Map<Data.Entities.Football.Country>(country);
            _countryDataService.Value.Create(newDbCountry);
            _unitOfWork.Value.SaveChanges();
            return Mapper.Map<Country>(newDbCountry);
        }

        public Country UpdateCountry(Country country)
        {
            Country res = null;
            var dbCountry = _countryDataService.Value.Get(country.Id);
            if(dbCountry!=null)
            {
                Mapper.Map(country, dbCountry);
                _unitOfWork.Value.SaveChanges();
                res = Mapper.Map<Country>(dbCountry);
            }
            return res;
        }

        public bool DeleteCountry(int countryId)
        {
            var res = false;
            var dbCountry = _countryDataService.Value.Get(countryId);
            if(dbCountry!=null)
            {
                _countryDataService.Value.Delete(dbCountry);
                _unitOfWork.Value.SaveChanges();
                res = true;
            }
            return res;
        }

        public List<Country> GetCountries()
        {
            return _countryDataService.Value.Query().ProjectTo<Country>(x=>x.CitiesNumber).ToList();
        }

        public List<City> GetCities(int countryId)
        {
            return _cityDataService.Value.Query().Where(x => x.CountryId == countryId).ProjectTo<City>().ToList();
        }

        public CountryDetails GetCountryDetails(int countryId)
        {
            var countryDetails = _countryDataService.Value.Query().Where(x => x.Id == countryId).ProjectTo<CountryDetails>()
                .FirstOrDefault();
            return countryDetails;
        }

        public CountryDetails UpdateCountry(CountryDetails countryDetails)
        {
            CountryDetails res = null;
            var dbCountry = _countryDataService.Value.Get(countryDetails.Id);
            if(dbCountry!=null)
            {
                Mapper.Map(countryDetails, dbCountry);
                _unitOfWork.Value.SaveChanges();
                res = Mapper.Map<CountryDetails>(dbCountry);
            }
            return res;
        }

        public CountryDetails CreateCountry(CountryDetails country)
        {
            var newCountry = Mapper.Map<Data.Entities.Football.Country>(country);
            _countryDataService.Value.Create(newCountry);
            _unitOfWork.Value.SaveChanges();
            return Mapper.Map<CountryDetails>(newCountry);
        }

        public List<CountryPlain>GetPlainCountries()
        {
            return _countryDataService.Value.Query().ProjectTo<CountryPlain>().ToList();
        }

        public City CreateCity(City city)
        {
            var newCity = Mapper.Map<Data.Entities.Football.City>(city);
            _cityDataService.Value.Create(newCity);
            try
            {
            _unitOfWork.Value.SaveChanges();

            }
            catch(Exception e)
            {
                int i = 0;
            }
            return Mapper.Map<City>(newCity);
        }

        public City UpdateCity(City city)
        {
            City res = null;
            var dbCity = _cityDataService.Value.Get(city.Id);
            if(dbCity!=null)
            {
                Mapper.Map(city, dbCity);
                _unitOfWork.Value.SaveChanges();
                res = Mapper.Map<City>(dbCity);
            }
            return res;
        }

        public bool DeleteCity(int cityId)
        {
            bool res = false;
            var dbCity = _cityDataService.Value.Get(cityId);
            if (dbCity != null)
            {
                _cityDataService.Value.Delete(dbCity);
                _unitOfWork.Value.SaveChanges();
                res = true;
            }
            return res;
        }
    }
}
