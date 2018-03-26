using Football.Web.Data.Entities.Football;
using Football.Web.Data.Entities.Identity;
using Football.Web.Data.Entities.Identity.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Services.Implementations
{
    internal class CityDataService : DataServiceExtended<City, int>, ICityDataService
    {
        public CityDataService(FootballWebDbContext dbContext) : base(dbContext)
        {
        }
    }
    internal class CountryDataService : DataServiceExtended<Country, int>, ICountryDataService
    {
        public CountryDataService(FootballWebDbContext dbContext) : base(dbContext)
        {
        }
    }
    internal class PlayerDataService : DataServiceExtended<Player, int>, IPlayerDataService
    {
        public PlayerDataService(FootballWebDbContext dbContext) : base(dbContext)
        {
        }
    }
    internal class SeasonDataService : DataServiceExtended<Season, int>, ISeasonDataService
    {
        public SeasonDataService(FootballWebDbContext dbContext) : base(dbContext)
        {
        }
    }
    internal class TeamDataService : DataServiceExtended<Team, int>, ITeamDataService
    {
        public TeamDataService(FootballWebDbContext dbContext) : base(dbContext)
        {
        }
    }
    internal class TournamentDataService : DataServiceExtended<Tournament, int>, ITournamentDataService
    {
        public TournamentDataService(FootballWebDbContext dbContext) : base(dbContext)
        {
        }
    }
    internal class AdminUserDataService : DataServiceExtended<AdminUser, int>, IAdminUserDataService
    {
        public AdminUserDataService(FootballWebDbContext dbContext) : base(dbContext)
        {
        }
    }
    internal class ApplicationUserDataService : DataService<ApplicationUser>, IApplicationUserDataService
    {
        public ApplicationUserDataService(FootballWebDbContext dbContext) : base(dbContext)
        {
        }
    }
    internal class ClubDataService : DataServiceExtended<Club, int>, IClubDataService
    {
        public ClubDataService(FootballWebDbContext dbContext) : base(dbContext)
        {
        }
    }

}
