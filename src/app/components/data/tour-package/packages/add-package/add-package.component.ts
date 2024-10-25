import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PackageCategoryService } from '../../../../../services/categories/package-category.service';
import { PackageSubCategoryService } from '../../../../../services/categories/package-sub-category.service';
import { PackageService } from '../../../../../services/packages/package.service';
import { PackageCategoryResponse } from '../../../../../models/categories/package-category';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { PackageInsertModel } from '../../../../../models/Package/package.model';

@Component({
  selector: 'app-add-package',
  standalone: true,
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css'],
  imports: [ReactiveFormsModule, CommonModule], // Add CommonModule to imports
})
export class AddPackageComponent implements OnInit {
  packageForm: FormGroup; // Reactive form group for package data
  categories: any[] = []; // Array to hold package categories
  subCategories: any[] = []; // Array to hold subcategories for selected category

  constructor(
    private fb: FormBuilder, // Form builder service for managing form controls
    private packageService: PackageService, // Service to handle package operations
    private packageCategoryService: PackageCategoryService, // Service to handle package categories
    private packageSubCategoryService: PackageSubCategoryService, // Service to handle subcategories
    private router: Router // Router for navigation
  ) {
    // Initialize form controls with validation
    this.packageForm = this.fb.group({
      packageTitle: ['', Validators.required],
      packageDescription: ['', Validators.required],
      isAvailable: [false],
      packageCategoryID: ['', Validators.required],
      packageSubCategoryID: [''],
    });
  }

  ngOnInit(): void {
    this.loadCategories(); // Load categories on component initialization
    // Subscribe to changes in packageCategoryID to load corresponding subcategories
    this.packageForm
      .get('packageCategoryID')
      ?.valueChanges.subscribe((categoryID) => {
        this.loadSubCategories(categoryID);
      });
  }

  // Method to load all categories
  loadCategories(): void {
    this.packageCategoryService.getAllCategories().subscribe({
      next: (data: PackageCategoryResponse) => {
        this.categories = data.categories.$values; // Store categories from response
        console.log('Fetched categories:', this.categories);
      },
      error: (err) => {
        console.error('Error fetching categories', err);
      },
    });
  }

  // Method to load subcategories based on selected categoryID
  loadSubCategories(categoryID: number): void {
    this.packageSubCategoryService
      .getSubCategoriesByCategoryID(categoryID)
      .subscribe({
        next: (data) => {
          // Accessing the subcategories array within the $values property
          this.subCategories = data.$values || [];
        },
        error: (error) => {
          console.error('Error fetching subcategories', error);
        },
      });
  }

  onSubmit() {
    if (this.packageForm.valid) {
      const formData: PackageInsertModel = this.packageForm.value;
      this.packageService.createPackage(formData).subscribe({
        next: (response) => {
          console.log('Package created successfully!', response);
          const packageId = response.packageId; // Assuming the response has packageId
        },
        error: (error) => {
          console.error('Error creating package', error);
        },
      });
    }
  }
}
