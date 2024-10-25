import { PackageDetailsService } from './../../../../../services/PackageDetails/package-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PackageDetailsInsertModel } from '../../../../../models/Package/package-details.model';

@Component({
  selector: 'app-add-details',
  standalone: true,
  imports: [NgIf, RouterLink, ReactiveFormsModule, FormsModule, CommonModule], // Use FormsModule instead of NgModel
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css'],
})
export class AddDetailsComponent implements OnInit {
  packageId: number | undefined;
  model: PackageDetailsInsertModel = new PackageDetailsInsertModel(); // Form model for package details
  successMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: PackageDetailsService,
    private router: Router // Inject the Router service
  ) {}

  ngOnInit(): void {
    this.packageId = +this.route.snapshot.paramMap.get('packageId')!;
  }

  addPackageDetails(): void {
    if (this.packageId) {
      this.service.addPackageDetails(this.packageId, this.model).subscribe({
        next: (response: any) => {
          if (response.success) {
            this.successMessage = 'Package details added successfully!';
            this.router.navigate([`/package/details/${this.packageId}`]);
          }
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error adding package details:', error.message);
        },
      });
    } else {
      console.error('Package ID not found');
    }
  }
}
