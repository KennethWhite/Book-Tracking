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
        <Table.Tr>
          <Table.Th>Author</Table.Th>
          <Table.Th>Link</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>{book.author}</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
};
