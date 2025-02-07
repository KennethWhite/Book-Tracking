import { ChangeEvent } from 'react';
import { Container, Group, MultiSelect, TextInput } from '@mantine/core';

interface SearchBarProps {
  onSearchChange: (text: string) => void;
  onTagsChange: (tags: string[]) => void;
  tags: string[];
  currentValue: string;
}

export function SearchBar({ onSearchChange, onTagsChange, tags, currentValue }: SearchBarProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  const handleTagsChange = (selectedTags: string[]) => {
    onTagsChange(selectedTags);
  };

  return (
    <Container>
      <Group grow preventGrowOverflow>
        <TextInput
          description="Title, Author, Narrator, Tag"
          placeholder="Search"
          value={currentValue}
          onChange={handleInputChange}
        />
        <MultiSelect
          description="Select tags to filter books"
          placeholder="Pick Genre"
          data={tags}
          onChange={handleTagsChange}
          clearable
        />
      </Group>
    </Container>
  );
}
