import { Component } from '@angular/core';
import { TransportProviderInputModel } from '../../../../../models/Transport/transport-provider-input-model';
import { TransportProviderService } from '../../../../../services/Transport/transport-provider.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-transport-provider',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-transport-provider.component.html',
  styleUrl: './add-transport-provider.component.css'
})
export class AddTransportProviderComponent {
  provider: TransportProviderInputModel = {
    name: '',
    companyName: '',
    contactNumber: '',
    address: '',
    isVerified: false
  };

  constructor(private providerService: TransportProviderService, private router: Router) { }

  addProvider() {
    this.providerService.addProvider(this.provider).subscribe(() => {
      alert('Transport provider added successfully.');
      this.router.navigate(['/transport-providers']);
    });
  }
}
