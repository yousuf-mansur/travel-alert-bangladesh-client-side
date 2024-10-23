import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../../models/Country/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'http://localhost:5148/api/Country'; // Base API URL

  constructor(private http: HttpClient) {}

  // GET all countries
  getCountries(): Observable<Country[]> {
    const url = `${this.apiUrl}/get`; // Updated URL for getting all countries
    return this.http.get<Country[]>(url);
  }

  // GET country by ID
  getCountryById(id: number): Observable<Country> {
    const url = `${this.apiUrl}/get/${id}`; // Updated URL for getting a country by ID
    return this.http.get<Country>(url);
  }

  // POST: add a new country
  addCountry(country: Country): Observable<Country> {
    const url = `${this.apiUrl}/add`; // Updated URL for adding a country
    return this.http.post<Country>(url, country);
  }

  // PUT: update an existing country
  updateCountry(id: number, country: Country): Observable<void> {
    const url = `${this.apiUrl}/edit/${id}`; // Updated URL for editing a country by ID
    return this.http.put<void>(url, country);
  }

  // DELETE a country by ID
  deleteCountry(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`; // Updated URL for deleting a country by ID
    return this.http.delete<void>(url);
  }
}
