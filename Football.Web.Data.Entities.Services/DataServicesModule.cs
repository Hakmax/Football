using Autofac;
using Football.Web.Data.Entities.Identity;
using Football.Web.Data.Entities.Services.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Services
{
    public class DataServicesModule:Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<FootballWebDbContext, Migrations.Configuration>(FootballWebDbContext.DbConnectionName));
            builder.RegisterType<FootballWebDbContext>().AsSelf().InstancePerLifetimeScope().PropertiesAutowired();

            builder.Register(x=>new UserStore<ApplicationUser>(x.Resolve<FootballWebDbContext>())).AsImplementedInterfaces().InstancePerLifetimeScope().PropertiesAutowired();
            builder.Register(x => new RoleStore<ApplicationUserRole>(x.Resolve<FootballWebDbContext>())).AsImplementedInterfaces().InstancePerLifetimeScope().PropertiesAutowired();

            builder.Register<IdentityFactoryOptions<ApplicationUserManager>>(c => new IdentityFactoryOptions<ApplicationUserManager>
            { DataProtectionProvider = new Microsoft.Owin.Security.DataProtection.DpapiDataProtectionPr‌​ovider("Football web") });
            builder.RegisterType<ApplicationUserManager>().AsSelf().InstancePerLifetimeScope().PropertiesAutowired();
            builder.RegisterType<ApplicationRoleManager>().AsSelf().InstancePerLifetimeScope().PropertiesAutowired();

            builder.RegisterAssemblyTypes(ThisAssembly).AsImplementedInterfaces().InstancePerLifetimeScope().PropertiesAutowired();
            base.Load(builder);
        }
    }
}
