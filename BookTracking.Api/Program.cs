using BookTracking;
using BookTracking.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContextPool<AppDbContext>(opt =>
    opt.UseNpgsql(
        builder.Configuration.GetConnectionString("DbConnection"),
        o => o
            .SetPostgresVersion(13, 0)));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();



app.MapGet("/book/{id}", () =>
    {
    // fetch book by id from database
    })
    .WithName("GetBookById");

app.Run();

