import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransportationCategoryInputModel } from '../../models/Transport/transportation-category-input-model';



@Injectable({
  providedIn: 'root',
})
export class TransportationCategoryService {
  private apiUrl = 'http://localhost:5148/api/TransportationCatagory';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get`);
  }

  getCategoryById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/get/${id}`);
  }

  addCategory(category: TransportationCategoryInputModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, category);
  }

  updateCategory(
    id: number,
    category: TransportationCategoryInputModel
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
