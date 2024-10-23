import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Seats } from '../../../../../models/Transport/seats';
import { SeatsService } from '../../../../../services/Transport/seats.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-seats',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-seats.component.html',
  styleUrl: './edit-seats.component.css'
})
export class EditSeatsComponent implements OnInit {
  seat: Seats = { seatsNumber: '', packageTransportationID: 0 };
  id!: number;

  constructor(private seatsService: SeatsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.seatsService.getSeatsById(this.id).subscribe(
      (data: Seats) => {
        this.seat = data;
      },
      (error) => {
        console.error('Error fetching seat details', error);
      }
    );
  }

  onSubmit() {
    this.seatsService.updateSeats(this.id, this.seat).subscribe(
      (response) => {
        console.log('Seat updated successfully', response);
      },
      (error) => {
        console.error('Error updating seat', error);
      }
    );
  }
}
