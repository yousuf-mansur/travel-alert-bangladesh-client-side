import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PackageGalleryResponse } from '../../models/Package/package-gallery-response';

@Injectable({
  providedIn: 'root',
})
export class PackageGalleriesService {
  private apiUrl = `${environment.apiUrl}/api/Package`;

  constructor(private http: HttpClient) {}

  getGalleriesByPackageId(
    packageId: number
  ): Observable<PackageGalleryResponse> {
    return this.http.get<PackageGalleryResponse>(
      `${this.apiUrl}/get/package/gallery/${packageId}`
    );
  }

  // Add saveGallery method
  saveGallery(galleryData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/add/package/gallery`, galleryData);
  }
}
