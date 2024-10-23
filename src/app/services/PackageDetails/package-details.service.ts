import { Packagedetails } from './../../models/PackageDetails/packagedetails';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Packagedetailsinsertmodel } from '../../models/PackageDetails/packagedetailsinsertmodel';

@Injectable({
  providedIn: 'root',
})
export class PackageDetailsService {
  private baseUrl = 'http://localhost:5148/api/Package';

  constructor(private http: HttpClient) {}

  // getAllPackageDetails(): Observable<Packagedetails[]> {
  //   console.log('Fetching all package details');
  //   return this.http
  //     .get<any>(`${this.baseUrl}/packagedetails/get/packageId`)
  //     .pipe(
  //       map((response) => {
  //         console.log('Raw API response:', response);
  //         return response.data;
  //       }),
  //       catchError(this.handleError)
  //     );
  // }

  // Fetch all accommodations
  getPackageDetails(): Observable<Packagedetails[]> {
    return this.http.get<Packagedetails[]>(`${this.baseUrl}`);
  }

  getPackageDetailsByPackageID(
    packageId: number
  ): Observable<Packagedetails[]> {
    console.log(`Fetching package details for packageId: ${packageId}`);
    return this.http
      .get<any>(`${this.baseUrl}/packagedetails/get/${packageId}`)
      .pipe(
        map((response) => {
          console.log('Raw API response:', response);
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  // Add a package accommodation
  addPackageDetails(
    packageDetailsInsertModel: Packagedetailsinsertmodel
  ): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/packagedetails/add`,
      packageDetailsInsertModel
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }

  updatePackageDetails(
    packageDetailsID: number,
    packageDetails: Packagedetails
  ): Observable<void> {
    return this.http.put<void>(
      `${this.baseUrl}/packagedetails/update/${packageDetailsID}`,
      packageDetails
    );
  }
}
