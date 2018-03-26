using Football.Web.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Football.Web.WebApi.Admin
{
    [AdminAuthFilter]
    [RoutePrefix("api/admin/v1/clubs")]
    public class ClubsApiController:AdminCotrollerBase
    {
        private readonly Lazy<IClubService> _clubService;
        public ClubsApiController(Lazy<IClubService> clubService)
        {
            _clubService = clubService;
        }

        [Route("getall/{countryId?}")]
        [HttpGet]
        public IHttpActionResult GetAll(int? countryId=null)
        {
            var clubs = _clubService.Value.GetClubs(countryId);
            return Ok(clubs);
        }

        [Route("{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var club = _clubService.Value.GetClub(id);
            return Ok(club);
        }
    }
}