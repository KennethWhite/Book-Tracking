import { ReactNode } from 'react';
import { Table } from '@mantine/core';
import { Book } from '../../models/Book';

interface ExpandedBookRowProps {
  book: Book;
}

export const ExpandedBookRow = ({ book }: ExpandedBookRowProps): ReactNode => {
  return (
    <Table>
      <Table.Thead>
        <Table.Th>Author</Table.Th>
        <Table.Th>Link</Table.Th>
      </Table.Thead>
      <Table.Tbody>
        <Table.Td>{book.author}</Table.Td>
        <Table.Td>{book.link.href}</Table.Td>
      </Table.Tbody>
    </Table>
  );
};
