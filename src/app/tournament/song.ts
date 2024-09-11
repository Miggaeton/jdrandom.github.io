
export class Song {
    constructor(
      public title: string,
      public artist: string,
      public mode: number,
      public difficulty: number,
      public effort: number,
      public alternate: boolean
    ) {}
  }