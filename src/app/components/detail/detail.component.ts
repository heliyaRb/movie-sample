import { Component, OnInit } from '@angular/core';
import {
  faCalendar,
  faClock,
  faGlobe,
  faLanguage,
  faMoneyBill,
  faStar,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

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
  constructor() {}

  ngOnInit(): void {}
}
