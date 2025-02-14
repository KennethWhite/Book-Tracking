using BookTracking;
using BookTracking.Models;
using BookTracking.Routes;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContextPool<AppDbContext>(opt =>
    opt.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        o => o
            .SetPostgresVersion(13, 0)));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    await dbContext.Database.EnsureCreatedAsync();
}

app.AddBookRoutes();
app.AddHealthRoutes();

app.MapOpenApi();
app.UseHttpsRedirection();


app.Run();