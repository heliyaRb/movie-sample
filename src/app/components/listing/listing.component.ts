import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MovieModel } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  searchIcon = faSearch;
  dataList: MovieModel[] = [];

  @Input('listData') listData: MovieModel[] = [];
  @Output('cardClick') cardClick = new EventEmitter<string>();

  constructor() {}

  ngOnChanges() {
    this.dataList = this.listData;
  }

  onCardCliced(id: string) {
    this.cardClick.emit(id);
  }
}
