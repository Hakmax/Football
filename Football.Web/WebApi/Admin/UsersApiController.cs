using Football.Web.Services;
using Football.Web.Services.Models;
using Football.Web.Services.Models.Admin.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Owin;
using System.Security.Claims;
using Microsoft.AspNet.Identity;

namespace Football.Web.WebApi.Admin
{
    [RoutePrefix("api/admin/v1/users")]
    public class UsersApiController:AdminCotrollerBase
    {
        private readonly Lazy<IAdminUserService> _adminUserService;
        public UsersApiController(Lazy<IAdminUserService> adminUserService)
        {
            _adminUserService = adminUserService;
        }

        [Route("loadUser")]
        [HttpPost]
        public IHttpActionResult LoadUser()
        {
            if (HttpContext.Current.User!=null && HttpContext.Current.User.Identity.IsAuthenticated)
            {
                var userModel = new UserModel();
                var cntxt = HttpContext.Current.GetOwinContext();
                var identity = (ClaimsIdentity)HttpContext.Current.User.Identity;
                userModel.Email=identity.FindFirst(ClaimTypes.Email)?.Value;
                userModel.Name = HttpContext.Current.User.Identity.Name;
                //HttpContext.Current.User.Identity
                return Ok(userModel);
            }
            else
                return BadRequest();
        }

        [Route("auth")]
        [HttpPost]
        public IHttpActionResult Auth(AuthModel auth)
        {
            var res = _adminUserService.Value.Authorize(auth);
            if(res!=null)
            {
                HttpContext.Current.GetOwinContext().Authentication.SignIn(new Microsoft.Owin.Security.AuthenticationProperties
                {
                    IsPersistent = true
                }, res);
                return Ok();
            }
            else
            {
                return Content(System.Net.HttpStatusCode.BadRequest, 
                    new ErrorResponseModel("Проверьте правильность введённых данных."));
            }
        }

        [Route("logout")]
        [HttpPost]
        public IHttpActionResult Logout()
        {
            HttpContext.Current.GetOwinContext().Authentication.SignOut(Common.AuthenticationConstants.AdminAuthenticationType);
            return Ok();
        }

        [Route("userprofile")]
        [HttpGet]
        [AdminAuthFilter]
        public IHttpActionResult GetUserProfile()
        {
            var profile = _adminUserService.Value.GetUserProfile(0);
            if (profile != null)
                return Ok(profile);
            else
                return BadRequest();
        }

        [Route("saveprofile")]
        [AdminAuthFilter]
        [HttpPut]
        public IHttpActionResult SaveUserProfile(UserProfileModel userProfile)
        {
            _adminUserService.Value.SaveUserProfile(userProfile);
            return Ok();
        }
    }

}