namespace BookTracking.Routes;

public static class HealthRoutes
{
    public static WebApplication AddHealthRoutes(this WebApplication app)
    {
        app.MapGet("/ping", () => Results.Ok(DateTime.Now));
        app.MapGet("/version", () => Results.Ok(typeof(Program).Assembly.GetName().Version?.ToString()));
        app.MapGet("/health", () => Results.Ok(new { Status = "Healthy", Timestamp = DateTime.UtcNow }));
        app.MapGet("/info", () => Results.Ok(new
        {
            Service = "BookTracking.Api",
            Version = typeof(Program).Assembly.GetName().Version?.ToString(),
            Environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Unknown",
            Timestamp = DateTime.UtcNow
        }));

        var process = System.Diagnostics.Process.GetCurrentProcess();
        app.MapGet("/uptime", () =>
        {
            var uptime = DateTime.UtcNow - process.StartTime.ToUniversalTime();
            return Results.Ok(new { Uptime = uptime.ToString() });
        });

        return app;
    }
}