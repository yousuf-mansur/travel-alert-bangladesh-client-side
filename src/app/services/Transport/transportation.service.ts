import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transportation } from '../../models/Transport/transportation';

@Injectable({
  providedIn: 'root',
})
export class TransportationService {
  private baseUrl = 'http://localhost:5148/api/Transportation'; // Adjust base URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getTransportations(): Observable<Transportation[]> {
    return this.http.get<Transportation[]>(this.baseUrl, this.httpOptions);
  }

  getTransportationById(id: number): Observable<Transportation> {
    return this.http.get<Transportation>(
      `${this.baseUrl}/${id}`,
      this.httpOptions
    );
  }

  createTransportation(transport: Transportation): Observable<Transportation> {
    return this.http.post<Transportation>(
      this.baseUrl,
      transport,
      this.httpOptions
    );
  }

  updateTransportation(
    id: number,
    transport: Transportation
  ): Observable<Transportation> {
    return this.http.put<Transportation>(
      `${this.baseUrl}/${id}`,
      transport,
      this.httpOptions
    );
  }

  deleteTransportation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, this.httpOptions);
  }
}
