export interface TransportProviderOutputModel {
  transportProviderID: number;
  name: string;
  companyName: string;
  contactNumber: string;
  address: string;
  isVerified: boolean;
}
export interface ApiResponse {
  success: boolean;
  data: {
    $id: string;
    $values: TransportProviderOutputModel[];
  };
}
