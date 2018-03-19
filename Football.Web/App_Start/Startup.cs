using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security.Cookies;
using System.Web.Services.Description;
using System.Threading.Tasks;

[assembly:OwinStartup(typeof(Football.Web.App_Start.Startup))]
namespace Football.Web.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = Common.AuthenticationConstants.ClientAuthenticationType,
                CookieName = Common.AuthenticationConstants.ClientAuthenticationCookies
            });

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = Common.AuthenticationConstants.AdminAuthenticationType,
                CookieName = Common.AuthenticationConstants.AdminAuthenticationCookies
            });
        }
    }

    public class TestClass : CookieAuthenticationProvider
    {
        public TestClass()
        {
            
            base.OnApplyRedirect =(x)=>{

            };
        }

       /* public void ApplyRedirect(CookieApplyRedirectContext context)
        {
            throw new NotImplementedException();
        }

        public void ResponseSignIn(CookieResponseSignInContext context)
        {
            throw new NotImplementedException();
        }

        public Task ValidateIdentity(CookieValidateIdentityContext context)
        {
            throw new NotImplementedException();
        }*/
    }
}