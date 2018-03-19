using Football.Web.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Filters;
using System.Web.Http.Results;
using System.Web.Http.Controllers;
using System.Net.Http.Headers;
using Football.Web.Services.Models.Admin;
using System.Security.Principal;
using System.Security.Claims;

namespace Football.Web.WebApi.Admin
{
    public class AdminCotrollerBase : ApiController
    {
    }

    internal class WebApiExceptionLoggerFilter : System.Web.Http.Filters.FilterAttribute, IExceptionFilter
    {
        public Task ExecuteExceptionFilterAsync(HttpActionExecutedContext actionExecutedContext, CancellationToken cancellationToken)
        {
            var result = Task.FromResult(false);
            actionExecutedContext.Response = new System.Net.Http.HttpResponseMessage(HttpStatusCode.InternalServerError);
            actionExecutedContext.Response.Content = new ObjectContent<ErrorResponseModel>(new ErrorResponseModel("Произошла ошибка."), new JsonMediaTypeFormatter());
            return result;
        }
    }


    internal class AdminAuthFilter : AuthorizationFilterAttribute, IAuthenticationFilter
    {
        public Task AuthenticateAsync(HttpAuthenticationContext context, CancellationToken cancellationToken)
        {
            var cntxt = HttpContext.Current.GetOwinContext();
            if (cntxt?.Authentication?.User?.Identity?.IsAuthenticated == false)
            {
                context.ErrorResult = new UnauthorizedResult(new AuthenticationHeaderValue[] { }, context.Request);
            }
            else
            {
                var claims = (ClaimsIdentity)cntxt.Authentication.User.Identity;
                AdminUserContext.Current = new AdminUserContext
                {
                    Name = cntxt.Authentication.User.Identity.Name,
                    Email=claims.FindFirst(ClaimTypes.Email)?.Value,
                    UserId=int.Parse(claims.FindFirst(ClaimTypes.NameIdentifier).Value)
                };
            }
            return Task.FromResult(false);
        }

        public Task ChallengeAsync(HttpAuthenticationChallengeContext context, CancellationToken cancellationToken)
        {
            return Task.FromResult(false);
        }

        /*public override void OnAuthorization(HttpActionContext actionContext)
        {
            var cntxt = HttpContext.Current.GetOwinContext();
            if(cntxt.Authentication?.User?.Identity?.IsAuthenticated==false)
            {
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
            }
        }*/


    }
}