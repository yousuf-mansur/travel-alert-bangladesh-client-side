import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackageCategoryListDTO } from '../../../../../models/categories/package-category';
import { PackageCategoryService } from '../../../../../services/categories/package-category.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-show-category',
  standalone: true,
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css'],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ShowCategoryComponent implements OnInit {
  categories: PackageCategoryListDTO[] = [];

  constructor(private packageCategoryService: PackageCategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.packageCategoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error fetching categories', err);
      }
    });
  }

  deleteCategory(id: number): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.packageCategoryService.deleteCategory(id).subscribe({
        next: () => {
          this.loadCategories(); // Refresh the category list
        },
        error: (err) => {
          console.error('Error deleting category', err);

        }
      });
    }
  }


}
