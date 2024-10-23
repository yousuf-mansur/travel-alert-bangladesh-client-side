import { Component, OnInit, inject } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PackageExcludesService } from '../../../../services/PackageExcludes/package-excludes.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Packageexcludes } from '../../../../models/PackageExcludes/packageexcludes';

@Component({
  selector: 'app-view-package-excludes',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './view-package-excludes.component.html',
  styleUrls: ['./view-package-excludes.component.css'],
})
export class ViewPackageExcludesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  packageId: number = 0;
  packageExcludes: any[] = [];
  errorMessage: string = '';
  routeSub: any;

  constructor(private packageExcludesService: PackageExcludesService) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.packageId = params['packageId']; //log the value of id
      if (this.packageId) this.loadPackageExcludes();
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  loadPackageExcludes() {
    if (this.packageId > 0) {
      this.packageExcludesService
        .getPackageExcludesById(this.packageId)
        .subscribe({
          next: (response) => {
            console.log(response);
            if (response.success) {
              this.packageExcludes = response.excludes || [];
              console.log(response);
              this.errorMessage = '';
            } else {
              this.packageExcludes = [];
              this.errorMessage = response.message;
            }
          },
          error: () => {
            this.packageExcludes = [];
            this.errorMessage =
              'Error fetching package includes. Please try again.';
          },
        });
    } else {
      this.errorMessage = 'Please enter a valid package ID.';
      this.packageExcludes = [];
    }
  }

  // deletePackageExcludes(id: number): void {
  //   if (confirm('Are you sure you want to delete this package exclude?')) {
  //     this.subscription.add(
  //       this.service.deletePackageExcludes(id).subscribe({
  //         next: () => {
  //           alert('Package exclude deleted successfully.');
  //           // Reload the excludes list after deletion
  //           this.loadPackageExcludes(id); // Load the updated list of excludes
  //         },
  //         error: (err) => {
  //           console.error('Error deleting package exclude', err);
  //           alert('Error deleting package exclude: ' + err.message);
  //         },
  //       })
  //     );
  //   }
  // }
}
