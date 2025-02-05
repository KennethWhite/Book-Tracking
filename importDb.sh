#!/bin/bash

# The name or ID of the PostgreSQL container
CONTAINER_NAME="$1"
# The path to the dump file (e.g., /path/to/backup/book-tracking.dump)  
DUMP_FILE_PATH="$2"   
DB_NAME="book-tracking"
DB_USER="localApiUser"

if [ -z "$CONTAINER_NAME" ] || [ -z "$DUMP_FILE_PATH" ]; then
  echo "Usage: $0 <container_name_or_id> <dump_file_path>"
  exit 1
fi

echo "Copying the dump file into the container..."
docker cp "$DUMP_FILE_PATH" "$CONTAINER_NAME:/tmp/book-tracking.dump"

echo "Restoring the database..."
docker exec -t "$CONTAINER_NAME" pg_restore -U "$DB_USER" -d "$DB_NAME" -v /tmp/book-tracking.dump

echo "Cleaning up the dump file inside the container..."
docker exec -t "$CONTAINER_NAME" rm /tmp/book-tracking.dump

echo "Database restore completed from: $DUMP_FILE_PATH"
