import { Author } from './Author';

export interface Book {
  bookId: string;
  title: string;
  author: Author;
  narrator?: Author;
  releaseDate?: string;
  dateFirstRead?: string;
  dateFinished?: string;
  coverImage?: string;
  link: string;
}
