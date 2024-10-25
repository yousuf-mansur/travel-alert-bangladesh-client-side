import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PackageSubCategory,
  PackageSubCategoryInsertModel,
} from '../../models/categories/package-sub-category';
interface ApiResponse<T> {
  $values: T[];
}

@Injectable({
  providedIn: 'root',
})
export class PackageSubCategoryService {
  // Update with your API URL
  private apiUrl = 'http://localhost:5148/api/PackageSubCategory';

  constructor(private http: HttpClient) {}

  createSubCategory(
    subCategory: PackageSubCategoryInsertModel
  ): Observable<PackageSubCategory> {
    return this.http.post<PackageSubCategory>(
      `${this.apiUrl}/add-subcategory`,
      subCategory
    );
  }

  getAllSubCategories(): Observable<ApiResponse<PackageSubCategory>> {
    return this.http.get<ApiResponse<PackageSubCategory>>(
      `${this.apiUrl}/get-all-subcategories`
    );
  }

  getSubCategoryById(id: number): Observable<PackageSubCategory> {
    return this.http.get<PackageSubCategory>(
      `${this.apiUrl}/get-subcategory/${id}`
    );
  }

  updateSubCategory(
    id: number,
    subCategory: PackageSubCategory
  ): Observable<PackageSubCategory> {
    return this.http.put<PackageSubCategory>(
      `${this.apiUrl}/update-subcategory/${id}`,
      subCategory
    );
  }

  deleteSubCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-subcategory/${id}`);
  }

  getSubCategoriesByCategoryID(categoryId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/get-subcategories-by-category/${categoryId}`
    );
  }
}
