import { Injectable } from '@angular/core';

import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Accommodation } from '../../models/package-accomodation/package-accomodation';

@Injectable({
  providedIn: 'root',
})
export class PackageAccommodationService {
  private baseUrl = 'http://localhost:5148/api/Package';

  constructor(private http: HttpClient) {}

  // Add a package accommodation
  addAccommodation(accommodation: Accommodation): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/accommodations/add`,
      accommodation
    );
  }

  // Fetch all accommodations
  getAccommodations(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(`${this.baseUrl}`);
  }

  getPackageAccommodations(packageId: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/accommodations/get/${packageId}`
    );
  }
}
