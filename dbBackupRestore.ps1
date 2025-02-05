param(
    [Parameter(Mandatory=$true, HelpMessage="Specify the action to take: 'export' or 'import'")]
    [string]$Action,
    
    [Parameter(Mandatory=$true, HelpMessage="Specify the name or ID of the PostgreSQL container")]
    [string]$ContainerName,
    
    [Parameter(Mandatory=$true, HelpMessage="Specify the path for dump file (for export: output path, for import: input path)")]
    [string]$DumpFilePath 
)


# Configuration
$DbName = "book-tracking"
$DbUser = "localApiUser"

# Validate arguments
if (-not $Action -or -not $ContainerName -or -not $DumpFilePath) {
    Write-Host "Usage: .\dbBackupRestore.ps1 <export|import> <container_name_or_id> <dump_file_path>"
    exit 1
}

if ($Action -eq "export") {
    Write-Host "Exporting database..."
    Write-Host "Creating database dump..."
    docker exec -t $ContainerName pg_dump -U $DbUser -d $DbName -F c -b -v -f /tmp/book-tracking.dump

    Write-Host "Copying the dump file from the container..."
    docker cp "$ContainerName:/tmp/book-tracking.dump" $DumpFilePath

    Write-Host "Cleaning up the dump file inside the container..."
    docker exec -t $ContainerName rm /tmp/book-tracking.dump

    Write-Host "Database dump created at: $DumpFilePath"
} elseif ($Action -eq "import") {
    Write-Host "Importing database..."
    Write-Host "Copying the dump file into the container..."
    docker cp $DumpFilePath "$ContainerName:/tmp/book-tracking.dump"

    Write-Host "Restoring the database..."
    docker exec -t $ContainerName pg_restore -U $DbUser -d $DbName -v /tmp/book-tracking.dump

    Write-Host "Cleaning up the dump file inside the container..."
    docker exec -t $ContainerName rm /tmp/book-tracking.dump

    Write-Host "Database restore completed from: $DumpFilePath"
} else {
    Write-Host "Invalid action. Use 'export' or 'import'."
    exit 1
}
