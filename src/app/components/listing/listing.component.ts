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
  selectedItemId!: number;

  @Input('listData') listData: MovieModel[] = [];
  @Output('cardClick') cardClick = new EventEmitter<string>();

  constructor() {}

  ngOnChanges() {
    this.dataList = this.listData;
  }

  onCardCliced(id: string) {
    this.cardClick.emit(id);
  onCardCliced(data: any) {
    this.selectedItemId = data.id;
    this.cardClick.emit(data.imdbId);
  }
  }
}
