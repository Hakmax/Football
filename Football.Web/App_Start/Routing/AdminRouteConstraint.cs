using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Routing;

namespace Football.Web.App_Start.Routing
{
    public class AdminRouteConstraint : IRouteConstraint
    {
        private readonly Func<Uri, bool> _predicate;

        public AdminRouteConstraint(Func<Uri, bool> predicate)
        {
            _predicate = predicate;
        }

        public bool Match(HttpContextBase httpContext, Route route, string parameterName, RouteValueDictionary values, RouteDirection routeDirection)
        {
            return this._predicate(httpContext.Request.Url);
        }
    }
}