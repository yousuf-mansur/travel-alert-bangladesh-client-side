// models/packages/package-details.model.ts

export class PackageDetailsInsertModel {
  packageTitle?: string; // Made optional
  packageDuration?: string; // Made optional
  startDate?: Date; // Keep as Date
  endDate?: Date; // Keep as Date
  pickupPoint?: string; // Made optional
  maximumPerson?: number; // Made optional
  minimumPerson?: number; // Made optional

  constructor(init?: Partial<PackageDetailsInsertModel>) {
    Object.assign(this, init);
  }
}

export class PackageDetailsUpdateModel {
  packageTitle?: string;
  packageDuration?: string;
  startDate?: string; // Keep as string
  endDate?: string; // Keep as string
  pickupPoint?: string;
  maximumPerson?: number;
  minimumPerson?: number;
}

export interface PackageDetail {
  packageDetailsID: number;
  packageID: number;
  packageTitle: string;
  packageDuration: number;
  startDate: string; // Date can be used, but if backend expects string, keep it as string
  endDate: string; // Date can be used, but if backend expects string, keep it as string
  pickupPoint: string;
  maximumPerson: number;
  minimumPerson: number;
  createdAt: string; // Keep as string for compatibility
  updatedAt: string; // Keep as string for compatibility
}

export interface PackageResponse {
  $id: string;
  success: boolean;
  data: {
    $id: string;
    $values: PackageDetail[];
  };
}
