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
import { PackageExcludesService } from '../../../../services/PackageExcludes/package-excludes.service';
import { Packageexcludes } from '../../../../models/PackageExcludes/packageexcludes';

@Component({
  selector: 'app-update-package-excludes',
  templateUrl: './update-package-excludes.component.html',
  styleUrls: ['./update-package-excludes.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  standalone: true,
})
export class UpdatePackageExcludesComponent implements OnInit {
  packageExcludesForm!: FormGroup;
  packageExcludesId!: number;

  constructor(
    private fb: FormBuilder,
    private packageExcludesService: PackageExcludesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.packageExcludesForm = this.fb.group({
      packageID: ['', Validators.required],
      excludeDescription: ['', Validators.required],
    });

    this.packageExcludesId = +this.route.snapshot.paramMap.get('packageId')!;
    this.loadPackageExcludes();
  }

  loadPackageExcludes(): void {
    this.packageExcludesService
      .getPackageExcludesById(this.packageExcludesId)
      .subscribe({
        next: (packageExcludes: Packageexcludes[]) => {
          this.packageExcludesForm.patchValue(packageExcludes);
        },
        error: (err) => {
          console.error('Error fetching package excludes', err);
        },
      });
  }

  onSubmit(): void {
    if (this.packageExcludesForm.valid) {
      const formData: Packageexcludes = {
        ...this.packageExcludesForm.value,
        excludeID: this.packageExcludesId,
      };

      this.packageExcludesService
        .updatePackageExcludes(this.packageExcludesId, formData)
        .subscribe({
          next: () => {
            console.log('Package excludes updated successfully!');
            this.router.navigate(['/packageexcludes/get/:packageId']);
          },
          error: (err) => {
            console.error('Error updating package excludes', err);
          },
        });
    } else {
      console.log('Form is invalid');
    }
  }
}
