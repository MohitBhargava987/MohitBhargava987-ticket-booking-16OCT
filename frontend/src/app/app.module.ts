import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { SeatListComponent } from './components/seat-list/seat-list.component';

@NgModule({
  declarations: [AppComponent, MovieListComponent, ShowListComponent, SeatListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
