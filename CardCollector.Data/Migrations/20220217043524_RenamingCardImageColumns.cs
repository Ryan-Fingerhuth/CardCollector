using Microsoft.EntityFrameworkCore.Migrations;

namespace CardCollector.Data.Migrations
{
    public partial class RenamingCardImageColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ThumbnailImageName",
                table: "Cards",
                newName: "ThumbnailImageExtension");

            migrationBuilder.RenameColumn(
                name: "FullImageName",
                table: "Cards",
                newName: "FullImageExtension");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ThumbnailImageExtension",
                table: "Cards",
                newName: "ThumbnailImageName");

            migrationBuilder.RenameColumn(
                name: "FullImageExtension",
                table: "Cards",
                newName: "FullImageName");
        }
    }
}
