import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:4040/api';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies/list`);
  }
  getShows(movieId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/shows/${movieId}`);
  }
  getSeats(showId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/seats/${showId}`);
  }
  bookSeat(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookings/create_booking`, data);
  }
}
