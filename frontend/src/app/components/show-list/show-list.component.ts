import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  shows: any[] = [];
  movieId: number = 0;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getShows(this.movieId).subscribe({
      next: (res) => this.shows = res.shows,
      error: (err) => console.error(err)
    });
  }

  viewSeats(show: any) {
    this.router.navigate(['/seats', show.id]);
  }
}
