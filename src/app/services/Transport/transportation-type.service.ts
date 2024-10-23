import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TransportationTypeOutputModel } from '../../models/Transport/transportation-type-output-model';
import { TransportationTypeInsertModel } from '../../models/Transport/transportation-type-insert-model';




@Injectable({
  providedIn: 'root',
})
export class TransportationTypeService {
  private apiUrl = 'http://localhost:5148/api/TransportationType'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Get all transportation types
  getAllTypes(): Observable<{
    success: boolean;
    data: TransportationTypeOutputModel[];
  }> {
    return this.http.get<{
      success: boolean;
      data: TransportationTypeOutputModel[];
    }>(`${this.apiUrl}/get`);
  }

  // Get transportation type by ID
  getTypeById(
    id: number
  ): Observable<{ success: boolean; data: TransportationTypeOutputModel }> {
    return this.http.get<{
      success: boolean;
      data: TransportationTypeOutputModel;
    }>(`${this.apiUrl}/get/${id}`);
  }

  // Add a new transportation type
  addType(
    model: TransportationTypeInsertModel,
    customUrl?: string
  ): Observable<{
    success: boolean;
    message: string;
    typeId: number;
    url: string;
  }> {
    return this.http.post<{
      success: boolean;
      message: string;
      typeId: number;
      url: string;
    }>(`${this.apiUrl}/add`, model, {
      params: customUrl ? { customUrl } : {},
    });
  }

  // Update an existing transportation type
  updateType(
    id: number,
    transportationType: TransportationTypeOutputModel
  ): Observable<any> {
    return this.http.put<{ success: boolean; message: string }>(
      `${this.apiUrl}/update/${id}`,
      transportationType
    );
  }

  // Delete a transportation type
  deleteType(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(
      `${this.apiUrl}/delete/${id}`
    );
  }
}