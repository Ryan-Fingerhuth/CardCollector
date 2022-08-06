using Microsoft.EntityFrameworkCore.Migrations;

namespace CardCollector.Data.Migrations
{
    public partial class UpdateCardTableNumberInSetColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "OriginalSet",
                table: "Cards",
                newName: "OriginalSetName");

            migrationBuilder.AlterColumn<string>(
                name: "CardName",
                table: "Cards",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50);

            migrationBuilder.AddColumn<int>(
                name: "NumberInSet",
                table: "Cards",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumberInSet",
                table: "Cards");

            migrationBuilder.RenameColumn(
                name: "OriginalSetName",
                table: "Cards",
                newName: "OriginalSet");

            migrationBuilder.AlterColumn<string>(
                name: "CardName",
                table: "Cards",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255);
        }
    }
}
