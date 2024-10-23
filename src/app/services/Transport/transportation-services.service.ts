import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TransportationOutputModel } from '../../models/Transport/transportation-output-model';
import { TransportationInputModel } from '../../models/Transport/transportation-input-model';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransportationService {
  getCategories() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:5148/api/Transportation';

  constructor(private http: HttpClient) {}

  getAllTransportations(): Observable<TransportationOutputModel[]> {
    return this.http
      .get<ApiResponse<TransportationOutputModel[]>>(`${this.apiUrl}/getAll`)
      .pipe(
        map((response) => {
          if (response.success && response.data) {
            return response.data;
          }
          throw new Error('Failed to fetch transportations');
        }),
        catchError(this.handleError)
      );
  }

  createTransport(
    transport: TransportationInputModel
  ): Observable<TransportationInputModel> {
    return this.http.post<TransportationInputModel>(
      `${this.apiUrl}/add`,
      transport,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  // updateTransportation(id: number, transport: TransportInputModel): Observable<void> {
  //   return this.http
  //     .put<ApiResponse<void>>(`${this.apiUrl}/update-transport/${id}`, transport)
  //     .pipe(
  //       map(response => {
  //         if (!response.success) {
  //           throw new Error('Failed to update transportation');
  //         }
  //       }),
  //       catchError(this.handleError)
  //     );
  // }
  updateTransportation(
    id: number,
    model: TransportationInputModel
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, model);
  }

  // Delete transportation by ID
  deleteTransportation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  getTransportationById(id: number): Observable<TransportationOutputModel> {
    return this.http
      .get<ApiResponse<TransportationOutputModel>>(`${this.apiUrl}/getid/${id}`)
      .pipe(
        map((response) => {
          if (response.success && response.data) {
            return response.data;
          }
          throw new Error('Failed to fetch transportation');
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred.';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: Code ${error.status}, Message: ${
        error.error?.message || error.message
      }`;
    }

    console.error(`Error Code: ${error.status}, Message: ${errorMessage}`);
    return throwError(() => new Error(errorMessage));
  }
}
