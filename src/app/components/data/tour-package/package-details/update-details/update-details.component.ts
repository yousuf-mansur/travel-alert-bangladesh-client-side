// components/update-details/update-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  PackageDetailsInsertModel,
  PackageDetailsUpdateModel,
  PackageResponse,
} from '../../../../../models/Package/package-details.model';
import { PackageDetailsService } from '../../../../../services/PackageDetails/package-details.service';

@Component({
  selector: 'app-update-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css'],
})
export class UpdateDetailsComponent implements OnInit {
  packageId: number | undefined;
  model: PackageDetailsInsertModel = new PackageDetailsInsertModel(); // Form model for editing package details
  updateModel: PackageDetailsUpdateModel = new PackageDetailsUpdateModel(); // New model for updating package details
  successMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private packageDetailsService: PackageDetailsService,
    private router: Router // For navigation after successful edit
  ) {}

  ngOnInit(): void {
    this.packageId = +this.route.snapshot.paramMap.get('packageId')!;
    if (this.packageId) {
      this.loadPackageDetails(this.packageId);
    }
  }

  loadPackageDetails(packageId: number): void {
    this.packageDetailsService.getPackageDetails(packageId).subscribe({
      next: (response: PackageResponse) => {
        if (
          response.success &&
          response.data &&
          response.data.$values.length > 0
        ) {
          const details = response.data.$values[0]; // Assuming you want the first item

          // Assign values to the model
          this.model.packageTitle = details.packageTitle;
          this.model.packageDuration = details.packageDuration.toString();

          // Convert startDate and endDate to Date objects
          const startDate = new Date(details.startDate);
          const endDate = new Date(details.endDate);

          // Assign Date objects to model properties
          this.model.startDate = startDate; // Keep as Date
          this.model.endDate = endDate; // Keep as Date

          this.model.pickupPoint = details.pickupPoint;
          this.model.maximumPerson = details.maximumPerson;
          this.model.minimumPerson = details.minimumPerson;
        } else {
          console.error('No package details found.');
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error loading package details:', error.message);
      },
    });
  }

  updatePackageDetails(): void {
    if (this.packageId) {
      // Populate the update model with formatted dates
      this.updateModel.packageTitle = this.model.packageTitle;
      this.updateModel.packageDuration = this.model.packageDuration;

      // Format dates to strings
      this.updateModel.startDate = this.model.startDate
        ? this.formatDate(this.model.startDate)
        : undefined;
      this.updateModel.endDate = this.model.endDate
        ? this.formatDate(this.model.endDate)
        : undefined;

      this.updateModel.pickupPoint = this.model.pickupPoint;
      this.updateModel.maximumPerson = this.model.maximumPerson;
      this.updateModel.minimumPerson = this.model.minimumPerson;

      // Check the populated update model
      console.log('Update Model:', this.updateModel); // Add this line for debugging

      // Call the update service with the model
      this.packageDetailsService
        .updatePackageDetails(this.packageId, this.updateModel)
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.successMessage = 'Package details updated successfully!';
              this.router.navigate([`/package-details/${this.packageId}`]);
            }
          },
          error: (error: HttpErrorResponse) => {
            console.error('Error updating package details:', error.message);
          },
        });
    }
  }

  private formatDate(date: any): string {
    if (!(date instanceof Date)) {
      console.error('Invalid date:', date);
      return ''; // Return an empty string or a default value if the date is not valid
    }

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(date.getDate()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}`; // Format: yyyy-MM-dd
  }
}
