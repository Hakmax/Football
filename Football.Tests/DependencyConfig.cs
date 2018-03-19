using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Tests
{
    public static class DependencyConfig
    {
        public static IContainer Container
        {
            get;private set;
        }
        public static void Configure()
        {
            var builder = new ContainerBuilder();
            builder.RegisterModule<Web.Data.Entities.Services.DataServicesModule>();
            builder.RegisterModule<Web.Services.WebServicesModule>();

            DependencyConfig.Container = builder.Build();
            Web.Services.ModelsConfiguration.Configure();
        }
    }
}
