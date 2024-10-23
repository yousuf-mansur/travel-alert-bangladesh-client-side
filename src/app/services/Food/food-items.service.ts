import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { FoodItemInputModel } from '../../models/Food/FoodItemInputModel ';
import { FoodItem } from '../../models/Food/FoodItem';
import { FoodItemOutputModel } from '../../models/Food/FoodItemOutputModel ';


@Injectable({
  providedIn: 'root',
})
export class FoodItemsService {
  private apiUrl = 'http://localhost:5148/api/FoodItems';
  foodItemsService: any;
  foodItem!: FoodItem;

  constructor(private http: HttpClient) {}

  // Get all food items
  getAllFoodItems(): Observable<FoodItemOutputModel[]> {
    return this.http
      .get<{ success: boolean; data: FoodItemOutputModel[] }>(this.apiUrl)
      .pipe(
        map((response) => {
          if (response.success) {
            return response.data;
          } else {
            return [];
          }
        })
      );
  }

  // Delete a food item by ID
  deleteFoodItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Create a new food item
  createFoodItem(model: FoodItemInputModel): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${this.apiUrl}/add`, model, { headers });
  }

  // Get a food item by ID
  getFoodItem(id: number): Observable<FoodItem> {
    return this.http.get<FoodItem>(`${this.apiUrl}/${id}`);
  }

  // Update a food item by ID
  updateFoodItem(id: number, foodItem: FoodItemInputModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/edit/${id}`, foodItem);
  }
}