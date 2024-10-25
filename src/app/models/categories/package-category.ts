// package-category.ts

export interface PackageCategoryListDTO {
  packageCategoryID: number;
  categoryName: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PackageCategoryResponse {
  success: boolean;
  message: string;
  url: string;
  categories: {
    $id: string;
    $values: PackageCategoryListDTO[]; // Array of PackageCategoryListDTO
  };
}
