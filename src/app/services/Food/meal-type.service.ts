import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { MealType } from '../../models/Food/meal-type';

@Injectable({
  providedIn: 'root',
})
export class MealTypeService {
  private apiUrl = 'http://localhost:5148/api/MealTypes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Get all meal types
  getMealTypes(): Observable<MealType[]> {
    return this.http.get<MealType[]>(this.apiUrl);
  }

  // Get meal type by ID
  getMealTypeById(id: number): Observable<MealType> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<MealType>(url);
  }

  // Add a new meal type
  addMealType(mealType: MealType): Observable<MealType> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<MealType>(url, mealType, this.httpOptions);
  }

  // Update an existing meal type
  updateMealType(id: number, mealType: MealType): Observable<any> {
    const url = `${this.apiUrl}/edit/${id}`;
    return this.http.put(url, mealType, this.httpOptions);
  }

  // Delete a meal type
  deleteMealType(id: number): Observable<MealType> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<MealType>(url, this.httpOptions);
  }
}

