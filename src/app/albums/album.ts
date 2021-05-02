import { Musician } from "../musician/musician";

export class Album{
  public constructor(
    public name: string,
    public cover: string,
    public releaseDate: string,
    public description: string,
    public genre: string,
    public recordLabel: string,
    public performers: Musician[],
    public id?: number
  ) { }
}
