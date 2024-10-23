import { PackageIncludesService } from './../../../../services/PackageIncludes/package-includes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Packageincludes } from '../../../../models/PackageIncludes/packageincludes';

@Component({
  selector: 'app-add-package-includes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-package-includes.component.html',
  styleUrls: ['./add-package-includes.component.css'],
})
export class AddPackageIncludesComponent implements OnInit {
  packageIncludesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private PackageIncludesService: PackageIncludesService,
    private router: Router
  ) {
    this.packageIncludesForm = this.fb.group({
      packageID: [null, Validators.required],
      includeDescription: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.packageIncludesForm.valid) {
      const formData: Packageincludes = this.packageIncludesForm.value;
      this.PackageIncludesService.createPackageIncludes(formData).subscribe({
        next: (response) => {
          console.log('Package includes added successfully!', response);
          this.packageIncludesForm.reset();
          this.router.navigate(['/packageincludes/get/:packageId']); // Navigate to package includes list or another route
        },
        error: (error) => {
          console.error('Error adding package includes!', error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
