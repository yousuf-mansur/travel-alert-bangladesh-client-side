import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodItemsService } from '../../../../services/Food/food-items.service'; // Ensure the correct path
import { FoodItem } from '../../../../models/Food/FoodItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-update-food-item',
  templateUrl: './update-fooditems.component.html',
  styleUrls: ['./update-fooditems.component.css'],
  standalone:true,
  imports:[FormsModule,CommonModule,RouterLink]

})
export class UpdateFoodItemComponent implements OnInit {
  foodItem: FoodItem = {
    foodItemID: 0,
    itemName: '',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  foodItemId!: number;
  isLoading: boolean = false;

  constructor(
    private foodItemService: FoodItemsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.foodItemId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.foodItemId) {
      this.getFoodItem(this.foodItemId);
    }
  }

  getFoodItem(id: number): void {
    this.isLoading = true;
    this.foodItemService.getFoodItem(id).subscribe({
      next: (data: any) => {
        console.log("res",data)
        this.foodItem = data.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching food item', err);
        this.isLoading = false;
      }
    });
  }

  updateFoodItem(): void {
    this.isLoading = true;
    this.foodItemService.updateFoodItem(this.foodItemId, this.foodItem).subscribe({
      next: (res:any) => {
        console.log(res)
        this.isLoading = false;
        this.router.navigateByUrl(res.requestUrl); 
        alert('Food item Updated successfully');

      },
      error: (err) => {
        console.error('Error updating food item', err);
        this.isLoading = false;
      }
    });
  }
}