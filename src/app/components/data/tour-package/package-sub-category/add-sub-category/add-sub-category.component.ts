import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PackageSubCategoryService } from '../../../../../services/categories/package-sub-category.service';
import { PackageCategoryService } from '../../../../../services/categories/package-category.service';
import { PackageSubCategoryInsertModel } from '../../../../../models/categories/package-sub-category';
import {
  PackageCategoryListDTO,
  PackageCategoryResponse,
} from '../../../../../models/categories/package-category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-sub-category',
  standalone: true,
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class AddSubCategoryComponent implements OnInit {
  subCategoryForm: FormGroup;
  categories: PackageCategoryListDTO[] = []; // Array to store categories

  constructor(
    private fb: FormBuilder,
    private packageSubCategoryService: PackageSubCategoryService,
    private packageCategoryService: PackageCategoryService, // Inject the category service
    private router: Router
  ) {
    this.subCategoryForm = this.fb.group({
      packageCategoryID: ['', Validators.required], // Dropdown for selecting category
      subCategoryName: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadCategories(); // Load categories on initialization
  }

  loadCategories(): void {
    this.packageCategoryService.getAllCategories().subscribe({
      next: (data: PackageCategoryResponse) => {
        this.categories = data.categories.$values;
        console.log('Fetched categories:', this.categories);
      },
      error: (err) => {
        console.error('Error fetching categories', err);
      },
    });
  }

  onSubmit() {
    if (this.subCategoryForm.valid) {
      const formData: PackageSubCategoryInsertModel =
        this.subCategoryForm.value;
      this.packageSubCategoryService.createSubCategory(formData).subscribe({
        next: () => {
          console.log('Subcategory created successfully!');
          this.subCategoryForm.reset();
          this.router.navigate(['/sub/categories']); // Redirect to list
        },
        error: (error) => {
          console.error('Error creating subcategory', error);
          alert('Failed to create subcategory. Please try again.');
        },
      });
    } else {
      console.log('Form is invalid', this.subCategoryForm.errors);
    }
  }
}
