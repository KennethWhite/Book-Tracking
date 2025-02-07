import { Book } from './Book';

export interface Author {
  authorId: string;
  name: string;
  books: Book[];
  authorPage: URL;
}
