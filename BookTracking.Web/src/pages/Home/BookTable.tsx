import { Fragment, ReactNode, useState } from 'react';
import { Anchor, Badge, Button, Collapse, Flex, Image, Table } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Book } from '../../models/Book';
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
    tags: ['Fantasy', 'Magic'],
    rating: 7,
  },
  {
    id: '2',
    authorId: '2',
    link: new URL('https://www.google.com'),
    coverImage: './src/assets/testImage.webp',
    title: 'Book Title 2',
    author: 'Author',
    tags: ['Fantasy', 'Magic'],
    rating: 8,
  },
  {
    id: '3',
    authorId: '3',
    link: new URL('https://www.google.com'),
    coverImage: './src/assets/testImage.webp',
    title: 'Book Title 3',
    author: 'Author',
    tags: ['Fantasy', 'Magic', 'Sci-Fi', 'History', 'Progression', 'Cultivation', 'Fantasy'],
    rating: 9,
  },
  {
    id: '4',
    authorId: '4',
    link: new URL('https://www.google.com'),
    coverImage: './src/assets/testImage.webp',
    title: 'Book Title 4',
    author: 'Author',
    tags: ['Fantasy', 'Magic'],
    rating: 10,
    lastReadBookOrChapter: 'Ch. 23',
  },
];

export const BookTable = () => {
  const [openedRows, setOpenedRows] = useState<number[]>([]);

  const toggleOpened = (index: number) => {
    setOpenedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const rows = rowData.map((book, index) => (
    <>
      <Table.Tr key={book.id}>
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
            {book.tags.map((tag, index) => (
              <Badge key={index} color="blue" variant="filled">
                {tag}
              </Badge>
            ))}
          </Flex>
        </Table.Td>
        <Table.Td>{book.rating}</Table.Td>
        <Table.Td>{book.lastReadBookOrChapter}</Table.Td>
        <Table.Td>
          <Button onClick={() => toggleOpened(index)}>More</Button>
        </Table.Td>
      </Table.Tr>
      {/*TODO CSS animation*/}
      <Table.Tr
      // hidden={!openedRows.includes(index)}
      >
        <Table.Td colSpan={6}>
          <div className={openedRows.includes(index) ? 'row-expanded' : 'row-collapsed'}>
            <ExpandedBookRow book={book} />
          </div>
        </Table.Td>
      </Table.Tr>
    </>
  ));

  return (
    <div>
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
