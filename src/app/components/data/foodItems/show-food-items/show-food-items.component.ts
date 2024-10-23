import { Component, OnInit } from '@angular/core';
// Update the path if necessary

import { FoodItem } from '../../../../models/Food/FoodItem';
import { FoodItemsService } from '../../../../services/Food/food-items.service';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-food-items',
  templateUrl: './show-food-items.component.html',
  styleUrls: ['./show-food-items.component.css'],
  imports: [CommonModule, RouterLink],
  standalone: true,
})
export class ShowFoodItemsComponent implements OnInit {
  foodItems: FoodItem[] = [];
  newFoodItem: FoodItem = {
    foodItemID: 0,
    itemName: '',
   createdAt: new Date(),
   updatedAt:new Date()

  };
  selectedFoodItem?: FoodItem;

  constructor(private foodItemsService: FoodItemsService) {}

  ngOnInit(): void {
    this.getAllFoodItems();
  }

  // Fetch all food items from the service
  getAllFoodItems(): void {
    this.foodItemsService.getAllFoodItems().subscribe((response: any) => {
      console.log(response); // Log the response to check the structure
      this.foodItems = response.$values; // Map the response to $values if applicable
    });
  }

  // Delete a food item
  deleteFoodItem(id: number): void {
    this.foodItemsService.deleteFoodItem(id).subscribe(() => {
      // Remove the deleted food item from the array
      this.foodItems = this.foodItems.filter(
        (foodItem) => foodItem.foodItemID !== id
      );
    });
  }
}
