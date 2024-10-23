import { Component } from '@angular/core';
import { TransportationService } from '../../../../../services/Transport/transportation-services.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransportationInputModel } from '../../../../../models/Transport/transportation-input-model';

@Component({
  selector: 'app-add-transportation',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './add-transportation.component.html',
  styleUrl: './add-transportation.component.css'
})
export class AddTransportationComponent {
  isActive: boolean = true;
  transportProviderID: number | null = null;
  description: string = '';

  constructor(private transportService: TransportationService, private router: Router) {}

  onSubmit(): void {
    const transportData: TransportationInputModel = {
      isActive: this.isActive,
      transportProviderID: this.transportProviderID!,
      description: this.description
    };

    this.transportService.createTransport(transportData).subscribe((res: any) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      alert('Transportation added successfully!');
      this.router.navigateByUrl(res.requestUrl);
        
    
    
    });
  }

  
}