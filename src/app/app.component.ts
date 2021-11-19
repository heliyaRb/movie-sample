import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieModel } from './core/models/movie.model';
import { MovieDetailService } from './core/services/movie-detail.service';
import { MovieService } from './core/services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'movie-list';
  imdbId!: string;

  constructor() {}

  ngOnInit() {}

  onCardClick(imdbId: string) {
    this.imdbId = imdbId;
  }
}
