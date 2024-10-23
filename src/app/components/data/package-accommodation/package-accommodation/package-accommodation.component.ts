import { Component, OnInit } from '@angular/core';
//import { PackageAccomodation } from '../../../models/package-accomodation/package-accomodation';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Accommodation } from '../../../../models/package-accomodation/package-accomodation';
import { PackageAccommodationService } from '../../../../services/package-accommodation/package-accommodation.service';

//import { PackageAccommodation, PackageAccommodationResponse } from '../../../models/package-accomodation/package-accomodation';

@Component({
  selector: 'app-package-accommodation',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './package-accommodation.component.html',
  styleUrl: './package-accommodation.component.css',
})
export class PackageAccommodationComponent implements OnInit {
  accommodationForm: FormGroup;
  accommodations: Accommodation[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private accommodationService: PackageAccommodationService,
    private fb: FormBuilder
  ) {
    this.accommodationForm = this.fb.group({
      packageID: [1, Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomID: [1, Validators.required],
      price: [2000, Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchAccommodations();
  }

  loading = false;

  // Add accommodation
  addAccommodation() {
    if (this.accommodationForm.valid) {
      this.loading = true;
      this.accommodationService
        .addAccommodation(this.accommodationForm.value)
        .subscribe({
          next: (response) => {
            // Construct the success message including packageAccommodationID from the response
            this.successMessage = `Package accommodation added successfully. ID: ${response.packageAccommodationID}`;
            this.accommodationForm.reset(); // Optionally reset the form after successful submission
          },
          error: (error) => {
            this.errorMessage =
              'Failed to add accommodation. Please try again.';
          },
          complete: () => {
            this.loading = false;
          },
        });
    }
  }

  // Fetch the list of accommodations
  fetchAccommodations(): void {
    this.accommodationService.getAccommodations().subscribe({
      next: (data: Accommodation[]) => {
        this.accommodations = data;
      },
      error: (err) => {
        console.error('Error fetching accommodations:', err);
      },
    });
  }
}
