import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { PackageSubCategoryService } from '../../../../../services/categories/package-sub-category.service';
import { PackageCategoryService } from '../../../../../services/categories/package-category.service';
import { PackageSubCategory } from '../../../../../models/categories/package-sub-category';
import {
  PackageCategoryListDTO,
  PackageCategoryResponse,
} from '../../../../../models/categories/package-category';

@Component({
  selector: 'app-update-sub-category',
  standalone: true, // Mark as standalone
  templateUrl: './update-sub-category.component.html',
  styleUrls: ['./update-sub-category.component.css'],
  imports: [ReactiveFormsModule, CommonModule], // Include CommonModule here
})
export class UpdateSubCategoryComponent implements OnInit {
  subCategoryForm: FormGroup;
  subCategoryID: number = 0; // Initialize with a default value
  categories: PackageCategoryListDTO[] = []; // To store package categories

  constructor(
    private fb: FormBuilder,
    private packageSubCategoryService: PackageSubCategoryService,
    private packageCategoryService: PackageCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subCategoryForm = this.fb.group({
      packageCategoryID: ['', Validators.required],
      subCategoryName: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.subCategoryID = +this.route.snapshot.params['id'];
    this.loadCategories();
    this.loadSubCategory();
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

  loadSubCategory() {
    this.packageSubCategoryService
      .getSubCategoryById(this.subCategoryID)
      .subscribe({
        next: (data) => {
          this.subCategoryForm.patchValue(data);
        },
        error: (error) => {
          console.error('Error loading subcategory', error);
        },
      });
  }

  onSubmit() {
    if (this.subCategoryForm.valid) {
      const formData: PackageSubCategory = this.subCategoryForm.value;
      this.packageSubCategoryService
        .updateSubCategory(this.subCategoryID, formData)
        .subscribe({
          next: (response) => {
            console.log('Subcategory updated successfully!', response);
            this.subCategoryForm.reset();
            this.router.navigate(['/sub-categories']); // Navigate to the subcategory list
          },
          error: (error) => {
            console.error('Error updating subcategory', error);
          },
        });
    } else {
      console.log('Form is invalid');
    }
  }
}
