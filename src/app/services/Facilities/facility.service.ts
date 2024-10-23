import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facility } from '../../models/Facilities/Facility';

@Injectable({
  providedIn: 'root',
})
export class FacilityService {
  private apiUrl = 'http://localhost:5148/api/Facilities'; // Base API URL

  constructor(private http: HttpClient) {}

  // GET: Retrieve all facilities
  getFacilities(): Observable<Facility[]> {
    const url = `${this.apiUrl}/get`; // Updated URL for getting all facilities
    return this.http.get<Facility[]>(url);
  }

  // GET: Retrieve a specific facility by ID
  getFacility(id: number): Observable<Facility> {
    const url = `${this.apiUrl}/get/${id}`; // Updated URL for getting a facility by ID
    return this.http.get<Facility>(url);
  }

  // POST: Add a new facility
  createFacility(facility: Facility): Observable<Facility> {
    const url = `${this.apiUrl}/add`; // Updated URL for adding a new facility
    return this.http.post<Facility>(url, facility);
  }

  // PUT: Update an existing facility by ID
  updateFacility(id: number, facility: Facility): Observable<void> {
    const url = `${this.apiUrl}/edit/${id}`; // Updated URL for editing a facility by ID
    return this.http.put<void>(url, facility);
  }

  // DELETE: Remove a facility by ID
  deleteFacility(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`; // Updated URL for deleting a facility by ID
    return this.http.delete<void>(url);
  }
}
