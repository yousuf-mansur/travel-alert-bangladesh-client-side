import { Transportation } from "./transportation";

export interface TransportProvider {
  name: string;
  companyName: string;
  contactNumber: string;
  address: string;
  isVerified: boolean;

}
