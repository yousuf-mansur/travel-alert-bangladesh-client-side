import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FoodItemsService } from '../../../../services/Food/food-items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-fooditem',
  templateUrl: './add-fooditems.component.html',
  styleUrls: ['./add-fooditems.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule,RouterLink]
})
export class AddFoodItemComponent implements OnInit {
  foodItemForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder, private foodService: FoodItemsService, private router: Router) {
    this.foodItemForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      createdAt: [{ value: '', disabled: true }],
      updatedAt: [{ value: '', disabled: true }]
    });
  }

  ngOnInit(): void {
    const currentDateTime = new Date().toISOString().slice(0, 16);
    this.foodItemForm.patchValue({
      createdAt: currentDateTime,
      updatedAt: currentDateTime
    });
  }

  get formControls() {
    return this.foodItemForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.foodItemForm.valid) {
      const foodItemModel = this.foodItemForm.value;
      this.foodService.createFoodItem(foodItemModel).subscribe({
        next: (response:any) => {
          console.log(response);
          this.router.navigateByUrl(response.requestUrl); 
        alert('Food item created successfully')
        },
        error: (error) => {
          console.error('Error creating food item:', error);
        }
      });
    }
  }
}
