import { LocationGallery } from "./LocationGallery";

export interface LocationGalleryResponse {
    locationName: string;
    isPrimary: any;
    imageCaption: any;
    locationID: any;
    $values: boolean;
    values: LocationGallery[];
  }
