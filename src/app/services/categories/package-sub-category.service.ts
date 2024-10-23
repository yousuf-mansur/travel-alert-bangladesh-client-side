import { PackageSubCategoryListDTO } from './../../models/categories/package-ubCategory-list-dto';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PackageSubCategoryService {
  private apiUrl = 'http://localhost:5148/api/PackageSubCategory';

  constructor(private http: HttpClient) {}

  // Method to add a subcategory
  addSubCategory(subCategory: any): Observable<any> {
    return this.http.post(this.apiUrl, subCategory);
  }

  // Method to get all subcategories
  getSubCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSubCategoryById(id: number): Observable<PackageSubCategoryListDTO> {
    return this.http.get<PackageSubCategoryListDTO>(`${this.apiUrl}/${id}`);
  }

  updateSubCategory(
    subCategory: PackageSubCategoryListDTO
  ): Observable<PackageSubCategoryListDTO> {
    return this.http.put<PackageSubCategoryListDTO>(
      `${this.apiUrl}/${subCategory.packageSubCategoryID}`,
      subCategory
    );
  }

  deleteSubCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
