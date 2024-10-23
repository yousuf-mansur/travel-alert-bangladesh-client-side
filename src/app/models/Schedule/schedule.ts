export interface Schedule {
    tourVoucherID: number;
    scheduleTitle: string;
    scheduleDescription?: string;
    packageID: number;
    dayNumber: number;
    tentativeTime: Date;
    actualTime?: Date;
    tentativeCost: number;
    actualCost?: number;
    dayCostCategoryID: number;
  }
  
