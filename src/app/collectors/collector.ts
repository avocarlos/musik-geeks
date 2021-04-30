import { Album } from '../albums/album';
export interface Collector {
  id: number;
  name: string;
  telephone: string;
  email: string;
  comments: unknown[];
  favoritePerformers: unknown[];
  collectorAlbums: unknown[];
  albums: Album[];
}
