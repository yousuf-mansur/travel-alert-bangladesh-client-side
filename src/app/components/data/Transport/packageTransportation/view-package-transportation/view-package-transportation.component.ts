import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransportationItem } from '../../../../../models/Transport/packagetransportation-output';
import { PackageTransportationService } from '../../../../../services/Transport/package-transportation.service';

@Component({
  selector: 'app-view-package-transportation',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-package-transportation.component.html',
  styleUrl: './view-package-transportation.component.css'
})
// export class ViewPackageTransportationComponent implements OnInit {
//   transportationItems: TransportationItem[] = [];
//   packageID: number = 1; // Example value, you may change it as needed

//   constructor(private packageTransportationService: PackageTransportationService) {}

//   ngOnInit(): void {
//     this.getPackageTransportation();
//   }

//   getPackageTransportation() {
//     this.packageTransportationService.getPackageTransportation(this.packageID).subscribe(
//       (response) => {
//         if (response.success) {
//           this.transportationItems = response.transportationItems.$values;
//         }
//       },
//       (error) => {
//         console.error('Error fetching transportation items', error);
//       }
//     );
//   }
// }
export class ViewPackageTransportationComponent implements OnInit {
  transportationItems: TransportationItem[] = [];
  newTransportationItem: TransportationItem = {
    $id: '',
  packageTransportationID: 0,
  packageID: 0,
  transportationTypeID: 0,
  transportationCatagoryID: 0,
  transportationID: 0,
  seatBooked: 0,
  packageTransportationDescription: '',
  perHeadTransportCost: 0,
  itemTransportTotalCost: 0,
  package: undefined, // Optional fields can be set to undefined initially
  transportation: undefined, 
  transportationType: undefined, 
  transportationCatagory: undefined, 
  seats: {
    $id: '',
    $values: [] // Assuming 'Seat' will be an array of seat objects
  }
  };

  packageID: number = 0;

  constructor(private packageTransportationService: PackageTransportationService) {}

  ngOnInit(): void {
    // The function will be called later with the input value
  }

  getPackageTransportation(packageIdInputValue: string): void {
    const packageId = parseInt(packageIdInputValue); // Convert the input value to number
    if (!isNaN(packageId)) {
      this.packageTransportationService.getPackageTransportationById(packageId).subscribe(
        (response:any) => {
          console.log('Transportation items response:', response);
          if (response.success) {
            this.transportationItems = response.transportationItems.$values;
          }
        },
        (error) => {
          console.error('Error fetching transportation items', error);
        }
      );
    } else {
      console.error('Invalid Package ID');
    }
  }
}
