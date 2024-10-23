import { PackageExcludesService } from './../../../../services/PackageExcludes/package-excludes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Packageexcludes } from '../../../../models/PackageExcludes/packageexcludes';

@Component({
  selector: 'app-add-package-excludes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-package-excludes.component.html',
  styleUrls: ['./add-package-excludes.component.css'],
})
export class AddPackageExcludesComponent implements OnInit {
  packageExcludesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private PackageExcludesService: PackageExcludesService,
    private router: Router
  ) {
    this.packageExcludesForm = this.fb.group({
      packageID: [null, Validators.required],
      excludeDescription: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.packageExcludesForm.valid) {
      const formData: Packageexcludes = this.packageExcludesForm.value;
      this.PackageExcludesService.createPackageExcludes(formData).subscribe({
        next: (response) => {
          console.log('Package excludes added successfully!', response);
          this.packageExcludesForm.reset();
          this.router.navigate(['packageexcludes/get/:packageId']); // Navigate to package excludes list or another route
        },
        error: (error) => {
          console.error('Error adding package excludes!', error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
