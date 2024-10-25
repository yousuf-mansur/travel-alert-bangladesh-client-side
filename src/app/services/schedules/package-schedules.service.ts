import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PackageSchedulesService {
  private apiUrl = `${environment.apiUrl}/api/Package`;

  constructor(private http: HttpClient) {}

  // Method to fetch schedules by packageId
  getSchedulesByPackageId(packageId: number): Observable<any> {
    const url = `${this.apiUrl}/get-schedules/${packageId}`;
    return this.http.get<any>(url); // Return an observable of any type (adjust response type based on API response)
  }
  deleteSchedule(scheduleID: number): Observable<any> {
    const url = `${this.apiUrl}/delete-schedule/${scheduleID}`; // Update with correct API endpoint
    return this.http.delete<any>(url); // HTTP DELETE request
  }
}
