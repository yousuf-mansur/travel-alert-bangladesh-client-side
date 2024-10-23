import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PackageDetailsService } from '../../../../services/PackageDetails/package-details.service';
import { Packagedetailsinsertmodel } from '../../../../models/PackageDetails/packagedetailsinsertmodel';
import { CommonModule } from '@angular/common';
import { Packagedetails } from '../../../../models/PackageDetails/packagedetails';

@Component({
  selector: 'app-add-package-details',
  templateUrl: './add-package-details.component.html',
  styleUrls: ['./add-package-details.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
})
export class AddPackageDetailsComponent implements OnInit {
  // packageDetailsForm: FormGroup;
  // isSubmitted = false;
  packageDetailsForm: FormGroup;
  packageDetails: Packagedetails[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    // private formBuilder: FormBuilder,
    // private packageDetailsService: PackageDetailsService,
    // private router: Router,
    // private route: ActivatedRoute
    private packageDetailsService: PackageDetailsService,
    private fb: FormBuilder
  ) {
    this.packageDetailsForm = this.fb.group({
      packageID: [null, [Validators.required]],
      packageDuration: [null, [Validators.required, Validators.min(1)]],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      pickupPoint: ['', Validators.required],
      maximumPerson: [null, [Validators.required, Validators.min(1)]],
      minimumPerson: [null, [Validators.required, Validators.min(1)]],
      createdAt: [{ value: '', disabled: true }],
      updatedAt: [{ value: '', disabled: true }],
    });
  }
  loading = false;

  ngOnInit(): void {
    this.fetchPackageDetails();
    const currentDateTime = new Date().toISOString().slice(0, 16);
    this.packageDetailsForm.patchValue({
      createdAt: currentDateTime,
      updatedAt: currentDateTime,
    });
  }

  get formControls() {
    return this.packageDetailsForm.controls;
  }

  addPackageDetails() {
    if (this.packageDetailsForm.valid) {
      this.loading = true;
      this.packageDetailsService
        .addPackageDetails(this.packageDetailsForm.value)
        .subscribe({
          next: (response) => {
            // Construct the success message including packageDetailsID from the response
            this.successMessage = `Package Details added successfully. ID: ${response.packageDetailsID}`;
            this.packageDetailsForm.reset(); // Optionally reset the form after successful submission
          },
          error: (error) => {
            this.errorMessage =
              'Failed to add Package Details. Please try again.';
          },
          complete: () => {
            this.loading = false;
          },
        });
    }
  }

  // Fetch the list of package details
  fetchPackageDetails(): void {
    this.packageDetailsService.getPackageDetails().subscribe({
      next: (data: Packagedetails[]) => {
        this.packageDetails = data;
      },
      error: (err) => {
        console.error('Error fetching package details:', err);
      },
    });
  }
}
