namespace Football.Web.Data.Entities.Services.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AdminChanges : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AdminUser", "BirthDate", c => c.DateTime());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AdminUser", "BirthDate");
        }
    }
}
