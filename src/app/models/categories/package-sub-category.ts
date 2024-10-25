export interface PackageSubCategory {
  packageSubCategoryID: number;
  subCategoryName: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  packageCategoryID: number;
}

export interface PackageSubCategoryInsertModel {
  packageCategoryID: number;
  subCategoryName: string;
  description: string;
}
