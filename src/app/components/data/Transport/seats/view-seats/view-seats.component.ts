import { Component, OnInit } from '@angular/core';
import { SeatsService } from '../../../../../services/Transport/seats.service';
import { Seats } from '../../../../../models/Transport/seats';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-seats',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './view-seats.component.html',
  styleUrl: './view-seats.component.css'
})
export class ViewSeatsComponent implements OnInit {
  seats: Seats[] = [];

  constructor(private seatsService: SeatsService) {}

  ngOnInit() {
    this.seatsService.getSeats().subscribe(
      (data: Seats[]) => {
        this.seats = data;
      },
      (error) => {
        console.error('Error fetching seats', error);
      }
    );
  }
}
