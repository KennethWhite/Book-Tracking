﻿import { ChangeEvent } from 'react';
import { Container, Group, MultiSelect, TextInput } from '@mantine/core';

interface SearchBarProps {
  onSearchChange: (text: string) => void;
  tags: string[];
}

export function SearchBar({ onSearchChange, tags }: SearchBarProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };
  return (
    <Container>
      <Group grow preventGrowOverflow>
        <TextInput
          description="Title, Author, Narrator, Tag"
          placeholder="Search"
          onChange={handleInputChange}
        />
        <MultiSelect
          description="Select tags to filter books"
          placeholder="Pick Genre"
          data={tags}
          clearable
        />
      </Group>
    </Container>
  );
}
