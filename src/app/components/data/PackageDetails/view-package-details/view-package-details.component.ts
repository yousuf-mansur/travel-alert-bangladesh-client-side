import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Packagedetails } from '../../../../models/PackageDetails/packagedetails';
import { PackageDetailsService } from '../../../../services/PackageDetails/package-details.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-package-details',
  standalone: true,
  templateUrl: './view-package-details.component.html',
  styleUrls: ['./view-package-details.component.css'],
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
})
export class ViewPackageDetailsComponent implements OnInit, OnDestroy {
  packageDetails: Packagedetails[] = [];
  private packageDetailsSubscription: Subscription | undefined;
  error: string | null = null;
  sortParam: string | null = null;
  isAllPackages: boolean = false;
  packageId: number | null = null;

  constructor(
    private packageDetailsService: PackageDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.packageId = params['packageId'] ? +params['packageId'] : null;
      if (this.packageId !== null) {
        console.log(`Package ID: ${this.packageId}`);
        if (isNaN(this.packageId) || this.packageId <= 0) {
          this.error = 'Invalid package ID';
          return;
        }
        this.isAllPackages = false;
        this.loadPackageDetails(this.packageId);
      } else {
        this.isAllPackages = true;
        // this.loadAllPackageDetails();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.packageDetailsSubscription) {
      this.packageDetailsSubscription.unsubscribe();
    }
  }

  loadPackageDetails(packageId: number): void {
    this.error = null;
    this.packageDetailsSubscription = this.packageDetailsService
      .getPackageDetailsByPackageID(packageId)
      .subscribe({
        next: (data: any) => {
          this.packageDetails = data;
          console.log('Package details:', data);
        },
        error: (error: any) => {
          this.handleError(error);
        },
      });
  }

  // loadAllPackageDetails(): void {
  //   this.error = null;
  //   this.packageDetailsSubscription = this.packageDetailsService
  //     .getAllPackageDetails()
  //     .subscribe({
  //       next: (data: any) => {
  //         this.packageDetails = data.$values;
  //         console.log('All package details:', data);
  //       },
  //       error: (error: any) => {
  //         this.handleError(error);
  //       },
  //     });
  // }

  handleError(error: any): void {
    console.error('Error fetching package details:', error);
    if (error.error && error.error.message) {
      console.error('Server response message:', error.error.message);
    }
    this.error = `Failed to load package details: ${
      error.error?.message || error.message || 'Unknown error'
    }`;
    this.packageDetails = [];
  }

  sortPackageDetails(sort: string): void {
    if (sort === 'asc') {
      this.packageDetails.sort((a, b) =>
        a.packageDetailsID > b.packageDetailsID ? 1 : -1
      );
    } else if (sort === 'desc') {
      this.packageDetails.sort((a, b) =>
        a.packageDetailsID < b.packageDetailsID ? 1 : -1
      );
    }
  }
}
