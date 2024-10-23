import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PackageSubCategoryService } from '../../../../../services/categories/package-sub-category.service'; // Import the service

@Component({
  selector: 'app-show-sub-category',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './show-sub-category.component.html',
  styleUrls: ['./show-sub-category.component.css'] // Corrected from 'styleUrl'
})
export class ShowSubCategoryComponent implements OnInit {
  subCategories: any[] = []; // Array to hold the list of subcategories

  constructor(private subCategoryService: PackageSubCategoryService) {}

  ngOnInit(): void {
    this.loadSubCategories(); // Load the subcategories when the component is initialized
  }

  // Function to load all subcategories
  
  loadSubCategories(): void {
    this.subCategoryService.getSubCategories().subscribe({
      next: (data) => {
        this.subCategories = data;
      },
      error: (err) => {
        console.error('Error fetching categories', err);
      }
    });
  }

  

  deleteSubCategory(id: number): void {
    if (confirm('Are you sure you want to delete this sub category?')) {
      this.subCategoryService.deleteSubCategory(id).subscribe({
        next: () => {
          this.loadSubCategories(); 
        },
        error: (err) => {
          console.error('Error deleting category', err);

        }
      });
    }
  }


}
