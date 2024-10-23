export interface GetPackageBudget {
  packageID: number;
  estimateedFoodCost: number;
  estimatedTransportCost: number;
  estimatedAccomodationCost: number;
  otherCost: number;
  profitPercent: number;
  subtotal: number;
  profit: number;
  totalPackageCost: number;
  individualPackageCost: number;
}
