import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TransportationService } from '../../../../../services/Transport/transportation-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-transportation',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './delete-transportation.component.html',
  styleUrl: './delete-transportation.component.css'
})
export class DeleteTransportationComponent {
  @Input() transportationId: number = 0; // Input from the parent component
  @Output() deleteSuccess = new EventEmitter<void>(); // Emit event when delete is successful

  constructor(private transportationService: TransportationService) {}

  deleteTransportation() {
    if (this.transportationId && confirm('Are you sure you want to delete this transportation?')) {
      this.transportationService.deleteTransportation(this.transportationId).subscribe({
        next: (res: any) => {
          if (res.success) {
            alert('Transportation deleted successfully.');
            this.deleteSuccess.emit(); // Emit event to notify parent component
          } else {
            alert('Failed to delete transportation.');
          }
        },
        error: (error) => {
          console.error('Error deleting transportation:', error);
          alert('Failed to delete transportation.');
        }
      });
    } else {
      alert('Invalid transportation ID.');
    }
  }
}
