using Football.Web.Data.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;

namespace Football.Web.Data.Entities.Services.Identity
{
    public class ApplicationUserManager : Microsoft.AspNet.Identity.UserManager<ApplicationUser>
    {
        public ApplicationUserManager(IUserStore<ApplicationUser> store) : base(store)
        {
        }
    }
}
