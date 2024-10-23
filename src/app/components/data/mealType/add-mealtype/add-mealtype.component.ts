import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MealType } from '../../../../models/Food/meal-type';
import { MealTypeService } from '../../../../services/Food/meal-type.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-meal-type',
  templateUrl: './add-mealtype.component.html',
  styleUrls: ['./add-mealtype.component.css'], 
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ]
 
})
export class AddMealTypeComponent {
    mealTypes: MealType[] = [];
    newMealType: MealType = { mealTypeID: 0, typeName: '' };
    selectedMealType?: MealType;
    successMessage: string | undefined;
    constructor(private mealTypeService: MealTypeService, private router: Router) {}

  // Add a new meal type
  addMealType(): void {
    this.mealTypeService.addMealType(this.newMealType).subscribe((mealType) => {
      this.mealTypes.push(mealType);
      this.newMealType = { mealTypeID: 0, typeName: '' };
      this.successMessage = 'Meal type added successfully!';
      alert('Food item created successfully')
    });
  }
 
  // Select a meal type for editing
  editMealType(mealType: MealType): void {
    this.selectedMealType = { ...mealType };
  }

  // Update the meal type
  updateMealType(): void {
    if (this.selectedMealType) {
      this.mealTypeService
        .updateMealType(this.selectedMealType.mealTypeID, this.selectedMealType)
        .subscribe((res:any) => {
          console.log(res)
          
          this.selectedMealType = undefined;
          this.successMessage = 'Meal type Successfully updated!';
          this.router.navigateByUrl(res.requestUrl); 
          alert('Meal Type Created successfully')
        });
    }
  }
}