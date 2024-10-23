import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seats } from '../../models/Transport/seats';

@Injectable({
  providedIn: 'root',
})
export class SeatsService {
  private baseUrl = 'http://localhost:5148/api/Seats'; // Adjust base URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getSeats(): Observable<Seats[]> {
    return this.http.get<Seats[]>(this.baseUrl, this.httpOptions);
  }

  getSeatsById(id: number): Observable<Seats> {
    return this.http.get<Seats>(`${this.baseUrl}/${id}`, this.httpOptions);
  }

  createSeats(seat: Seats): Observable<Seats> {
    return this.http.post<Seats>(this.baseUrl, seat, this.httpOptions);
  }

  updateSeats(id: number, seat: Seats): Observable<Seats> {
    return this.http.put<Seats>(
      `${this.baseUrl}/${id}`,
      seat,
      this.httpOptions
    );
  }

  deleteSeats(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, this.httpOptions);
  }
}
