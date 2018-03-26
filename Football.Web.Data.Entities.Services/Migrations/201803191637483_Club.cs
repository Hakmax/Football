namespace Football.Web.Data.Entities.Services.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Club : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Club",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CountryId = c.Int(nullable: false),
                        CityId = c.Int(),
                        ClubCreationDate = c.DateTime(),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.City", t => t.CityId)
                .ForeignKey("dbo.Country", t => t.CountryId, cascadeDelete: true)
                .Index(t => t.CountryId)
                .Index(t => t.CityId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Club", "CountryId", "dbo.Country");
            DropForeignKey("dbo.Club", "CityId", "dbo.City");
            DropIndex("dbo.Club", new[] { "CityId" });
            DropIndex("dbo.Club", new[] { "CountryId" });
            DropTable("dbo.Club");
        }
    }
}
