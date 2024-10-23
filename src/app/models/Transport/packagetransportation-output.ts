export interface PackagetransportationOutput {
  $id: string;
  success: boolean;
  transportationItems: {
    $id: string;
    $values: TransportationItem[];
  };
}
export interface TransportationItem {
  $id: string;
  packageTransportationID: number;
  packageID: number;
  transportationTypeID: number;
  transportationCatagoryID: number;
  transportationID: number;
  seatBooked: number;
  packageTransportationDescription: string;
  perHeadTransportCost: number;
  itemTransportTotalCost: number;
  package: any; // You can change 'any' to the actual 'Package' interface if available
  transportation: any; // You can change 'any' to the actual 'Transportation' interface if available
  transportationType: any; // You can change 'any' to the actual 'TransportationType' interface if available
  transportationCatagory: any; // You can change 'any' to the actual 'TransportationCatagory' interface if available
  seats: {
    $id: string;
    $values: any[]; // You can define the interface for seats if necessary
  };
}
