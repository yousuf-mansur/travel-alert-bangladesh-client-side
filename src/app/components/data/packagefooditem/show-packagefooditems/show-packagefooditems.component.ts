import { Component, OnInit } from '@angular/core';
import { PackageFoodItem } from '../../../../models/Food/PackageFoodItem';
import { PackageFoodItemsService } from '../../../../services/Food/package-food-items.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FoodItemsService } from '../../../../services/Food/food-items.service';
import { MealTypeService } from '../../../../services/Food/meal-type.service';

@Component({
  selector: 'app-show-packagefooditems',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './show-packagefooditems.component.html',
  styleUrl: './show-packagefooditems.component.css'
})
export class ShowPackagefooditemsComponent implements OnInit {
  packageFoodItems: PackageFoodItem[] = [];
  newFoodItem: PackageFoodItem = {
    mealTypeID: 0,
    foodItemID: 0,
    packageID: 0,
    packageDayNumber: 0,
    foodQuantity: 0,
    foodUnitPrice: 0,
    scheduleTime: new Date(),
    typeName:'',
    itemName:''
  };
  packageID: any;

  constructor(
    private packageFoodItemService: PackageFoodItemsService,
    private mealTypeService: MealTypeService,
    private foodItemsService: FoodItemsService,
    private http : HttpClient
  ) {}

  ngOnInit(): void {
    this.getPackageFoodItems(this.packageID.toString());

  }

  getPackageFoodItems(packageIdInputValue: string): void {
    const packageId = parseInt(packageIdInputValue);
    if (!isNaN(packageId)) {
      this.packageFoodItemService.getPackageFoodItems(packageId).subscribe(response => {
        if (response.success) {
          const foodItems = response.foodItems.$values;
  
          // Fetch TypeName and ItemName for each food item
          foodItems.forEach((foodItem: PackageFoodItem) => {
            this.getMealTypeName(foodItem);
            this.getFoodItemName(foodItem);
          });
  
          this.packageFoodItems = foodItems;
        }
      });
    } else {
      console.error('Invalid Package ID');
    }
  }
  // Fetch TypeName for the MealTypeID
  getMealTypeName(foodItem: PackageFoodItem): void {
    this.mealTypeService.getMealTypeById(foodItem.mealTypeID).subscribe(mealType => {
      foodItem.typeName = mealType.typeName; // Assuming the service returns the meal type name
    });
  }

  getFoodItemName(foodItem: PackageFoodItem): void {
    this.foodItemsService.getFoodItem(foodItem.foodItemID).subscribe(
      foodItemResponse => {
        if (foodItemResponse && foodItemResponse.itemName) {
          foodItem.itemName = foodItemResponse.itemName; // Assign the correct item name to the passed foodItem
        }
      },
      error => {
        console.error(`Error fetching food item with ID ${foodItem.foodItemID}:`, error);
      }
    );
  }
  
  onPackageIdChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.getPackageFoodItems(inputElement.value);
  }
  
}