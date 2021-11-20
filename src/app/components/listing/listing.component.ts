import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subject, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';
import { MovieModel } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements AfterViewInit {
  private querySubject: Subject<string> = new Subject();
  private readonly moviesListener$: Subscription = new Subscription();

  searchIcon = faSearch;
  dataList: MovieModel[] = [];
  selectedItemId!: string;

  @Input('defaultSelectedIndex') defaultSelectedIndex: number | undefined;
  @Output('cardClick') cardClick = new EventEmitter<string>();

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.moviesListener$.add(
      this.querySubject
        .pipe(
          filter((item) => item.length > 2),
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((query) => {
            console.log(`search by ${query}`);
            return this.movieService.searchMovie(query);
          })
        )
        .subscribe((list) => {
          this.dataList = list;
          if (this.defaultSelectedIndex != undefined) {
            this.onCardClicked(this.dataList[this.defaultSelectedIndex].imdbID);
          }
        })
    );
  }

  ngAfterViewInit(): void {
    this.querySubject.next('green');
  }

  onCardClicked(imdbId: string) {
    this.selectedItemId = imdbId;
    this.cardClick.emit(imdbId);
    this.router.navigate([`detail/${imdbId}`], { state: { imdbId: imdbId } });
  }

  onSearchQueryChange(event: any) {
    let param = event.target.value;
    this.querySubject.next(param);
  }

  onDestroy() {
    this.moviesListener$.unsubscribe();
  }
}
