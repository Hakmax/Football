using Football.Web.Services.Models.Admin.Clubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Services
{
    public interface IClubService
    {
        List<ClubPlain> GetClubs(int? countryId);
        ClubPlain GetClub(int clubId);
    }
}
