using Football.Web.Services;
using Football.Web.Services.Models.Admin;
using Football.Web.Services.Models.Admin.Countries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Football.Web.WebApi.Admin
{
    [RoutePrefix("api/admin/v1/countries")]
    [AdminAuthFilter()]
    public class CountriesApiController : ApiController
    {
        private readonly Lazy<ICountryService> _countryService;
        public CountriesApiController(Lazy<ICountryService> countryService)
        {
            _countryService = countryService;
            var user = HttpContext.Current.User;
        }

        [Route("getall")]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var c = _countryService.Value.GetCountries();
            return Ok(c);
        }

        [Route("getcities/{countryId}")]
        [HttpGet]
        public IHttpActionResult GetCities(int countryId)
        {
            var cities = _countryService.Value.GetCities(countryId);
            return Ok(cities);
        }

        [Route("{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var countryDetails = _countryService.Value.GetCountryDetails(id);
            return Ok(countryDetails);
        }

        [Route("")]
        [HttpPost]
        public IHttpActionResult Post(CountryDetails countryDetails)
        {
            var saved = _countryService.Value.CreateCountry(countryDetails);
            if (saved != null)
                return Ok(saved);
            else
                return BadRequest();
        }

        [Route("")]
        [HttpPut]
        public IHttpActionResult Put(CountryDetails countryDetails)
        {
            var saved = _countryService.Value.UpdateCountry(countryDetails);
            if (saved != null)
                return Ok(saved);
            else
                return BadRequest();
        }

        [Route("{id}")]
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var deleted = _countryService.Value.DeleteCountry(id);
            if (deleted)
                return Ok();
            else
                return BadRequest();
        }

        [Route("createcity")]
        [HttpPost]
        public IHttpActionResult CreateCity(City city)
        {
            var res= _countryService.Value.CreateCity(city);
            if (res != null)
                return Ok(res);
            else
                return BadRequest();
        }

        [Route("updatecity")]
        [HttpPut]
        public IHttpActionResult UpdateCity(City city)
        {
            var res= _countryService.Value.UpdateCity(city);
            if (res != null)
                return Ok(res);
            else
                return BadRequest();
        }

        [Route("deletecity/{id}")]
        [HttpDelete]
        public IHttpActionResult DeleteCity(int id)
        {
            if (_countryService.Value.DeleteCity(id))
                return Ok();
            return BadRequest();
        }
    }
}