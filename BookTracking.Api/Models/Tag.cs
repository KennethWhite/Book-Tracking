using System.ComponentModel.DataAnnotations;

namespace BookTracking.Models;

public class Tag
{
    [Key]
    public required Guid Id { get; set; }
    [Required]
    [StringLength(50)]
    public required string Name { get; set; }
    [StringLength(50)]
    public string? Icon { get; set; }
    public List<Book> Books { get; set; } = new();
}