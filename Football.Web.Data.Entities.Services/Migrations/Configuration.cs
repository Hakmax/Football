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
                    Name = "������",
                    LatinName="Russia",
                    Cities=new List<City>(new City[]
                    {
                        new City
                        {
                            Name="������",
                            LatinName="Moscow"
                        },
                        new City
                        {
                            Name="�����-���������",
                            LatinName="Saint-Petersburg"
                        },
                        new City
                        {
                            Name="������",
                            LatinName="Kazan"
                        },
                        new City
                        {
                            Name="������",
                            LatinName="Rostov"
                        }
                    })
                };

                var eng = new Country
                {
                    Name = "������",
                    LatinName = "England",
                    Cities = new List<City>(new City[]
                    {
                        new City
                        {
                            Name="������",
                            LatinName="London"
                        },
                        new City
                        {
                            Name="���������",
                            LatinName="Liverpool"
                        },
                        new City
                        {
                            Name="�����������",
                            LatinName="Southgampton"
                        }
                    })
                };

                var it = new Country
                {
                    Name = "������",
                    LatinName = "Italy",
                    Cities = new List<City>(new City[]
                    {
                        new City
                        {
                            Name="���",
                            LatinName="Rome"
                        },
                        new City
                        {
                            Name="�������",
                            LatinName="Neapole"
                        },
                        new City
                        {
                            Name="�����",
                            LatinName="Milano"
                        },
                        new City
                        {
                            Name="���������",
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
