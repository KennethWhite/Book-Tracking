using BookTracking.Models;
using Microsoft.EntityFrameworkCore;

namespace BookTracking;

public class AppDbContext : DbContext
{
    public DbSet<Book> Books { get; set; }
    public DbSet<Author> Authors { get; set; }
    
    public string DbPath { get; private set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
        optionsBuilder.UseNpgsql(configuration.GetConnectionString("BookDBConnection"));
    }
}