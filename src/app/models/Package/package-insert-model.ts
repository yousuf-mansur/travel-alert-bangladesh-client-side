// package-insert.model.ts
export interface PackageInsertModel {
    packageTitle: string;
    packageDescription: string;
    isAvailable: boolean;
    packageCategoryID: number;
    packageSubCategoryID?: number; // Optional
}
