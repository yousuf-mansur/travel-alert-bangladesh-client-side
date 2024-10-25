import { PackageGalleries } from './package-galleries';

export interface PackageGalleryResponse {
  success: boolean;
  packageId: number;
  packageTitle: string;
  images: PackageGalleries[]; // Direct array instead of nested object
}

// import { PackageGalleries } from './package-galleries';

// export interface PackageGalleryResponse {
//   success: boolean;
//   packageId: number;
//   packageTitle: string;
//   images: {
//     $id: string;
//     $values: PackageGalleries[];
//   };
// }
