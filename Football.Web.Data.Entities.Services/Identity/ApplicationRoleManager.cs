using Football.Web.Data.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;

namespace Football.Web.Data.Entities.Services.Identity
{
    public class ApplicationRoleManager : Microsoft.AspNet.Identity.RoleManager<ApplicationUserRole>
    {
        public ApplicationRoleManager(IRoleStore<ApplicationUserRole, string> store) : base(store)
        {
        }
    }
}
