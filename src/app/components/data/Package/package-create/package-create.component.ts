import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PackageService } from '../../../../services/Package/package.service';
import { PackageInsertModel } from '../../../../models/Package/package-insert-model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-package-create',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './package-create.component.html',
  styleUrl: './package-create.component.css'
})
export class PackageCreateComponent {
  packageForm: FormGroup;

  constructor(private fb: FormBuilder, private packageService: PackageService, private navi : Router) {
      this.packageForm = this.fb.group({
          packageTitle: ['', Validators.required],
          packageDescription: ['', Validators.required],
          isAvailable: [true],
          packageCategoryID: [null, Validators.required],
          packageSubCategoryID: [null]
      });
  }

  onSubmit() {
      if (this.packageForm.valid) {
          const packageData: PackageInsertModel = this.packageForm.value;
          this.packageService.createPackage(packageData).subscribe(
              (response : any) => {
                  console.log('Package created successfully', response);

                  this.navi.navigateByUrl(response.url)
                  // Handle success (e.g., navigate, show a message)
              },
              error => {
                  console.error('Error creating package', error);
                  // Handle error (e.g., show an error message)
              }
          );
      }
  }
}
