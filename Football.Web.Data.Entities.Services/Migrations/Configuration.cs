namespace Football.Web.Data.Entities.Services.Migrations
{
    using Football;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FootballWebDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FootballWebDbContext context)
        {
            if(!context.Countries.Any())
            {
                var rus = new Country
                {
                    Name = "Россия",
                    LatinName="Russia",
                    Cities=new List<City>(new City[]
                    {
                        new City
                        {
                            Name="Москва",
                            LatinName="Moscow"
                        },
                        new City
                        {
                            Name="Санкт-Петербург",
                            LatinName="Saint-Petersburg"
                        },
                        new City
                        {
                            Name="Казань",
                            LatinName="Kazan"
                        },
                        new City
                        {
                            Name="Ростов",
                            LatinName="Rostov"
                        }
                    })
                };

                var eng = new Country
                {
                    Name = "Англия",
                    LatinName = "England",
                    Cities = new List<City>(new City[]
                    {
                        new City
                        {
                            Name="Лондон",
                            LatinName="London"
                        },
                        new City
                        {
                            Name="Ливерпуль",
                            LatinName="Liverpool"
                        },
                        new City
                        {
                            Name="Саутгемптон",
                            LatinName="Southgampton"
                        }
                    })
                };

                var it = new Country
                {
                    Name = "Италия",
                    LatinName = "Italy",
                    Cities = new List<City>(new City[]
                    {
                        new City
                        {
                            Name="Рим",
                            LatinName="Rome"
                        },
                        new City
                        {
                            Name="Неаполь",
                            LatinName="Neapole"
                        },
                        new City
                        {
                            Name="Милан",
                            LatinName="Milano"
                        },
                        new City
                        {
                            Name="Флоренция",
                            LatinName="Florenzia"
                        }
                    })
                };

                context.Countries.Add(rus);
                context.Countries.Add(eng);
                context.Countries.Add(it);
            }
        }
    }
}
