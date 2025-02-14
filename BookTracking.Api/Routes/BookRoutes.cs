using BookTracking.Models;
using Microsoft.EntityFrameworkCore;

namespace BookTracking.Routes;

public static class BookRoutes
{
    public static WebApplication AddBookRoutes(this WebApplication app)
    {
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

        return app;
    }
}