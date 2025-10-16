import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { SeatListComponent } from './components/seat-list/seat-list.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'shows/:id', component: ShowListComponent },
  { path: 'seats/:id', component: SeatListComponent },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
