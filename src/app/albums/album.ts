export class album{
    public constructor(
      public name: string,
      public cover:string,
      public releaseDAte:Date,
      public description:string,
      public genre:string,
      public recordLabel:string,
      public id?:number){

    }
}
