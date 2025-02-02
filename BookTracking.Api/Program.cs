using BookTracking;
using BookTracking.Models;
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

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();



app.MapGet("/book/{id}", async (Guid id, AppDbContext db) =>
    {
        var book = await  db.Books
            .Include(b => b.Author)
            .FirstOrDefaultAsync(b => b.Id == id);

        if (book is null)
        {
            return Results.NotFound();
        }

        return Results.Ok(book);
    })
    .WithName("GetBookById");

app.MapGet("/books", async (AppDbContext db) =>
{
    var books = await db.Books
        .Include(b => b.Author)
        .ToListAsync();

    return Results.Ok(books);
});

app.MapPost("/book/add", async (Book book, AppDbContext db) =>
    {
        await db.Books.AddAsync(book);
        await db.SaveChangesAsync();

        return Results.Created($"/book/{book.Id}", book);
    });


app.Run();

