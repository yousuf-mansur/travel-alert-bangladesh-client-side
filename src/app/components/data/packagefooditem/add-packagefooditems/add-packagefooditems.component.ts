import { Component, OnInit } from '@angular/core';
import { PackageFoodItem } from '../../../../models/Food/PackageFoodItem';
import { PackageFoodItemsService } from '../../../../services/Food/package-food-items.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealTypeService } from '../../../../services/Food/meal-type.service';
import { MealType } from '../../../../models/Food/meal-type';
import { FoodItem } from '../../../../models/Food/FoodItem';
import { FoodItemsService } from '../../../../services/Food/food-items.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-packagefooditems',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-packagefooditems.component.html',
  styleUrl: './add-packagefooditems.component.css'
})
export class AddPackagefooditemsComponent implements OnInit {
  mealTypes: any[] = []; 
  foodItems: any[] = []; 
  packageFoodItems: any[] = [];

  newFoodItem: any = { 
    mealTypeID: 0,
    foodItemID: 0,
    packageID: 0,
    packageDayNumber: 0,
    foodQuantity: 0,
    foodUnitPrice: 0,
    scheduleTime: new Date()
  };

  packageID: number = 0; 
  ide: any;

  constructor(
    private mealTypeService: MealTypeService,
    private foodItemsService: FoodItemsService,
    private packageFoodItemService: PackageFoodItemsService,
    private route: ActivatedRoute, 
    private navig: Router
  ) {}

  ngOnInit(): void {
    this.getMealTypes(); 
    this.getAllFoodItems(); 
    this.ide = this.route.snapshot.paramMap.get('id');
    this.LoadFoodItems();
  }  

  LoadFoodItems(): void {
    this.packageFoodItemService.getPackageFoodItems(this.ide).subscribe((res: any) => {
      console.log('response', res);
      this.packageFoodItems = res.foodItems.$values;
    });
  }

  addPackageFoodItem(): void {
    if (this.newFoodItem.mealTypeID === 0 || this.newFoodItem.foodItemID === 0) {
      alert('Meal Type ID and Food Item ID cannot be null');
      return;
    }

    this.newFoodItem.packageID = this.ide;
    this.packageFoodItemService.addPackageFoodItem(this.newFoodItem, this.ide).subscribe(
      (response: any) => {
        console.log(response);

        if (response.success) {
          alert('Package food item added successfully');
          this.LoadFoodItems();
          this.resetForm();
        } else {
          alert('Error: ' + response.message);
        }
      },
      error => {
        console.error('Error adding package food item:', error);
      }
    );
  }

  SaveExit(): void {
    this.addPackageFoodItem();
    this.navig.navigateByUrl('/dashboard');
  }

  resetForm(): void {
    this.newFoodItem = {
      mealTypeID: 0,
      foodItemID: 0,
      packageID: this.packageID,
      packageDayNumber: 0,
      foodQuantity: 0,
      foodUnitPrice: 0,
      scheduleTime: new Date()
    };
  }

  getMealTypes(): void {
    this.mealTypeService.getMealTypes().subscribe((response: any) => {
      this.mealTypes = response.$values; // Map to the $values array
      console.log('res', this.mealTypes);
    });
  }

  getAllFoodItems(): void {
    this.foodItemsService.getAllFoodItems().subscribe((response: any) => {
      console.log(response); // Log the response to check the structure
      this.foodItems = response.$values; // Map the response to $values if applicable
    });
  }

  getMealTypeName(mealTypeID: number): string {
    const mealType = this.mealTypes.find(mt => mt.mealTypeID === mealTypeID);
    return mealType ? mealType.typeName : 'Unknown';
  }

  // Method to get food item name by ID
  getFoodItemName(foodItemID: number): string {
    const foodItem = this.foodItems.find(fi => fi.foodItemID === foodItemID);
    return foodItem ? foodItem.itemName : 'Unknown';
  }
}





