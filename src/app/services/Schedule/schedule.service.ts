import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../../models/Schedule/schedule';


@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private baseUrl = 'http://localhost:5148/api/Package';

  constructor(private http: HttpClient) {}

  // Get all schedules by packageID
  getSchedulesByPackageID(packageID: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/schedule/get/${packageID}`);
  }

  // Get schedule by scheduleID and packageID
  getScheduleById(packageID: number, scheduleID: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/schedule/get/${packageID}/${scheduleID}`
    );
  }

  // Add a new schedule
  addSchedule(schedule: Schedule, packageID: number): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/schedule/add/${packageID}`,
      schedule
    );
  }

  // Update an existing schedule
  updateSchedule(scheduleID: number, schedule: Schedule): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/schedule/edit/${scheduleID}`,
      schedule
    );
  }

  // Delete a schedule by ID
  deleteSchedule(scheduleID: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/schedule/delete/${scheduleID}`);
  }
}

