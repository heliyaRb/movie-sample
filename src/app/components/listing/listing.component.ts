import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { MovieModel } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements AfterViewInit {
  searchIcon = faSearch;
  dataList: MovieModel[] = [];
  moviesListener$: Subscription | undefined;
  selectedItemId!: string;

  @Input('defaultSelectedIndex') defaultSelectedIndex: number | undefined;
  @Output('cardClick') cardClick = new EventEmitter<string>();

  constructor(private movieService: MovieService) {}

  ngAfterViewInit(): void {
    this.moviesListener$ = this.movieService
      .searchMovie('green')
      .subscribe((result) => {
        this.dataList = result;

        if (this.defaultSelectedIndex != undefined) {
          this.onCardClicked(result[this.defaultSelectedIndex].imdbID);
        }
      });
  }

  onCardClicked(imdbId: string) {
    this.selectedItemId = imdbId;
    this.cardClick.emit(imdbId);
  }

  onDestroy() {
    this.moviesListener$?.unsubscribe();
  }
}
