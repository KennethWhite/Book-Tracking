import { useState } from 'react';
import { Container } from '@mantine/core';
import { SearchBar } from '../components/SearchBar/SearchBar';

export function Home() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChanged = (text: string) => {
    setSearchText(text);
  };

  return (
    <>
      <Container>
        <SearchBar
          onSearchChange={handleSearchChanged}
          tags={['Fantasy', 'Sci-Fi', 'Cultivation', 'Magic']}
        />
      </Container>
    </>
  );
}
