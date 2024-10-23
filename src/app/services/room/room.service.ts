import { Room } from './../../models/room/room';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor() {}

  baseUrl: string = 'http://localhost:5148/api/Rooms';
  http = inject(HttpClient);

  // Get all rooms
  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl);
  }

  // Get room by ID
  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.baseUrl}/${id}`);
  }


  addRoom(room: Room): Observable<Room> {
  return this.http
    .post<Room>(`${this.baseUrl}/add/room`, room) // Corrected line
    .pipe(catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    // Handle 404 error, which corresponds to invalid foreign keys
    if (error.status === 404) {
      errorMessage =
        'Please provide a valid foreign key for Hotel, Room Type, or Room Sub-Type.';
    }

    return throwError(() => new Error(errorMessage));
  }

  // Update room
  updateRoom(id: number, room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.baseUrl}/update/room/${id}`, room);
  }


 deleteRoom(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/Rooms/${id}`);
}
}
