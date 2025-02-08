import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, NavLink, Table } from '@mantine/core';
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
      </Table.Tbody>
    </Table>
  );
};
