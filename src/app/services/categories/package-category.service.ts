import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackageCategoryDTO } from '../../models/categories/create-category';
import { PackageCategoryListDTO } from '../../models/categories/package-category';

@Injectable({
  providedIn: 'root',
})
export class PackageCategoryService {
  private apiUrl = 'http://localhost:5148/api/PackageCategory'; // Ensure this URL is correct

  constructor(private http: HttpClient) {}

  createCategory(category: PackageCategoryDTO): Observable<any> {
    return this.http.post(this.apiUrl, category);
  }

  getAllCategories(): Observable<PackageCategoryListDTO[]> {
    return this.http.get<PackageCategoryListDTO[]>(this.apiUrl);
  }

  getCategoryById(id: number): Observable<PackageCategoryDTO> {
    return this.http.get<PackageCategoryDTO>(`${this.apiUrl}/${id}`);
  }

  updateCategory(id: number, category: PackageCategoryDTO): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
