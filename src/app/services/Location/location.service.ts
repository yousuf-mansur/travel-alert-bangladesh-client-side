import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationInsertModel } from '../../models/Location model/location-insert-model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl = 'http://localhost:5148/api/Location'; // Base API URL

  constructor(private http: HttpClient) {}

  addLocation(location: LocationInsertModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, location);
  }

  updateLocation(id: number, location: LocationInsertModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/edit/${id}`, location);
  }

  deleteLocation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  getLocations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getLocationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
