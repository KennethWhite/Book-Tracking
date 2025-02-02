using System.ComponentModel.DataAnnotations;

namespace BookTracking.Models;

public class Book
{
    [Key]
    public required Guid Id { get; set; }

    [Required]
    [StringLength(100)]
    public required string Title { get; set; }

    public required Guid AuthorId { get; set; }
    public required Author Author { get; set; }
    public required Uri BookLink { get; set; }
    public Uri? CoverImage { get; set; }

    //TODO consider making this an int, may not make sense for non-traditional publications like web series
    [StringLength(100)]
    public string? Length { get; set; }

    public List<Tag> Tags { get; set; } = new();

    [Range(0, 10)]
    public int? Rating { get; set; }

    public Guid? NarratorId { get; set; }
    public Author? Narrator { get; set; }
    public Uri? AudioBookLink { get; set; }

    [StringLength(100)]
    public string? LastReadBookOrChapter { get; set; }

    [StringLength(5000)]
    public string? Notes { get; set; }

    public DateOnly? ReleaseDate { get; set; }
    public DateOnly? DateFirstRead { get; set; }
    public DateOnly? DateFinished { get; set; }
}