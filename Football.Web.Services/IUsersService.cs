using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services
{
    public interface IUsersService
    {
        ClaimsIdentity Register(string email, string password);
        ClaimsIdentity SignIn(string email, string password);
    }
}
