import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Facility } from '../../../../models/Facilities/Facility';
import { FacilityService } from '../../../../services/Facilities/facility.service';

@Component({
  selector: 'app-facility-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './facility-list.component.html',
  styleUrl: './facility-list.component.css'
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.loadFacilities();
  }

  loadFacilities(): void {
    this.facilityService.getFacilities().subscribe((data:any) => {
      this.facilities = data.$values;
    });
  }
}