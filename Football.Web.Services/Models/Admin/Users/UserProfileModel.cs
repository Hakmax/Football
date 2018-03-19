using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Models.Admin.Users
{
    public class UserProfileModel:ModelWithName<int>
    {
        public string Email { get; set; }
        public string FullName { get; set; }
        public string About { get; set; }
        public DateTime? BirthDate { get; set; }
        public string ProfileImageUrl { get; set; }
    }

    internal class UserProfileMappingProfile:Profile
    {
        public UserProfileMappingProfile()
        {
            CreateMap<Data.Entities.Identity.Admin.AdminUser, UserProfileModel>();

        }

    }
}
