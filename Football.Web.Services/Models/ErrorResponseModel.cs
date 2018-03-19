using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services.Models
{
    public class ErrorResponseModel
    {
        public string ErrorMessage { get; set; }
        public ErrorResponseModel(string errorMessage)
        {
            ErrorMessage = errorMessage;
        }
    }
}
