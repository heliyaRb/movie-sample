import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  faCalendar,
  faClock,
  faGlobe,
  faLanguage,
  faMoneyBill,
  faStar,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { MovieDetailModel } from 'src/app/core/models/movie-detail.model';
import { MovieDetailService } from 'src/app/core/services/movie-detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnChanges {
  starIcon = faStar;
  calendarIcon = faCalendar;
  clockIcon = faClock;
  languageIcon = faLanguage;
  countryIcon = faGlobe;
  awardIcon = faTrophy;
  moneyIcon = faMoneyBill;
  movieData!: MovieDetailModel;
  movieDetailListener$: Subscription | undefined;

  @Input('imdbId') imdbId!: string;

  constructor(private movieDetailService: MovieDetailService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.movieDetailListener$ = this.movieDetailService
      .getMovieDetail(this.imdbId ? this.imdbId : 'tt6966692 ')
      .subscribe((result) => {
        this.movieData = result;
      });
  }

  ngOnInit(): void {}

  onDestroy() {
    this.movieDetailListener$?.unsubscribe();
  }
}
