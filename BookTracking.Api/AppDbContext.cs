using BookTracking.Models;
using Microsoft.EntityFrameworkCore;

namespace BookTracking;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Book> Books { get; set; }
    public DbSet<Author> Authors { get; set; }
    public DbSet<Tag> Tags { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Author>()
            .HasMany(a => a.Books)
            .WithOne(b => b.Author)
            .HasForeignKey(b => b.AuthorId);
        
        modelBuilder.Entity<Tag>()
            .HasMany(t => t.Books)
            .WithMany(b => b.Tags);
        
        modelBuilder.Entity<Book>()
            .HasOne(b => b.Narrator)
            .WithMany()
            .HasForeignKey(b => b.NarratorId);

        base.OnModelCreating(modelBuilder);
    }
}