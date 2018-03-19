using Football.Web.Data.Entities.Identity;
using Football.Web.Data.Entities.Services;
using Football.Web.Data.Entities.Services.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;

namespace Football.Web.Services.Implementations
{
    internal class UsersService : IUsersService
    {
        private readonly Lazy<IApplicationUserDataService> _applicationUserDataService;
        private readonly Lazy<ApplicationUserManager> _applicationUserManager;
        public UsersService(Lazy<IApplicationUserDataService> applicationUserDataService,
            Lazy<ApplicationUserManager> applicationUserManager)
        {
            _applicationUserDataService = applicationUserDataService;
            _applicationUserManager = applicationUserManager;
        }



        public ClaimsIdentity Register(string email, string password)
        {
            ClaimsIdentity res = null;
            if(!_applicationUserDataService.Value.Query().Any(x=>x.Email.ToLower()==email.ToLower()||x.UserName.ToLower()==email.ToLower()))
            {
                var newUser = new ApplicationUser
                {
                    Email = email.ToLower(),
                    UserName = email.ToLower(),
                    EmailConfirmed = true
                };
                var createResult= _applicationUserManager.Value.Create(newUser, password);
                if(createResult.Succeeded)
                {
                    res = _applicationUserManager.Value.CreateIdentity(newUser, Common.AuthenticationConstants.ClientAuthenticationType);
                }
            }
            return res;
        }

        public ClaimsIdentity SignIn(string email, string password)
        {
            ClaimsIdentity res = null;
            var user = _applicationUserDataService.Value.Query().FirstOrDefault(x => x.Email.ToLower() == email.ToLower() || x.UserName.ToLower() == email.ToLower());
            if(user!=null)
            {
                //var passHash = _applicationUserManager.Value.PasswordHasher.HashPassword(password);
                if(_applicationUserManager.Value.PasswordHasher.VerifyHashedPassword(user.PasswordHash, password)==PasswordVerificationResult.Success)
                {
                    res = _applicationUserManager.Value.CreateIdentity(user, Common.AuthenticationConstants.ClientAuthenticationType);
                    
                }
            }
            return res;
        }
    }
}
