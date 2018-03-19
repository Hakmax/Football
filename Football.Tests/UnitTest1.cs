using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Autofac;
using Football.Web.Services;

namespace Football.Tests
{
    [TestClass]
    public class UnitTest1
    {
        public UnitTest1()
        {
            DependencyConfig.Configure();
        }

        [TestMethod]
        public void Register()
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IUsersService>();
                var res = service.Register("test@test.ru", "123456");
            }
        }

        [TestMethod]
        public void Login()
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IUsersService>();
                var res = service.SignIn("test@test.ru", "123456");
            }
        }
    }
}
