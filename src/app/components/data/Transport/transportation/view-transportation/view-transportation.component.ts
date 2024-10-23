import { Component, OnInit } from '@angular/core';
import { TransportationOutputModel } from '../../../../../models/Transport/transportation-output-model';
import { TransportationService } from '../../../../../services/Transport/transportation-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-transportation',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './view-transportation.component.html',
  styleUrl: './view-transportation.component.css'
})
export class ViewTransportationComponent implements OnInit {
  transportations: TransportationOutputModel[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private transportationService: TransportationService) {}

  ngOnInit(): void {
    this.getAllTransportations();
  }

  getAllTransportations() {
    this.isLoading = true;
    this.errorMessage = '';

    this.transportationService.getAllTransportations().subscribe({
      next: (response: any) => {
     console.log(response);
     
        this.transportations = response.$values || [];
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = `Failed to fetch transportations: ${error.message}`;
        this.isLoading = false;
        console.error('Error fetching transportations:', error);
      }
    });
  }
     // Call the delete component when delete is requested
  deleteTransportation(id: number) {
    if (confirm('Are you sure you want to delete this transportation?')) {
      this.transportationService.deleteTransportation(id).subscribe({
        next: () => {
          this.transportations = this.transportations.filter(t => t.transportProviderID !== id);
          alert('Transportation deleted successfully.');
        },
        error: (error) => {
          this.errorMessage = `Failed to delete transportation: ${error.message}`;
          console.error('Error deleting transportation:', error);
        }
      });
    }
  }
  
  
  
}
