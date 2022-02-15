using Microsoft.EntityFrameworkCore.Migrations;

namespace CardCollector.Data.Migrations
{
    public partial class AddImageNameColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Year",
                table: "Cards",
                newName: "YearReleased");

            migrationBuilder.AddColumn<string>(
                name: "FullImageName",
                table: "Cards",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ThumbnailImageName",
                table: "Cards",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FullImageName",
                table: "Cards");

            migrationBuilder.DropColumn(
                name: "ThumbnailImageName",
                table: "Cards");

            migrationBuilder.RenameColumn(
                name: "YearReleased",
                table: "Cards",
                newName: "Year");
        }
    }
}
