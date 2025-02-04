using System.ComponentModel.DataAnnotations;

namespace BookTracking.Models;

public class Author
{
    [Key]
    public required Guid Id { get; set; }
    [Required]
    [StringLength(100)]
    public required string Name { get; set; }
    public required Uri AuthorPage { get; set; }
    // virtual allows EF to use lazy loading
    public virtual List<Book> Books { get; set; } = new();
}