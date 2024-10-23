import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LocationService } from '../../../../../services/Location/location.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocationInsertModel } from '../../../../../models/Location model/location-insert-model';

@Component({
  selector: 'app-edit-location',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './edit-location.component.html',
  styleUrl: './edit-location.component.css'
})
export class EditLocationComponent implements OnInit {
  location: LocationInsertModel = { locationName: '', locationDescription: '', stateID: 0 };
  locationId: number;
  state: any[] = []; // Declare the state array

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService,
    private http: HttpClient // Inject HttpClient to fetch states
  ) {
    this.locationId = this.route.snapshot.params['id']; // Get the location ID from the URL
  }

  ngOnInit(): void {
    this.getState(); // Fetch the states when the component initializes
    this.getLocationDetails(); // Fetch the location details for editing
  }

  // Fetch the states to populate the dropdown
  getState() {
    this.http.get('http://localhost:5141/api/State').subscribe((res: any) => {
      if (Array.isArray(res)) {
        this.state = res; // Directly assign if it is an array
      } else if (res.$values) {
        this.state = res.$values; // Use $values if it exists
      }
    }, (error) => {
      console.error('Error fetching states', error);
    });
  }

  // Fetch the location details based on locationId
  getLocationDetails() {
    this.locationService.getLocationById(this.locationId).subscribe({
      next: (data: any) => {
        this.location = {
          locationName: data.locationName,
          locationDescription: data.locationDescription,
          stateID: data.stateID
        };
      },
      error: (err) => {
        console.error('Error fetching location details', err);
      }
    });
  }

  // Update the location with the new values
  updateLocation() {
    this.locationService.updateLocation(this.locationId, this.location).subscribe({
      next: () => {
        console.log('Location updated successfully');
        this.router.navigate(['/location']);
      },
      error: (err) => {
        console.error('Error updating location', err);
      }
    });
  }
}