import { Musician } from '../musician/musician';
import { Track } from './tracks/tracks';
import { Comment } from './comments/comments'

export class Album{
  private _performersList: string = "";
  public constructor(
    public name: string,
    public cover: string,
    public releaseDate: string,
    public description: string,
    public genre: string,
    public recordLabel: string,
    public performers: Musician[],
    public tracks: Track[],
    public comments: Comment[],
    public id?: number
  ) {  }

  public get performersList(): string {
    this._performersList = "";
    this.performers.forEach((performer) =>{
      if(this._performersList == "")
      {
        this._performersList = performer.name;
      }
      else
      {
        this._performersList = this._performersList + ", " + performer.name;
      }

    });
    return this._performersList;
  }
}
