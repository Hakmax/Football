using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Models.Admin.Users
{
    public class AuthModel:UserModel
    {
        public string Password { get; set; }
    }
}
