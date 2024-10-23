import { Component, OnInit } from '@angular/core';
import { MealType } from '../../../../models/Food/meal-type';
import { MealTypeService } from '../../../../services/Food/meal-type.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-mealtype',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './show-mealtype.component.html',
  styleUrls: ['./show-mealtype.component.css'] 
})

export class ShowMealtypeComponent implements OnInit {
  mealTypes: MealType[] = [];
  newMealType: MealType = { mealTypeID: 0, typeName: '' };
  selectedMealType?: MealType;

  constructor(private mealTypeService: MealTypeService) {}

  ngOnInit(): void {
    this.getMealTypes();
  }

  getMealTypes(): void {
    this.mealTypeService.getMealTypes().subscribe((response: any) => {
      this.mealTypes = response.$values;  // Map to the $values array
    });
  }

  // Delete a meal type
  deleteMealType(id: number): void {
    this.mealTypeService.deleteMealType(id).subscribe(() => {
      this.mealTypes = this.mealTypes.filter((mealType) => mealType.mealTypeID !== id);
    });
  }
}
