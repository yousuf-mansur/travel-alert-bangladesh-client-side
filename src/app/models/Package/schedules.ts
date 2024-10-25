export interface Schedule {
  scheduleID: number;
  tourVoucherID: number | null;
  scheduleTitle: string;
  scheduleDescription: string;
  packageID: number;
  dayNumber: number;
  tentativeTime: string;
  actualTime: string;
  tentativeCost: number;
  actualCost: number;
  dayCostCategoryID: number | null;
  createdAt: Date;
  updatedAt: Date;
  packageTitle: string | null;
}
