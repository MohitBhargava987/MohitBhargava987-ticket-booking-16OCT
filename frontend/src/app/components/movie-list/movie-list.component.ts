import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getMovies().subscribe({
      next: (res) => this.movies = res.movies,
      error: (err) => console.error(err)
    });
  }

  viewShows(movie: any) {
    this.router.navigate(['/shows', movie.id]);
  }
}
