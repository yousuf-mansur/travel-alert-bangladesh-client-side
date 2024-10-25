import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this import for CommonModule
import { PackageSubCategory } from '../../../../../models/categories/package-sub-category';
import { PackageSubCategoryService } from '../../../../../services/categories/package-sub-category.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-sub-category',
  templateUrl: './show-sub-category.component.html',
  styleUrls: ['./show-sub-category.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], // Ensure CommonModule is included here
})
export class ShowSubCategoryComponent implements OnInit {
  subCategories: PackageSubCategory[] = [];

  constructor(private packageSubCategoryService: PackageSubCategoryService) {}

  ngOnInit(): void {
    this.loadSubCategories();
  }

  loadSubCategories() {
    this.packageSubCategoryService.getAllSubCategories().subscribe({
      next: (data) => {
        // Access the subcategories array within the $values property
        this.subCategories = data.$values || [];
      },
      error: (error) => {
        console.error('Error fetching subcategories', error);
      },
    });
  }

  deleteSubCategory(id: number) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this subcategory?'
    );

    if (confirmed) {
      this.packageSubCategoryService.deleteSubCategory(id).subscribe({
        next: () => {
          console.log('Subcategory deleted successfully');
          this.loadSubCategories(); // Reload the list after deletion
        },
        error: (error) => {
          console.error('Error deleting subcategory', error);
          alert('Failed to delete subcategory. Please try again.');
        },
      });
    }
  }
}
