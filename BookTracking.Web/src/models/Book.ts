import { Author } from './Author';
import { Tag } from './Tag';

export interface Book {
  Id: string;
  title: string;
  authorId: string;
  author: Author;
  narratorId?: string;
  narrator?: Author;
  releaseDate?: string;
  length?: string;
  tags: Tag[];
  rating?: number;
  dateFirstRead?: string;
  dateFinished?: string;
  lastReadBookOrChapter?: string;
  notes?: string;
  coverImage?: URL;
  link: URL;
  audioBookLink?: URL;
}
