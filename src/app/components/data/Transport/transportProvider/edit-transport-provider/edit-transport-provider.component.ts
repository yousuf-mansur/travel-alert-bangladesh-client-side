import { Component, OnInit } from '@angular/core';
import { TransportProviderInputModel } from '../../../../../models/Transport/transport-provider-input-model';
import { TransportProviderService } from '../../../../../services/Transport/transport-provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-transport-provider',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-transport-provider.component.html',
  styleUrl: './edit-transport-provider.component.css'
})
// export class EditTransportProviderComponent implements OnInit {
//   provider: TransportProviderInputModel = {
//     name: '',
//     companyName: '',
//     contactNumber: '',
//     address: '',
//     isVerified: false
//   };

//   id: number | null = null; // Handle undefined or missing values

//   constructor(
//     private providerService: TransportProviderService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     // Get the ID from the route and handle it properly
//     this.route.paramMap.subscribe(params => {
//       const idParam = params.get('id');
//       if (idParam) {
//         this.id = parseInt(idParam, 10);
//         this.loadProvider();
//       } else {
//         console.error('Invalid or missing provider ID');
//         // You could redirect or handle the missing ID here
//       }
//     });
//   }

//   loadProvider() {
//     if (this.id !== null) {
//       this.providerService.getProviderById(this.id).subscribe(response => {
//         // Adjust this to your response structure
//         if (response && response.data && response.data.$values) {
//           this.provider = response.data.$values[0];
//           console.log('Loaded provider:', this.provider);
//         } else {
//           console.error('Invalid provider data', response);
//         }
//       }, error => {
//         console.error('Error loading provider:', error);
//       });
//     }
//   }

//   updateProvider() {
//     if (this.id !== null) {
//       this.providerService.updateProvider(this.id, this.provider).subscribe(() => {
//         alert('Transport provider updated successfully.');
//         this.router.navigate(['/transport-providers']);
//       }, error => {
//         console.error('Error updating provider:', error);
//       });
//     }
//   }
// }
export class EditTransportProviderComponent implements OnInit {
  provider: TransportProviderInputModel = {
    name: '',
    companyName: '',
    contactNumber: '',
    address: '',
    isVerified: false
  };

  id: number | null = null; // Handle undefined or missing values

  constructor(
    private providerService: TransportProviderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the ID from the route and handle it properly
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = parseInt(idParam, 10);
        this.loadProvider();
      } else {
        console.error('Invalid or missing provider ID');
        // You could redirect or handle the missing ID here
      }
    });
  }

  loadProvider() {
    if (this.id !== null) {
      this.providerService.getProviderById(this.id).subscribe((response:any) => {
     
        
        this.provider = response.data
       
        

        // if (response && response.data && response.data.$values) {
        //   this.provider = response.data.$values[0];
        //   console.log('Loaded provider:', this.provider);
        // } else {
        //   console.error('Invalid provider data', response);
        // }

      }, error => {
        console.error('Error loading provider:', error);
      });
    }
  }

  updateProvider() {
    if (this.id !== null) {
      this.providerService.updateProvider(this.id, this.provider).subscribe(() => {
        alert('Transport provider updated successfully.');
        this.router.navigate(['/transport-providers']);
      }, error => {
        console.error('Error updating provider:', error);
      });
    }
  }
}