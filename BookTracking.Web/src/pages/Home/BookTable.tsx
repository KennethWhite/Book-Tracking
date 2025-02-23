import { Fragment, useCallback, useState } from 'react';
import { Anchor, Badge, Button, Flex, Image, Table } from '@mantine/core';
import { Book } from '@/models/Book';
import { ExpandedBookRow } from './ExpandedBookRow';

import './BookTable.css';

const rowData: Book[] = [
  {
    id: '1',
    authorId: '1',
    link: new URL('https://www.google.com'),
    coverImage: './src/assets/testImage.webp',
    title: 'Book Title',
    author: 'Author',
    tags: [
      { name: 'Fantasy', id: 'fid1', books: [] },
      { name: 'Magic', id: 'mid1', books: [] },
    ],
    rating: 7,
  },
  {
    id: '2',
    authorId: '2',
    link: new URL('https://www.google.com'),
    coverImage: './src/assets/testImage.webp',
    title: 'Book Title 2',
    author: 'Author',
    tags: [
      { name: 'Fantasy', id: 'fid2', books: [] },
      { name: 'Magic', id: 'mid2', books: [] },
    ],
    rating: 8,
  },
  {
    id: '3',
    authorId: '3',
    link: new URL('https://www.google.com'),
    coverImage: './src/assets/testImage.webp',
    title: 'Book Title 3',
    author: 'Author',
    tags: [
      { name: 'Fantasy', id: 'fid3', books: [] },
      { name: 'Magic', id: 'mid3', books: [] },
      { name: 'Sci-Fi', id: 'sid3', books: [] },
      { name: 'History', id: 'hid3', books: [] },
      { name: 'Progression', id: 'pid3', books: [] },
      { name: 'Cultivation', id: 'cid3', books: [] },
      { name: 'System Apocalypse', id: 'said3', books: [] },
    ],
    rating: 9,
  },
  {
    id: '4',
    authorId: '4',
    link: new URL('https://www.google.com'),
    coverImage: './src/assets/testImage.webp',
    title: 'Book Title 4',
    author: 'Author',
    tags: [
      { name: 'Fantasy', id: 'fid4', books: [] },
      { name: 'Magic', id: 'mid4', books: [] },
    ],
    rating: 10,
    lastReadBookOrChapter: 'Ch. 23',
  },
];

export const BookTable = () => {
  const [openedRows, setOpenedRows] = useState<string[]>([]);

  const toggleOpened = useCallback((bookId: string) => {
    setOpenedRows((prev) =>
      prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]
    );
  }, []);

  const rows = rowData.map((book) => (
    <Fragment key={book.id}>
      <Table.Tr>
        <Table.Td>
          <Image radius="md" src={book.coverImage} h={120} fit="contain" />
        </Table.Td>
        <Table.Td>
          <Anchor href={book.link.href} target="_blank">
            {book.title}
          </Anchor>
        </Table.Td>
        <Table.Td>{book.author}</Table.Td>
        <Table.Td>
          <Flex wrap="wrap" gap="sm">
            {book.tags.map((tag) => (
              <Badge key={tag.id} color="blue" variant="filled">
                {tag.name}
              </Badge>
            ))}
          </Flex>
        </Table.Td>
        <Table.Td>{book.rating}</Table.Td>
        <Table.Td>{book.lastReadBookOrChapter}</Table.Td>
        <Table.Td>
          <Button onClick={() => toggleOpened(book.id)}>More</Button>
        </Table.Td>
      </Table.Tr>
      {/*TODO CSS animation*/}
      <Table.Tr
      // hidden={!openedRows.includes(index)}
      >
        <Table.Td colSpan={6}>
          <div className={openedRows.includes(book.id) ? 'row-expanded' : 'row-collapsed'}>
            <ExpandedBookRow book={book} />
          </div>
        </Table.Td>
      </Table.Tr>
    </Fragment>
  ));

  return (
    <div className="book-table">
      <Table stickyHeader stickyHeaderOffset={60} highlightOnHover withRowBorders={false}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Cover</Table.Th>
            <Table.Th>Book Title</Table.Th>
            <Table.Th>Author</Table.Th>
            <Table.Th>Tags</Table.Th>
            <Table.Th>Rating</Table.Th>
            <Table.Th>Last Read Book/Chapter</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};
