using AutoMapper;
using Football.Web.Data.Entities.Services;
using Football.Web.Services.Models.Admin;
using Football.Web.Services.Models.Admin.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Implementations.Admin
{
    internal class AdminUserService: IAdminUserService
    {
        private readonly Lazy<IAdminUserDataService> _adminUserDataService;
        private readonly Lazy<IUnitOfWork> _unitOfWork;

        public AdminUserService(Lazy<IAdminUserDataService> adminUserDataService,
            Lazy<IUnitOfWork> unitOfWork)
        {
            _adminUserDataService = adminUserDataService;
            _unitOfWork = unitOfWork;
        }

        public ClaimsIdentity Authorize(AuthModel authModel)
        {
            ClaimsIdentity claims = null;
            var user = _adminUserDataService.Value.Query().FirstOrDefault(x => x.Email.ToLower() == authModel.Email.ToLower());
            if(user!=null)
            {
                if(user.PasswordHash==authModel.Password)
                {
                    claims = new ClaimsIdentity(Common.AuthenticationConstants.AdminAuthenticationType);
                    claims.AddClaim(new Claim(ClaimTypes.Name, user.Name));
                    claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()));
                    claims.AddClaim(new Claim(ClaimTypes.Email, user.Email));
                }
            }
            return claims;
        }

        public UserProfileModel GetUserProfile(int adminUserId)
        {
            var user = _adminUserDataService.Value.Query().FirstOrDefault();
            var res = Mapper.Map<UserProfileModel>(user);
            return res;
        }

        public void SaveUserProfile(UserProfileModel profile)
        {

            int userId = AdminUserContext.Current.UserId;
            var user = _adminUserDataService.Value.Get(userId);
            if(user!=null)
            {
                user.About = profile.About;
                user.BirthDate = profile.BirthDate;
                user.FullName = profile.FullName;
                _unitOfWork.Value.SaveChanges();
            }

        }
    }
}
