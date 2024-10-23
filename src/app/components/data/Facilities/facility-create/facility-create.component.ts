import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacilityService } from '../../../../services/Facilities/facility.service';
import { Facility } from '../../../../models/Facilities/Facility';

@Component({
  selector: 'app-facility-create',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './facility-create.component.html',
  styleUrl: './facility-create.component.css'
})
export class FacilityCreateComponent {
  newFacility: Facility = { facilityName: '', description: '', isAvailable: false };

  constructor(private facilityService: FacilityService, private router: Router) { }

  createFacility(): void {
    this.facilityService.createFacility(this.newFacility).subscribe((res:any) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      alert('facility added successfully!');
      this.router.navigateByUrl(res.requestUrl)
    });
  }
}
