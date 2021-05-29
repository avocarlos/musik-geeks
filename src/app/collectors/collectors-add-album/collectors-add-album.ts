export class CollectorsAddAlbum {
  public constructor(
    public price: string,
    public status: string,
    public id?: number,
) { }
}

export interface CreateAlbumPayload {
  price: string;
  status: string;
  album: {
    id: number;
  };
  collector: {
    id: number;
  };
}

