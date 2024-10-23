import { CommonModule } from '@angular/common';
import { Accommodation } from '../../../../models/package-accomodation/package-accomodation';
import { PackageAccommodationService } from '../../../../services/package-accommodation/package-accommodation.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-accommodation',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './get-accommodation.component.html',
  styleUrls: ['./get-accommodation.component.css'],
})
export class GetAccommodationComponent implements OnInit {
  private route = inject(ActivatedRoute);

  routeSub: any;

  packageId: number = 0;
  accommodations: any[] = [];
  errorMessage: string = '';

  constructor(private accommodationService: PackageAccommodationService) {}
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.packageId = params['packageId']; //log the value of id
    });

    if (this.packageId) this.getAccommodations();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getAccommodations() {
    if (this.packageId > 0) {
      this.accommodationService
        .getPackageAccommodations(this.packageId)
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.accommodations = response.accommodations || [];
              console.log(response);
              this.errorMessage = '';
            } else {
              this.accommodations = [];
              this.errorMessage = response.message;
            }
          },
          error: () => {
            this.accommodations = [];
            this.errorMessage =
              'Error fetching accommodations. Please try again.';
          },
        });
    } else {
      this.errorMessage = 'Please enter a valid package ID.';
      this.accommodations = [];
    }
  }
}
