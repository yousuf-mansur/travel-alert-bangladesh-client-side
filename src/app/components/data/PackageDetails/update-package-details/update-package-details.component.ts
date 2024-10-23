import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PackageDetailsService } from '../../../../services/PackageDetails/package-details.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Packagedetails } from '../../../../models/PackageDetails/packagedetails';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-package-details',
  templateUrl: './update-package-details.component.html',
  styleUrls: ['./update-package-details.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
})
export class UpdatePackageDetailsComponent implements OnInit {
  packageDetailsForm!: FormGroup;
  packageDetails: Packagedetails = {
    packageID: 0,
    packageDuration: 0,
    startDate: new Date(),
    endDate: new Date(),
    pickupPoint: '',
    maximumPerson: 0,
    minimumPerson: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    packageDetailsID: 0,
  };
  packageID!: number;
  isLoading: boolean = false;

  constructor(
    private packageDetailsService: PackageDetailsService,
    private fb: FormBuilder, // FormBuilder service to create forms
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form
    this.packageDetailsForm = this.fb.group({
      packageDuration: [0, [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      pickupPoint: ['', [Validators.required]],
      maximumPerson: [1, [Validators.required, Validators.min(1)]],
      minimumPerson: [1, [Validators.required, Validators.min(1)]],
    });

    // Get package ID from the route
    this.packageID = Number(this.route.snapshot.paramMap.get('packageId'));
    if (this.packageID) {
      this.loadPackageDetails(this.packageID);
    }
  }

  loadPackageDetails(id: number): void {
    this.isLoading = true;
    this.packageDetailsService.getPackageDetailsByPackageID(id).subscribe({
      next: (data: any) => {
        this.packageDetails = data.data;
        this.patchFormWithData(this.packageDetails);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching package details', err);
        this.isLoading = false;
      },
    });
  }

  patchFormWithData(details: Packagedetails): void {
    this.packageDetailsForm.patchValue({
      packageDuration: details.packageDuration,
      startDate: details.startDate,
      endDate: details.endDate,
      pickupPoint: details.pickupPoint,
      maximumPerson: details.maximumPerson,
      minimumPerson: details.minimumPerson,
    });
  }

  updatePackageDetails(): void {
    this.isLoading = true;
    this.packageDetails.updatedAt = new Date();
    this.packageDetailsService
      .updatePackageDetails(this.packageID, this.packageDetailsForm.value)
      .subscribe({
        next: (res: any) => {
          this.isLoading = false;
          this.router.navigateByUrl(res.requestUrl);
          alert('Package details updated successfully');
        },
        error: (err) => {
          console.error('Error updating package details', err);
          this.isLoading = false;
        },
      });
  }

  onSubmit(): void {
    if (this.packageDetailsForm.valid) {
      this.updatePackageDetails();
    } else {
      alert('Form is invalid');
    }
  }
}
