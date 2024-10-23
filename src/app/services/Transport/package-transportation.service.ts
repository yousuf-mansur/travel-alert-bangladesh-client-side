import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackageTransportation } from '../../models/Transport/package-transportation';

@Injectable({
  providedIn: 'root',
})
export class PackageTransportationService {
  private baseUrl = 'http://localhost:5148/api/Package'; // Adjust base URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getPackageTransportations(): Observable<PackageTransportation[]> {
    return this.http.get<PackageTransportation[]>(
      this.baseUrl,
      this.httpOptions
    );
  }

  getPackageTransportationById(id: number): Observable<PackageTransportation> {
    return this.http.get<PackageTransportation>(
      `${this.baseUrl}/transport/get/${id}`,
      this.httpOptions
    );
  }

  createPackageTransportation(
    id: number,
    pkgTrans: PackageTransportation
  ): Observable<PackageTransportation> {
    return this.http.post<PackageTransportation>(
      `${this.baseUrl}/transport/add/${id}`,
      pkgTrans,
      this.httpOptions
    );
  }

  updatePackageTransportation(
    id: number,
    pkgTrans: PackageTransportation
  ): Observable<PackageTransportation> {
    return this.http.put<PackageTransportation>(
      `${this.baseUrl}/${id}`,
      pkgTrans,
      this.httpOptions
    );
  }

  deletePackageTransportation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, this.httpOptions);
  }
}
