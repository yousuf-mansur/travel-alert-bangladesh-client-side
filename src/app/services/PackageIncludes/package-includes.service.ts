import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Packageincludes } from '../../models/PackageIncludes/packageincludes';

@Injectable({
  providedIn: 'root',
})
export class PackageIncludesService {
  private baseUrl = 'http://localhost:5148/api/Package';

  constructor(private http: HttpClient) {}

  // Create new package includes
  createPackageIncludes(
    packageIncludes: Packageincludes
  ): Observable<Packageincludes> {
    return this.http.post<Packageincludes>(
      `${this.baseUrl}/packageincludes/add`,
      packageIncludes
    );
  }

  // Fetch package includes by ID
  getPackageIncludesById(packageId: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/packageincludes/get/${packageId}`
    );
  }

  // Update package includes by ID
  updatePackageIncludes(
    packageId: number,
    packageIncludes: Packageincludes
  ): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/packageincludes/update/${packageId}`,
      packageIncludes
    );
  }
}
