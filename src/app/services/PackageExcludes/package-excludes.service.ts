import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Packageexcludes } from '../../models/PackageExcludes/packageexcludes';

@Injectable({
  providedIn: 'root',
})
export class PackageExcludesService {
  private apiUrl = 'http://localhost:5148/api/Package';

  constructor(private http: HttpClient) {}

  // Create new package excludes
  createPackageExcludes(
    packageExcludes: Packageexcludes
  ): Observable<Packageexcludes> {
    return this.http.post<Packageexcludes>(
      `${this.apiUrl}/packageexcludes/add`,
      packageExcludes
    );
  }

  // Fetch package excludes by ID
  getPackageExcludesById(packageId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/packageexcludes/get/${packageId}`
    );
  }

  // Update package excludes by ID
  updatePackageExcludes(
    packageId: number,
    packageExcludes: Packageexcludes
  ): Observable<Packageexcludes> {
    return this.http.put<Packageexcludes>(
      `${this.apiUrl}/packageexcludes/update/${packageId}`,
      packageExcludes
    );
  }
}
