using Football.Web.Services.Models.Admin.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services
{
    public interface IAdminUserService
    {
        ClaimsIdentity Authorize(AuthModel authModel);
        UserProfileModel GetUserProfile(int adminUserId);
        void SaveUserProfile(UserProfileModel profile);
    }
}
