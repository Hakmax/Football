using Football.Web.Data.Entities.Football;
using Football.Web.Data.Entities.Identity;
using Football.Web.Data.Entities.Identity.Admin;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Services
{
    public class FootballWebDbContext:Microsoft.AspNet.Identity.EntityFramework.IdentityDbContext<ApplicationUser>
    {
        public const string DbConnectionName = "FootballWebDbConnection";
        public IDbSet<City> Cities { get; set; }
        public IDbSet<Country> Countries { get; set; }
        public IDbSet<Club> Clubs { get; set; }
        public IDbSet<Player> Players { get; set; }
        public IDbSet<Season> Seasons { get; set; }
        public IDbSet<Team> Teams { get; set; }
        public IDbSet<Tournament> Tournaments { get; set; }
        public IDbSet<AdminUser> AdminUsers { get; set; }

        public FootballWebDbContext():base(DbConnectionName)
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<System.Data.Entity.ModelConfiguration.Conventions.PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }
    }
}
