export interface LocationGalleryInsertModel {
    isPrimary: boolean;
    imageCaption: string;
    locationID: number;
    imageFile: File|null;
  }