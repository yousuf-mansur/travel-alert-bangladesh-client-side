import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeatsService } from '../../../../../services/Transport/seats.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-seats',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './delete-seats.component.html',
  styleUrl: './delete-seats.component.css'
})
export class DeleteSeatsComponent implements OnInit {
  id!: number;
  deletionSuccess: boolean = false;
  deletionError: boolean = false;

  constructor(private seatsService: SeatsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  onDelete() {
    this.seatsService.deleteSeats(this.id).subscribe(
      (response) => {
        this.deletionSuccess = true;
        this.deletionError = false;
        console.log('Seat deleted successfully', response);
      },
      (error) => {
        this.deletionError = true;
        this.deletionSuccess = false;
        console.error('Error deleting seat', error);
      }
    );
  }
}

