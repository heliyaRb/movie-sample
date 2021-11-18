import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailComponent } from './components/detail/detail.component';
import { ListingComponent } from './components/listing/listing.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DetailComponent, ListingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
