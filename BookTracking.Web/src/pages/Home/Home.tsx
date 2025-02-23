import { useState } from 'react';
import { Container } from '@mantine/core';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { AddBook } from '@/pages/Home/AddBook';
import { BookTable } from './BookTable';

export const Home = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [searchText, setSearchText] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const handleSearchChanged = (text: string) => {
    setSearchText(text);
  };

  const handleTagsChanged = (tags: string[]) => {
    setSelectedTags(tags);
  };

  const handleAddBookClicked = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Container>
        <SearchBar
          onSearchChange={handleSearchChanged}
          onTagsChange={handleTagsChanged}
          tags={['Fantasy', 'Sci-Fi', 'Cultivation', 'Magic']}
          currentValue={searchText}
          onAddBookClicked={handleAddBookClicked}
        />
        {showModal && <AddBook onClose={() => setShowModal(false)} />}
        <BookTable />
      </Container>
    </>
  );
};
