import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieModel } from './core/models/movie.model';
import { MovieService } from './core/services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'movie-list';
  _movieList: MovieModel[] = [];
  moviesListener$: Subscription | undefined;

  get movieList() {
    return this._movieList;
  }

  constructor(private movieService: MovieService) {
    this.initialList();
  }

  ngOnInit() {}

  initialList() {
    this.moviesListener$ = this.movieService
      .searchMovie('green')
      .subscribe((result) => {
        this._movieList = result;
      });
  }

  ngOnDestroy() {
    this.moviesListener$?.unsubscribe();
  }

  onCardClick(id: string) {
    console.log(id);
  }
}
