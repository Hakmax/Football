using Football.Web.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;

namespace Football.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly Lazy<IUsersService> _usersService;
        public HomeController(Lazy<IUsersService> usersService)
        {
            _usersService = usersService;
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login()
        {
            var claims= _usersService.Value.SignIn("test@test.ru", "123456");
            if(claims!=null)
            {
                //var claims = new System.Security.Claims.ClaimsIdentity();

                HttpContext.GetOwinContext().Authentication.SignIn(new Microsoft.Owin.Security.AuthenticationProperties
                {
                    IsPersistent=true
                }, claims);
            }
            return View("Index");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}