import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LocationGalleryService } from '../../../../../services/Location/location-gallery.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LocationService } from '../../../../../services/Location/location.service';
import { LocationGallery } from '../../../../../models/Location model/LocationGallery';

@Component({
  selector: 'app-location-gallerylist',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './location-gallerylist.component.html',
  styleUrls: ['./location-gallerylist.component.css'], // Corrected styleUrls typo
})
export class LocationGallerylistComponent implements OnInit {
  @Input() apiBaseUrl: string = 'http://localhost:5148'; // API base URL for images
  @Output() fileSelected = new EventEmitter<File>(); // Emit selected file for upload
  selectedFile!: File;

  locationGalleries: LocationGallery[] = [];
  locations: any[] = []; // Store locations for the dropdown
  selectedLocationId: number = 0; // Selected location ID
  imageUrl: string = ''; // Image URL

  constructor(
    private locationGalleryService: LocationGalleryService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.loadLocations();
    this.getLocationName;
    // Load locations when component initializes
  }

  // Generate full image URL
  getFullImageUrl(locationGalleryUrl: string): string {
    if (!locationGalleryUrl) return '';

    // Replace backslashes with forward slashes
    const normalizedUrl = locationGalleryUrl.replace(/\\/g, '/');

    // Check if the URL is already absolute
    if (normalizedUrl.startsWith('http')) {
      return normalizedUrl;
    }

    // Remove leading slash if present to avoid double slashes
    const cleanPath = normalizedUrl.startsWith('/')
      ? normalizedUrl.slice(1)
      : normalizedUrl;
    return `${this.apiBaseUrl}/${cleanPath}`;
  }

  // Handle file selection for uploading voucher file
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.fileSelected.emit(this.selectedFile);
    }
  }

  // Fetch galleries based on the selected location ID
  getGalleriesByLocationId(): void {
    if (this.selectedLocationId > 0) {
      this.locationGalleryService
        .getGalleriesByLocationId(this.selectedLocationId)
        .subscribe((response) => {
          console.log('API Response:', response);

          if (response && Array.isArray(response)) {
            this.locationGalleries = response;

            if (
              this.locationGalleries.length > 0 &&
              this.locationGalleries[0].imageUrl
            ) {
              const imageFileName = this.locationGalleries[0].imageUrl;
              console.log('Image URL:', this.getFullImageUrl(imageFileName));
              this.imageUrl = this.getFullImageUrl(imageFileName);
            } else {
              console.log('No imageUrl found in the response.');
              this.imageUrl = '';
            }
          } else {
            console.log('No galleries found for this location.');
            this.locationGalleries = [];
          }
        });
    } else {
      console.error('Invalid Location ID');
    }
  }

  // Delete a gallery and reload the list
  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this gallery?')) {
      this.locationGalleryService.deleteGallery(id).subscribe(() => {
        console.log('Gallery deleted successfully');
        this.getGalleriesByLocationId(); // Refresh the gallery list
      });
    }
  }

  // Load all locations from the service
  loadLocations(): void {
    this.locationService.getLocations().subscribe(
      (data) => {
        this.locations = data; // Assuming the API returns an array of locations
        console.log(data);
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );
  }
  getLocationName(locationID: number): string {
    const location = this.locations.find(
      (loc) => loc.locationID === locationID
    );
    return location ? location.locationName : 'Unknown Location';
  }
}
