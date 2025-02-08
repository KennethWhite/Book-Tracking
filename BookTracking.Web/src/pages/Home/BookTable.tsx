import { Fragment, ReactNode } from 'react';
import { Anchor, Badge, Button, Collapse, Flex, Image, Table } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Book } from '../../models/Book';
import { ExpandedBookRow } from './ExpandedBookRow';

export const BookTable = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const rowData: Book[] = [
    {
      Id: '1',
      authorId: '1',
      link: new URL('https://www.google.com'),
      coverImage: './src/assets/testImage.webp',
      title: 'Book Title',
      author: 'Author',
      tags: ['Fantasy', 'Magic'],
      rating: 7,
    },
    {
      Id: '2',
      authorId: '2',
      link: new URL('https://www.google.com'),
      coverImage: './src/assets/testImage.webp',
      title: 'Book Title 2',
      author: 'Author',
      tags: ['Fantasy', 'Magic'],
      rating: 8,
    },
    {
      Id: '3',
      authorId: '3',
      link: new URL('https://www.google.com'),
      coverImage: './src/assets/testImage.webp',
      title: 'Book Title 3',
      author: 'Author',
      tags: ['Fantasy', 'Magic', 'Sci-Fi', 'History', 'Progression', 'Cultivation', 'Fantasy'],
      rating: 9,
    },
    {
      Id: '4',
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

  const rows = rowData.map((book, index) => (
    <>
      <Table.Tr key={index}>
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
          {' '}
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
          {/*TODO expand only the selected row*/}
          <Button onClick={toggle}>More</Button>
        </Table.Td>
      </Table.Tr>
      {/*TODO CSS animation*/}
      <Table.Tr hidden={!opened}>
        <Table.Td colSpan={6}>
          <ExpandedBookRow book={book} />
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
