// tour-voucher.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TourVoucher } from '../../models/TourVoucher/tour-voucher';

@Injectable({
  providedIn: 'root',
})
export class TourVoucherService {
  private baseUrl = 'http://localhost:5148/api/Voucher';

  constructor(private http: HttpClient) {}

  // Get all tour vouchers
  getTourVouchers(): Observable<TourVoucher[]> {
    return this.http.get<TourVoucher[]>(`${this.baseUrl}/get`);
  }

  // Get tour voucher by ID
  getTourVoucherById(id: number): Observable<TourVoucher> {
    return this.http.get<TourVoucher>(`${this.baseUrl}/get/${id}`);
  }

  // Add new tour voucher
  addTourVoucher(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, formData);
  }

  // Update tour voucher
  updateTourVoucher(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.baseUrl}/edit/${id}`, formData);
  }

  // Delete tour voucher
  deleteTourVoucher(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
