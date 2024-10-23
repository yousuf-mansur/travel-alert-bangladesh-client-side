import { Component, OnInit } from '@angular/core';

import { LocationGalleryService } from '../../../../../services/Location/location-gallery.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LocationService } from '../../../../../services/Location/location.service';
import { LocationGallery } from '../../../../../models/Location model/LocationGallery';

@Component({
  selector: 'app-location-gallerylist',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './location-gallerylist.component.html',
  styleUrls: ['./location-gallerylist.component.css'] // Corrected styleUrls typo
})
export class LocationGallerylistComponent implements OnInit {
  locationGalleries: LocationGallery[] = [];
  locations: any[] = []; // Store locations for the dropdown
  selectedLocationId: number = 0; // Selected location ID
  imageUrl: string = ''; // Image URL
  backendUrl: string = 'http://localhost:5141'; // Backend URL

  constructor(
    private locationGalleryService: LocationGalleryService,
    private locationService: LocationService // Inject LocationService
  ) {}

  ngOnInit(): void {
    this.loadLocations(); // Load locations when component initializes
  }

  // // Load all locations from the service
  // loadLocations(): void {
  //   this.locationService.getLocations().subscribe((locations) => {
  //     this.locations = locations; // Store the fetched locations
  //   });
  // }

  // Fetch galleries based on the selected location ID
  getGalleriesByLocationId(): void {
    if (this.selectedLocationId > 0) {
      this.locationGalleryService.getGalleriesByLocationId(this.selectedLocationId).subscribe(response => {
        console.log('API Response:', response);
  
        if (response.$values && Array.isArray(response.$values)) {
          this.locationGalleries = response.$values;
  
          if (this.locationGalleries.length > 0 && this.locationGalleries[0].imageUrl) {
            const imageFileName = this.locationGalleries[0].imageUrl;
            this.imageUrl = `${this.backendUrl}${imageFileName}`;
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

  loadLocations(): void {
    this.locationService.getLocations().subscribe(
      (data) => {
        this.locations = data['$values']; // Assuming the API returns an array of locations
        console.log(data);
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );
  }

}
 

