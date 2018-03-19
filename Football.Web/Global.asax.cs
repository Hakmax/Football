using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Autofac;
using System.Web.Security;
using System.IO;
using System.IO.Compression;
using System.Security.Claims;
using Microsoft.Owin.Security.DataHandler;
using Microsoft.Owin.Security.DataProtection;
using System.Security.Principal;

namespace Football.Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            GlobalConfiguration.Configure(WebApiConfig.Register);
            GlobalConfiguration.Configuration.Filters.Add(new WebApi.Admin.WebApiExceptionLoggerFilter());

            Services.ModelsConfiguration.Configure();
            var builder = new ContainerBuilder();
            builder.RegisterModule<Data.Entities.Services.DataServicesModule>();
            builder.RegisterModule<Services.WebServicesModule>();

            builder.RegisterControllers(typeof(Web.MvcApplication).Assembly);
            builder.RegisterApiControllers(typeof(Web.MvcApplication).Assembly);
            var container = builder.Build();



            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }

        protected void Application_PostAuthenticateRequest(object sender, EventArgs e)
        {
            var isAdminRequest = Request.RawUrl.ToLower().Contains("admin");
            string cookieName = !isAdminRequest ? Common.AuthenticationConstants.ClientAuthenticationCookies
                : Common.AuthenticationConstants.AdminAuthenticationCookies;
            string authType = !isAdminRequest ? Common.AuthenticationConstants.ClientAuthenticationType :
                Common.AuthenticationConstants.AdminAuthenticationType;

            HttpCookie authCookie = Request.Cookies[cookieName];
            IPrincipal principalUser = null;
            if (authCookie != null && !string.IsNullOrWhiteSpace(authCookie.Value))
                principalUser = Helpers.OwinHelper.GetOWinPrincipalUserFromCookiesValue(authCookie.Value, authType);
            if (principalUser == null && HttpContext.Current.User != null && HttpContext.Current.User.GetType() == typeof(WindowsPrincipal))
                return;
            HttpContext.Current.User = principalUser;
        }



    }
}
