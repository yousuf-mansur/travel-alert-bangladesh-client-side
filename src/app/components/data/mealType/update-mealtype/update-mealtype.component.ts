import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MealTypeService } from '../../../../services/Food/meal-type.service';
import { MealType } from '../../../../models/Food/meal-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-meal-type',
  templateUrl: './update-mealtype.component.html',
  styleUrls: ['./update-mealtype.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    FormsModule
  ],
  standalone: true,
})
export class UpdateMealTypeComponent implements OnInit {
  mealTypeId!: number;
  mealType: MealType = { mealTypeID: 0, typeName: ''}; 
  

  constructor(
    private route: ActivatedRoute,
    private mealTypeService: MealTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mealTypeId = +this.route.snapshot.paramMap.get('id')!;
    this.getMealTypeById(this.mealTypeId);
  }

  getMealTypeById(id: number): void {
    this.mealTypeService.getMealTypeById(id).subscribe(
      (data: MealType) => {
        this.mealType = data;

      },
      (error) => {
        console.error('Error fetching meal type:', error);
        
      }
    );
  }

  updateMealType(): void {
    this.mealTypeService.updateMealType(this.mealTypeId, this.mealType).subscribe(
      (res:any) => {
        console.log(res)
        this.router.navigateByUrl(res.requestUrl); 
        alert('Meal Type Updated successfully')
      },
      (error) => {
        console.error('Error updating meal type:', error);
      }
    );
  }
}
