import { Book } from './Book';

export interface Author {
  authorId: string;
  firstName: string;
  lastName: string;
  books: Book[];
  authorPage: string;
}
