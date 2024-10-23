import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacilityService } from '../../../../services/Facilities/facility.service';

@Component({
  selector: 'app-facility-delete',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './facility-delete.component.html',
  styleUrl: './facility-delete.component.css'
})
export class FacilityDeleteComponent implements OnInit {
  facilityID: number;

  constructor(
    private route: ActivatedRoute,
    private facilityService: FacilityService,
    private router: Router
  ) {
    this.facilityID = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {}

  deleteFacility(): void {
    this.facilityService.deleteFacility(this.facilityID).subscribe(() => {
      this.router.navigate(['/facilities']);
    });
  }
}
