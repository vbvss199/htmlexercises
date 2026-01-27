using Microsoft.EntityFrameworkCore;
using MyWebApi.Data;

var builder = WebApplication.CreateBuilder(args);

// add services to the container
var serverVersion = new MySqlServerVersion(new Version(8, 0, 29)); // Replace with your server version if different
builder.Services.AddDbContext<ApplicationDbContext>(options=>options
.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"), serverVersion));

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

app.Run();
