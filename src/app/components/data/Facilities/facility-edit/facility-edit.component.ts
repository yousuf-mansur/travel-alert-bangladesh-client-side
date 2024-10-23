import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Facility } from '../../../../models/Facilities/Facility';
import { FacilityService } from '../../../../services/Facilities/facility.service';

@Component({
  selector: 'app-facility-edit',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './facility-edit.component.html',
  styleUrl: './facility-edit.component.css'
})
export class FacilityEditComponent implements OnInit {
  facility: Facility | null = null;
  facilityID: number;

  constructor(
    private route: ActivatedRoute,
    private facilityService: FacilityService,
    private router: Router
  ) {
    this.facilityID = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.loadFacility();
  }

  loadFacility(): void {
    this.facilityService.getFacility(this.facilityID).subscribe(data => {
      this.facility = data;
    });
  }

  updateFacility(): void {
    if (this.facility) {
      this.facilityService.updateFacility(this.facilityID, this.facility).subscribe((res:any) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        alert('facility updated successfully!');
        this.router.navigateByUrl(res.requestUrl);
        
      });
    }
  }
}
