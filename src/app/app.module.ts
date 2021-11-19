import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailComponent } from './components/detail/detail.component';
import { ListingComponent } from './components/listing/listing.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInteceptor } from './core/auth/auth-interceptor';

@NgModule({
  declarations: [AppComponent, DetailComponent, ListingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInteceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
