import { Album } from '../albums/album';
export interface Musician {
  id: number;
  name: string;
  image: string;
  description: string;
  birthDate: string;
  albums: Album[];
  performerPrizes: unknown[];
}
