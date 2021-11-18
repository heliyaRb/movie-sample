export class MovieModel {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  posterUrl: string;

  constructor(
    title: string,
    year: string,
    imdbId: string,
    type: string,
    poster: string
  ) {
    this.title = title;
    this.year = year;
    this.imdbID = imdbId;
    this.type = type;
    this.posterUrl = poster;
  }
}
