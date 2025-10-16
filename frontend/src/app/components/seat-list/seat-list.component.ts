import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.css']
})
export class SeatListComponent implements OnInit {
  seats: any[] = [];
  showId: number = 0;
  userName: string = 'Mohit';

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.showId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSeats();
  }

  loadSeats() {
    this.api.getSeats(this.showId).subscribe({
      next: (res) => this.seats = res.seats,
      error: (err) => console.error(err)
    });
  }

  book(seat: any) {
    if (seat.status === 'booked') {
      alert('Seat already booked');
      return;
    }
    const payload = { user_name: this.userName, show_id: this.showId, seat_id: seat.id };
    this.api.bookSeat(payload).subscribe({
      next: () => { alert('Booking successful!'); this.loadSeats(); },
      error: (err) => alert(err.error?.message || 'Booking failed')
    });
  }
}
