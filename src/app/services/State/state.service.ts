import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../../models/State/state';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private apiUrl = 'http://localhost:5148/api/State'; // Base API URL

  constructor(private http: HttpClient) {}

  // GET: Retrieve all states
  getStates(): Observable<State[]> {
    const url = `${this.apiUrl}/get`; // Updated URL for getting all states
    return this.http.get<State[]>(url);
  }

  // GET: Retrieve a specific state by ID
  getState(id: number): Observable<State> {
    const url = `${this.apiUrl}/get/${id}`; // Updated URL for getting a state by ID
    return this.http.get<State>(url);
  }

  // POST: Add a new state
  createState(state: State): Observable<State> {
    const url = `${this.apiUrl}/add`; // Updated URL for adding a new state
    return this.http.post<State>(url, state);
  }

  // PUT: Update an existing state by ID
  updateState(id: number, state: State): Observable<void> {
    const url = `${this.apiUrl}/edit/${id}`; // Updated URL for editing a state by ID
    return this.http.put<void>(url, state);
  }

  // DELETE: Remove a state by ID
  deleteState(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`; // Updated URL for deleting a state by ID
    return this.http.delete<void>(url);
  }
}
