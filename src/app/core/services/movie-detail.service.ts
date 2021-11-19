import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDetailModel } from '../models/movie-detail.model';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailService {
  constructor(private http: HttpClient) {}

  getMovieDetail(id: string): Observable<MovieDetailModel> {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=fc635fb1`;

    return this.http.get(url).pipe(
      map<any, MovieDetailModel>((result: any) => {
        let obj = new MovieDetailModel();
        return Object.assign(obj, result);
      })
    );
  }
}
