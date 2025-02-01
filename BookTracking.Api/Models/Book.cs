using System.ComponentModel.DataAnnotations;

namespace BookTracking.Models;

public class Book
{
    [Key]
    public required Guid Id { get; set; }
    [Required]
    [StringLength(100)]
    public required string Title { get; set; }
    public required Author Author { get; set; }
    public required Uri Link { get; set; }

    public Author? Narrator { get; set; }
    public DateOnly? ReleaseDate { get; set; }
    public DateOnly? DateFirstRead { get; set; }
    public DateOnly? DateFinished { get; set; }
    public Uri? CoverImage { get; set; }
}