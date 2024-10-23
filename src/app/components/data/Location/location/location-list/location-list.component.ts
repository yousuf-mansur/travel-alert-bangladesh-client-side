// location-list.component.ts
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../../../services/Location/location.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-list',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css'
})
export class LocationListComponent implements OnInit {
  locations: any[] = [];

  constructor(private locationService: LocationService, private router: Router) { }

  ngOnInit(): void {
    this.loadLocations();
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

  navigateToEditLocation(id: number): void {
    this.router.navigate(['/location/edit/', id]); // Redirect to the edit location page
  }

  navigateToAddLocation(): void {
    this.router.navigate(['/location/add']); // Redirect to the add location page
  }

  deleteLocation(id: number): void {
    if (confirm('Are you sure you want to delete this location?')) {
      this.locationService.deleteLocation(id).subscribe({
        next: () => {
          alert('Location deleted successfully');
          this.loadLocations(); // Reload the locations after deletion
        },
        error: (err) => {
          console.error('Error deleting location', err);
          alert('Failed to delete location');
        }
      });
    }
  }
}