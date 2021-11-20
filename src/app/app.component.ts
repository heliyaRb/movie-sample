import { Component, OnInit } from '@angular/core';
import { DetailComponent } from './components/detail/detail.component';

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

  onOutletLoaded(component: DetailComponent) {
    if (component instanceof DetailComponent) component.imdbId = this.imdbId;
    console.log(this.imdbId);
  }
}
