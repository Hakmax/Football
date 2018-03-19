using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;

namespace Football.Web.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login()
        {
            var ci = new ClaimsIdentity(Web.Common.AuthenticationConstants.AdminAuthenticationType);
            ci.AddClaim(new Claim(ClaimTypes.NameIdentifier, "s01-65656-5656"));
            ci.AddClaim(new Claim(ClaimTypes.Name, "admin@admin.com"));
            ci.AddClaim(new Claim(ClaimTypes.PrimaryGroupSid, "admin@admin.com"));
            HttpContext.GetOwinContext().Authentication.SignIn(new Microsoft.Owin.Security.AuthenticationProperties
            {
                IsPersistent = true
            }, ci);
            return View("Index");
        }

        protected override void HandleUnknownAction(string actionName)
        {
            this.View("Index").ExecuteResult(this.ControllerContext);
            //base.HandleUnknownAction(actionName);
        }
    }
}