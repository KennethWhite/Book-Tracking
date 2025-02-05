#!/bin/bash

# The name or ID of the PostgreSQL container
CONTAINER_NAME="$1"
# The local path where the dump file will be saved (e.g., /path/to/backup/book-tracking.dump)   
DUMP_FILE_PATH="$2"   
DB_NAME="book-tracking"
DB_USER="localApiUser"

if [ -z "$CONTAINER_NAME" ] || [ -z "$DUMP_FILE_PATH" ]; then
  echo "Usage: $0 <container_name_or_id> <dump_file_path>"
  exit 1
fi

echo "Creating database dump..."
docker exec -t "$CONTAINER_NAME" pg_dump -U "$DB_USER" -d "$DB_NAME" -F c -b -v -f /tmp/book-tracking.dump

echo "Copying the dump file from the container..."
docker cp "$CONTAINER_NAME:/tmp/book-tracking.dump" "$DUMP_FILE_PATH"

echo "Cleaning up the dump file inside the container..."
docker exec -t "$CONTAINER_NAME" rm /tmp/book-tracking.dump

echo "Database dump created at: $DUMP_FILE_PATH"
