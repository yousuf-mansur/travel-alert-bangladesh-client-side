import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {
  PackageDetailsInsertModel,
  PackageDetailsUpdateModel,
  PackageResponse,
} from '../../models/Package/package-details.model';

@Injectable({
  providedIn: 'root',
})
export class PackageDetailsService {
  private baseUrl = 'http://localhost:5148/api/Package'; // Update if necessary

  constructor(private http: HttpClient) {}

  getPackageDetails(packageId: number): Observable<PackageResponse> {
    return this.http.get<PackageResponse>(
      `${this.baseUrl}/get-package-details/${packageId}`
    );
  }

  addPackageDetails(packageId: number, details: PackageDetailsInsertModel) {
    return this.http.post<any>(
      `${this.baseUrl}/add-package-details/${packageId}`,
      details
    );
  }

  updatePackageDetails(
    packageId: number,
    model: PackageDetailsUpdateModel
  ): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/update-package-details/${packageId}`,
      model
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Handle error logic here
    console.error('An error occurred:', error.message);
    return throwError('Something bad happened; please try again later.');
  }
}
