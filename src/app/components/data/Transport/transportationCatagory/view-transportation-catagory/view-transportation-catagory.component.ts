import { Component, OnInit } from '@angular/core';
import { TransportationCategoryService } from '../../../../../services/Transport/transportation-category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-transportation-catagory',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './view-transportation-catagory.component.html',
  styleUrl: './view-transportation-catagory.component.css'
})
export class ViewTransportationCatagory  implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: TransportationCategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getAllCategories().subscribe(response => {
      console.log(response);
      
      this.categories = response.data.$values;

      
    });
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(response => {

      this.getCategories= response.data.$values(id);
      // if (response.success) {
      //   this.getCategories(); // Refresh the list after deletion
      // } else {
      //   console.error('Error deleting category');
      // }
    });
  }
}
