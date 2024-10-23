import { PackageIncludesService } from './../../../../services/PackageIncludes/package-includes.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-package-includes',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './view-package-includes.component.html',
  styleUrls: ['./view-package-includes.component.css'],
})
export class ViewPackageIncludesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  packageId: number = 0;
  packageIncludes: any[] = [];
  errorMessage: string = '';
  routeSub: any;

  constructor(private packageIncludesService: PackageIncludesService) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.packageId = params['packageId']; //log the value of id
    });
    if (this.packageId) this.loadPackageIncludes();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  loadPackageIncludes() {
    if (this.packageId > 0) {
      this.packageIncludesService
        .getPackageIncludesById(this.packageId)
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.packageIncludes = response.includes || [];
              console.log(response);
              this.errorMessage = '';
            } else {
              this.packageIncludes = [];
              this.errorMessage = response.message;
            }
          },
          error: () => {
            this.packageIncludes = [];
            this.errorMessage =
              'Error fetching package includes. Please try again.';
          },
        });
    } else {
      this.errorMessage = 'Please enter a valid package ID.';
      this.packageIncludes = [];
    }
  }
}
