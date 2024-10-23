// package.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackageInsertModel } from '../../models/Package/package-insert-model';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  private apiUrl = 'http://localhost:5148/api/Package'; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}

  createPackage(packageData: PackageInsertModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/add`, packageData, { headers });
  }
}
