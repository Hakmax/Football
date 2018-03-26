using Football.Web.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Football.Web.WebApi.Admin
{
    [RoutePrefix("api/admin/v1/common")]
    public class CommonApiController:AdminCotrollerBase
    {
        private readonly Lazy<ICountryService> _countryService;
        public CommonApiController(Lazy<ICountryService>countryService)
        {
            _countryService = countryService;
        }

        [Route("getcountries")]
        [HttpGet]
        public IHttpActionResult GetCountries()
        {
            return Ok(_countryService.Value.GetPlainCountries());
        }
    }
}