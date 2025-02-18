import { Author } from './Author';
import { Tag } from './Tag';

export interface Book {
  id: string;
  title: string;
  authorId: string;
  // author: Author;
  author: string;
  narratorId?: string;
  narrator?: Author;
  releaseDate?: string;
  length?: string;
  // tags: Tag[];
  tags: string[];
  rating?: number;
  dateFirstRead?: string;
  dateFinished?: string;
  lastReadBookOrChapter?: string;
  notes?: string;
  coverImage?: URL | string;
  link: URL;
  audioBookLink?: URL;
}
