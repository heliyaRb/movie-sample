export class MovieDetailModel {
  Title!: string;
  Year!: string;
  Rated!: string;
  Released!: string;
  Runtime!: string;
  Genre!: string;
  Director!: string;
  Writer!: string;
  Actors!: string;
  Country!: string;
  Plot!: string;
  Language!: string;
  Awards!: string;
  Poster!: string;
  Metascore!: string;
  imdbRating!: string;
  imdbVotes!: string;
  imdbID!: string;
  Type!: string;
  DVD!: string;
  BoxOffice!: string;
  Production!: string;
  Website!: string;
  Response!: string;
  Ratings!: [
    {
      Source: string;
      Value: string;
    }
  ];
}
