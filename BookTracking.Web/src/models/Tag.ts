import { Book } from './Book';

export interface Tag {
  id: string;
  name: string;
  icon?: string;
  books: Book[];
}
