import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { MovieModel } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  searchIcon = faSearch;
  dataList: MovieModel[] = [];
  moviesListener$: Subscription | undefined;
  selectedItemId!: number;

  @Output('cardClick') cardClick = new EventEmitter<string>();

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.moviesListener$ = this.movieService
      .searchMovie('green')
      .subscribe((result) => {
        this.dataList = result;
      });
  }

  onCardCliced(data: any) {
    this.selectedItemId = data.id;
    this.cardClick.emit(data.imdbId);
  }

  onDestroy() {
    this.moviesListener$?.unsubscribe();
  }
}
