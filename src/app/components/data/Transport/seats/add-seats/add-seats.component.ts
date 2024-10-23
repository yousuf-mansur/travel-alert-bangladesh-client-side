import { Component } from '@angular/core';
import { Seats } from '../../../../../models/Transport/seats';
import { SeatsService } from '../../../../../services/Transport/seats.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-seats',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-seats.component.html',
  styleUrl: './add-seats.component.css'
})
export class AddSeatsComponent {
  seat: Seats = { seatsNumber: '', packageTransportationID: 0 };

  constructor(private seatsService: SeatsService) {}

  onSubmit() {
    this.seatsService.createSeats(this.seat).subscribe(
      (response) => {
        console.log('Seat added successfully', response);
      },
      (error) => {
        console.error('Error adding seat', error);
      }
    );
  }
}
