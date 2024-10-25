import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  PackageDetail,
  PackageResponse,
} from '../../../../../models/Package/package-details.model';
import { PackageDetailsService } from '../../../../../services/PackageDetails/package-details.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-display-details',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent implements OnInit {
  packageDetails: PackageDetail | undefined; // Stores package details
  packageId: number | undefined; // Holds the package ID

  constructor(
    private service: PackageDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const packageId = this.route.snapshot.paramMap.get('packageId');
    if (packageId) {
      this.packageId = +packageId; // Store the packageId and convert to number
      this.getPackageDetails(this.packageId);
    } else {
      console.error('No package ID found in route parameters.');
    }
  }

  getPackageDetails(packageId: number): void {
    console.log('Package ID for getPackageDetails API Call:', packageId); // Log the packageId
    this.service.getPackageDetails(packageId).subscribe({
      next: (response: PackageResponse) => {
        if (response.success && response.data.$values.length > 0) {
          this.packageDetails = response.data.$values[0]; // Assign the first package detail
        } else {
          console.error('No package details found');
        }
      },
      error: (error) => {
        console.error('Error fetching package details:', error.message);
      },
    });
  }
}
