import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransportProvider } from '../../models/Transport/transport-provider';
import { ApiResponse } from '../../models/Transport/transport-provider-output-model';
import { TransportProviderInputModel } from '../../models/Transport/transport-provider-input-model';

@Injectable({
  providedIn: 'root',
})
export class TransportProviderService {
  private apiUrl = 'http://localhost:5148/api/TransportProvider'; // Update with your API URL

  constructor(private http: HttpClient) {}

  // Get all transport providers
  getAllProviders(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/get`);
  }

  // Get a transport provider by ID
  getProviderById(id: any): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/get/${id}`);
  }

  // Add a new transport provider
  addProvider(provider: TransportProviderInputModel): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/add`, provider, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  updateProvider(
    id: number,
    provider: TransportProviderInputModel
  ): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/edit/${id}`, provider, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  // Delete a transport provider
  deleteProvider(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/delete/${id}`);
  }
}
