import { useState } from 'react';
import { Container } from '@mantine/core';
import { SearchBar } from '../components/SearchBar/SearchBar';

export function Home() {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [searchText, setSearchText] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const handleSearchChanged = (text: string) => {
    setSearchText(text);
  };

  const handleTagsChanged = (tags: string[]) => {
    setSelectedTags(tags);
  };

  return (
    <>
      <Container>
        <SearchBar
          onSearchChange={handleSearchChanged}
          onTagsChange={handleTagsChanged}
          tags={['Fantasy', 'Sci-Fi', 'Cultivation', 'Magic']}
        />
      </Container>
    </>
  );
}
