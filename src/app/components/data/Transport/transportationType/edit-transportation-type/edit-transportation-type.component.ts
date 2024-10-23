import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransportationTypeService } from '../../../../../services/Transport/transportation-type.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TransportationTypeOutputModel } from '../../../../../models/Transport/transportation-type-output-model';

@Component({
  selector: 'app-edit-transportation-type',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './edit-transportation-type.component.html',
  styleUrls: ['./edit-transportation-type.component.css'] // Corrected here
})
// export class EditTransportationTypeComponent implements OnInit {
//   transportationType: TransportationTypeOutputModel = { typeName: '' };  // Default initialization
//   transportationTypeID: number | null = null;

//   constructor(
//     private service: TransportationTypeService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.transportationTypeID = Number(this.route.snapshot.paramMap.get('id'));
//     if (this.transportationTypeID) {
//       this.loadTransportationType();
//     }
//   }

//   loadTransportationType(): void {
//     this.service.getTypeById(this.transportationTypeID as number).subscribe({
//       next: (response: any) => {
//         if (response.success) {
//           this.transportationType = response.data;
//         } else {
//           console.error('Error fetching transportation type:', response.message);
//         }
//       },
//       error: () => {
//         console.error('Error fetching transportation type');
//       }
//     });
//   }

//   saveChanges(): void {
//     if (this.transportationType) {
//       this.service.updateType(this.transportationTypeID as number, this.transportationType).subscribe({
//         next: () => {
//           this.router.navigate(['/view-transportation-type']);
//         },
//         error: (err) => {
//           console.error('Error updating transportation type:', err);
//           alert('Failed to update transportation type. Please try again.');
//         }
//       });
//     }
//   }
// }


export class EditTransportationTypeComponent implements OnInit {
  transportationType: TransportationTypeOutputModel = { typeName: '' };  // Default initialization
  transportationTypeID: number | null = null;

  constructor(
    private service: TransportationTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.transportationTypeID = Number(this.route.snapshot.paramMap.get('id'));
    if (this.transportationTypeID) {
      this.loadTransportationType();
    } else {
      console.error('Invalid ID provided');
    }
  }

  loadTransportationType(): void {
    this.service.getTypeById(this.transportationTypeID as number).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.transportationType = response.data; // Ensure this matches your API response structure
        } else {
          console.error('Error fetching transportation type:', response.message);
        }
      },
      error: (err) => {
        console.error('Error fetching transportation type:', err);
        alert('Failed to load transportation type. Please try again.');
      }
    });
  }

  saveChanges(): void {
    if (this.transportationTypeID) {
      this.service.updateType(this.transportationTypeID as number, this.transportationType).subscribe({
        next: () => {
          alert('Transportation type updated successfully.');
          this.router.navigate(['/transportation-types']);
        },
        error: (err) => {
          console.error('Error updating transportation type:', err);
          alert('Failed to update transportation type. Please try again.');
        }
      });
    }
  }
}