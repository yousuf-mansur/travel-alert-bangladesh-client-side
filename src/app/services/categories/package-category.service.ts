import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackageCategoryDTO } from '../../models/categories/create-category';
import {
  PackageCategoryListDTO,
  PackageCategoryResponse,
} from '../../models/categories/package-category';

@Injectable({
  providedIn: 'root',
})
export class PackageCategoryService {
  private apiUrl = 'http://localhost:5148/api/PackageCategory';

  constructor(private http: HttpClient) {}

  createCategory(category: PackageCategoryListDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/add/category`, category);
  }

  getAllCategories(): Observable<PackageCategoryResponse> {
    // Return the correct response type
    return this.http.get<PackageCategoryResponse>(
      `${this.apiUrl}/get/all/categories`
    );
  }

  // Service method to get a category by ID
  getCategoryById(categoryId: number): Observable<{
    success: boolean;
    message: string;
    category: PackageCategoryDTO;
  }> {
    return this.http.get<{
      success: boolean;
      message: string;
      category: PackageCategoryDTO;
    }>(`${this.apiUrl}/get/category/${categoryId}`);
  }

  // Service method to update a category
  updateCategory(
    categoryId: number,
    category: PackageCategoryDTO
  ): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/update/category/${categoryId}`,
      category
    );
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/category/${categoryId}`);
  }
}
