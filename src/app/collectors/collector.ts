export class Collector {
  public constructor(
    public name: string,
    public telephone: string,
    public email: string,
    public comments:[],
    public favoritePerformers:[],
    public collectorAlbums:[],
    public id?: number
  ) {}
}
