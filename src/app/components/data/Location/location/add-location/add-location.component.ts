import { Component, OnInit } from '@angular/core';

import { LocationService } from '../../../../../services/Location/location.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocationInsertModel } from '../../../../../models/Location model/location-insert-model';
import { StateService } from '../../../../../services/State/state.service';

@Component({
  selector: 'app-add-location',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule, JsonPipe],
  templateUrl: './add-location.component.html',
  styleUrl: './add-location.component.css'
})
export class AddLocationComponent implements OnInit {
  location: LocationInsertModel = { locationName: '', locationDescription: '', stateID: 0 };
  state : any[] =[]

  constructor(private stateSer : StateService,
    private locationService: LocationService, private http : HttpClient , private navi : Router) {}


  ngOnInit(): void {
    this.getState()
  }


  getState(){
    this.stateSer.getStates().subscribe((res: any) => {
      console.log(res); // Log the entire response to verify
      // Check if the response is already an array
      if (Array.isArray(res)) {
        this.state = res; // Directly assign if it is an array
      } else if (res.$values) {
        this.state = res.$values; // Use $values if it exists
      }
    }, (error) => {
      console.error('Error fetching states', error);
    });
  }
  

  addLocation() {
    this.locationService.addLocation(this.location).subscribe({
      next: (response) => {
        console.log('Location added successfully', response);
        this.location = { locationName: '', locationDescription: '', stateID: 0 };
        alert('Location added successfully!');  
        this.navi.navigateByUrl(response.requestUrl)
      },
      error: (err) => {
        console.error('Error adding location', err);
      }
    });
  }
  
}
