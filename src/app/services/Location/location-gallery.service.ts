import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationGalleryResponse } from '../../models/Location model/LocationGalleryResponse ';
import { LocationGallery } from '../../models/Location model/LocationGallery';
import { LocationGalleryInsertModel } from '../../models/Location model/LocationGalleryInsertModel';

@Injectable({
  providedIn: 'root',
})
export class LocationGalleryService {
  private apiUrl = 'http://localhost:5148/api/LocationGallery'; // Base API URL

  // http://localhost:5141/api/LocationGallery/locationGallery/1

  constructor(private http: HttpClient) {}

  // Get galleries by location ID
  getGalleriesByLocationId(
    locationId: number
  ): Observable<LocationGalleryResponse> {
    return this.http.get<LocationGalleryResponse>(
      `${this.apiUrl}/locationGallery/${locationId}`
    );
  }

  // Add new gallery
  addGallery(model: LocationGalleryInsertModel): Observable<LocationGallery> {
    const formData = new FormData();
    formData.append('isPrimary', model.isPrimary.toString());
    formData.append('imageCaption', model.imageCaption);
    formData.append('locationID', model.locationID.toString());
    if (model.imageFile) {
      formData.append('imageFile', model.imageFile, model.imageFile.name);
    }

    return this.http.post<LocationGallery>(`${this.apiUrl}/add`, formData); // Updated URL
  }

  // Update gallery
  updateGallery(
    id: number,
    model: LocationGalleryInsertModel
  ): Observable<LocationGallery> {
    const formData = new FormData();
    formData.append('isPrimary', model.isPrimary.toString());
    formData.append('imageCaption', model.imageCaption);
    formData.append('locationID', model.locationID.toString());
    if (model.imageFile) {
      formData.append('imageFile', model.imageFile, model.imageFile.name);
    }

    return this.http.put<LocationGallery>(
      `${this.apiUrl}/edit/${id}`,
      formData
    ); // Updated URL
  }

  // Delete gallery
  deleteGallery(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`); // Updated URL
  }

  // Get all locations
  getLocations(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
