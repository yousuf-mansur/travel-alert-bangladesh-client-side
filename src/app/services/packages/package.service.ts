import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PackageInsertModel } from '../../models/Package/package.model';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  private apiUrl = `${environment.apiUrl}/api/Package`; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  createPackage(
    model: PackageInsertModel,
    customUrl?: string
  ): Observable<any> {
    let url = `${this.apiUrl}/add/package`;
    if (customUrl) {
      url += `?customUrl=${customUrl}`;
    }
    return this.http.post(url, model);
  }

  getAllPackages(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/all/packages`);
  }

  getPackageById(packageId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/package/${packageId}`);
  }
}
