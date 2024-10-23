export interface PackageFoodItem {
  packageFoodItemID?: number;
  mealTypeID: number;
  foodItemID: number;
  packageID: number;
  packageDayNumber: number;
  foodQuantity: number;
  foodUnitPrice: number;
  itemTotalCost?: number;
  scheduleTime: Date;
   typeName:string,
   itemName:string
}
