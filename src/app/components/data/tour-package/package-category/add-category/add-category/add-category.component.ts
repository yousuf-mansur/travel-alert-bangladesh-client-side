import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PackageCategoryDTO } from '../../../../../../models/categories/create-category';
import { PackageCategoryService } from '../../../../../../services/categories/package-category.service';
import { Router } from '@angular/router'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
    
  ]
})

export class AddCategoryComponent {
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private packageCategoryService: PackageCategoryService,
    private router: Router 
  ) {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const formData: PackageCategoryDTO = this.categoryForm.value;
      this.packageCategoryService.createCategory(formData).subscribe({
        next: response => {
          console.log('Category added successfully!', response);
          this.categoryForm.reset();
          this.router.navigate(['/categories']); 
        },
        error: error => {
          console.error('There was an error adding the category!', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
