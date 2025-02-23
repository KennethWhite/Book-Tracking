import { ChangeEvent } from 'react';
import { Button, Container, Flex, MultiSelect, TextInput } from '@mantine/core';

interface SearchBarProps {
  onSearchChange: (text: string) => void;
  onTagsChange: (tags: string[]) => void;
  tags: string[];
  currentValue: string;
  onAddBookClicked: () => void;
}

export const SearchBar = ({
  onSearchChange,
  onTagsChange,
  tags,
  currentValue,
  onAddBookClicked,
}: SearchBarProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  const handleTagsChange = (selectedTags: string[]) => {
    onTagsChange(selectedTags);
  };

  return (
    <Container>
      <Flex columnGap={10} align="flex-end">
        <TextInput
          description="Title, Author, Narrator, Tag"
          placeholder="Search"
          value={currentValue}
          onChange={handleInputChange}
          style={{ flex: 4 }}
        />
        <MultiSelect
          description="Select tags to filter books"
          placeholder="Pick Genre"
          data={tags}
          onChange={handleTagsChange}
          searchable
          clearable
          style={{ flex: 4 }}
        />
        <Button justify="center" style={{ flex: 1 }} onClick={onAddBookClicked}>
          Add Book
        </Button>
      </Flex>
    </Container>
  );
};
