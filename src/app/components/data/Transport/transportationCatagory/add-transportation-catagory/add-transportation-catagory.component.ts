import { Component } from '@angular/core';
import { TransportationCategoryInputModel } from '../../../../../models/Transport/transportation-category-input-model';
import { TransportationCategoryService } from '../../../../../services/Transport/transportation-category.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-transportation-catagory',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-transportation-catagory.component.html',
  styleUrl: './add-transportation-catagory.component.css'
})
export class AddTransportationCatagoryComponent {

  category: TransportationCategoryInputModel = {
    transportationCatagoryName: ''
  };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private categoryService: TransportationCategoryService, private router: Router) { }

  addCategory(): void {
    if (!this.category.transportationCatagoryName.trim()) {
      this.errorMessage = 'Category name is required.';
      return;
    }

    this.categoryService.addCategory(this.category).subscribe((res: any) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      alert('Transportation Catagory added successfully!');
      this.router.navigateByUrl(res.requestUrl);
        
    
    
    });
  }


}
