import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  searchMovie(query: string): Observable<MovieModel[]> {
    const url = `http://www.omdbapi.com/?s=${query}&apikey=fc635fb1`;

    return this.http.get(url).pipe(
      map<any, MovieModel[]>((response: any) => {
        let arr: MovieModel[] = [];
        response.Search.forEach((element: any) => {
          let model = new MovieModel(
            element.Title,
            element.Year,
            element.imdbID,
            element.Type,
            element.Poster
          );
          arr.push(model);
        });

        return arr;
      })
    );
  }
}
