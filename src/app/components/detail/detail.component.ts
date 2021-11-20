import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
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
export class DetailComponent implements OnInit {
  starIcon = faStar;
  calendarIcon = faCalendar;
  clockIcon = faClock;
  languageIcon = faLanguage;
  countryIcon = faGlobe;
  awardIcon = faTrophy;
  moneyIcon = faMoneyBill;
  movieData!: MovieDetailModel;
  movieDetailListener$: Subscription | undefined;
  _imdbId!: string;

  get imdbId() {
    return this._imdbId;
  }
  @Input() set imdbId(value: string) {
    this._imdbId = value;
    if (value != undefined) {
      this.movieDetailListener$ = this.movieDetailService
        .getMovieDetail(this.imdbId)
        .subscribe((result) => {
          this.movieData = result;
        });
    }
  }

  constructor(
    private movieDetailService: MovieDetailService,
    private router: Router
  ) {
    console.log(this.router?.getCurrentNavigation()?.extras?.state?.imdbId);
  }

  ngOnInit(): void {}

  onDestroy() {
    this.movieDetailListener$?.unsubscribe();
  }
}
