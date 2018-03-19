using Football.Web.App_Start.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Football.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                constraints: new AdminRouteConstraint(x =>
                 {

                     return x.PathAndQuery.StartsWith("/admin", StringComparison.InvariantCultureIgnoreCase);
                 })
            );

            routes.MapRoute(
        name: "spa-fallback",
        url: "{controller}/{*action}",
        defaults: new { controller = "Admin", action = "Index" },
        constraints:new {
            action11 = new AdminRouteConstraint(x =>
        {
            return x.PathAndQuery.StartsWith("/admin", StringComparison.InvariantCultureIgnoreCase);
        })}
    );
        }
    }
}
