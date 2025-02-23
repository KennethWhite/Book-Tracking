import { useState } from 'react';
import { Container, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { AddBook } from '@/pages/Home/AddBook';
import { BookTable } from './BookTable';

export const Home = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [searchText, setSearchText] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [opened, { open, close }] = useDisclosure(false);

  /* eslint-enable @typescript-eslint/no-unused-vars */

  const handleSearchChanged = (text: string) => {
    setSearchText(text);
  };

  const handleTagsChanged = (tags: string[]) => {
    setSelectedTags(tags);
  };

  const handleAddBookClicked = () => {
    if (opened) {
      close();
    } else {
      open();
    }
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
        <Modal
          opened={opened}
          onClose={close}
          title="Add book"
          centered
          size="auto"
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
          transitionProps={{ transition: 'fade', duration: 200, timingFunction: 'linear' }}
        >
          <AddBook test="This is test text" />
        </Modal>

        <BookTable />
      </Container>
    </>
  );
};
