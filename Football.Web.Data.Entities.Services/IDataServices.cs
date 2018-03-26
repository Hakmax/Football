using Football.Web.Data.Entities.Football;
using Football.Web.Data.Entities.Identity;
using Football.Web.Data.Entities.Identity.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Services
{
    public interface ICityDataService:IDataServiceExtended<City,int>
    {
    }
    public interface ICountryDataService : IDataServiceExtended<Country, int>
    {
    }
    public interface IPlayerDataService : IDataServiceExtended<Player, int>
    {
    }
    public interface ISeasonDataService : IDataServiceExtended<Season, int>
    {
    }
    public interface ITeamDataService : IDataServiceExtended<Team, int>
    {
    }
    public interface ITournamentDataService : IDataServiceExtended<Tournament, int>
    {
    }
    public interface IAdminUserDataService : IDataServiceExtended<AdminUser, int>
    {
    }
    public interface IApplicationUserDataService : IDataService<ApplicationUser>
    {
    }
    public interface IClubDataService:IDataServiceExtended<Club, int>
    {
    }
}
