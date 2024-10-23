import { Component, OnInit } from '@angular/core';
import { PackageSubCategoryService } from '../../../../../services/categories/package-sub-category.service';
import { PackageCategoryService } from '../../../../../services/categories/package-category.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sub-category',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  subCategory = {
    SubCategoryName: '',
    Description: '',
    PackageCategoryID: null,
  };

  categories: any[] = [];

  constructor(
    private subCategoryService: PackageSubCategoryService,
    private categoryService: PackageCategoryService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  // Load all categories for the dropdown
  loadCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;  // Assuming the data is an array of categories
      },
      error: (error) => {
        console.error('Error fetching categories', error);
      }
    });
  }

  // Handle form submission
  onSubmit() {
    this.subCategoryService.addSubCategory(this.subCategory).subscribe({
      next: (response) => {
        console.log('Sub-Category added successfully!', response);
        this.resetForm();  
        this.router.navigate(['/sub-categories']); 
      },
      error: (error) => {
        console.error('Error adding sub-category', error);
      }
    });
  }

  // Method to reset the form
  resetForm() {
    this.subCategory = {
      SubCategoryName: '',
      Description: '',
      PackageCategoryID: null,
    };
  }
}
