import { PackageIncludesService } from './../../../../services/PackageIncludes/package-includes.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Packageincludes } from '../../../../models/PackageIncludes/packageincludes';

@Component({
  selector: 'app-update-package-includes',
  templateUrl: './update-package-includes.component.html',
  styleUrls: ['./update-package-includes.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  standalone: true,
})
export class UpdatePackageIncludesComponent implements OnInit {
  packageIncludesForm!: FormGroup;
  packageIncludesId!: number;

  constructor(
    private fb: FormBuilder,
    private PackageIncludesService: PackageIncludesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.packageIncludesForm = this.fb.group({
      packageID: ['', Validators.required],
      includeDescription: ['', Validators.required],
    });

    this.packageIncludesId = +this.route.snapshot.paramMap.get('packageId')!;
    this.loadPackageIncludes();
  }

  loadPackageIncludes(): void {
    this.PackageIncludesService.getPackageIncludesById(
      this.packageIncludesId
    ).subscribe({
      next: (packageIncludes: Packageincludes[]) => {
        this.packageIncludesForm.patchValue(packageIncludes);
      },
      error: (err: any) => {
        console.error('Error fetching package includes', err);
      },
    });
  }

  onSubmit(): void {
    if (this.packageIncludesForm.valid) {
      const formData: Packageincludes = {
        ...this.packageIncludesForm.value,
        includeID: this.packageIncludesId,
      };

      this.PackageIncludesService.updatePackageIncludes(
        this.packageIncludesId,
        formData
      ).subscribe({
        next: () => {
          console.log('Package includes updated successfully!');
          this.router.navigate(['/packageincludes/get/:packageId']);
        },
        error: (err) => {
          console.error('Error updating package includes', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
