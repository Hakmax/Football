using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Models.Admin
{
    public class AdminUserContext
    {
        public static AdminUserContext Current
        {
            get
            {
                AdminUserContext cntxt = null;
                cntxt = CallContext.LogicalGetData("AdminContext") as AdminUserContext;
                return cntxt;
            }
            set
            {
                CallContext.LogicalSetData("AdminContext", value);
            }
        }

        public int UserId { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
    }
}
