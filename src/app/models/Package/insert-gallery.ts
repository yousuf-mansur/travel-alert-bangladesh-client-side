export interface PackageGalleryInsertModel {
  imageFile: File | null; // File object for the uploaded image
  isPrimary: boolean; // To indicate if the image is primary
  imageCaption: string; // Caption for the image
  packageID: number; // ID of the package the gallery belongs to
}
