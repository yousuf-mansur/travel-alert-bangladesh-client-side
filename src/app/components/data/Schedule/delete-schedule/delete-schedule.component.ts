import { Component } from '@angular/core';
import { ScheduleService } from '../../../../services/Schedule/schedule.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './delete-schedule.component.html',
  styleUrl: './delete-schedule.component.css'
})
export class DeleteScheduleComponent {
  constructor(private scheduleService: ScheduleService) {}

  deleteSchedule(scheduleID: number): void {
    this.scheduleService.deleteSchedule(scheduleID).subscribe(response => {
      console.log('Schedule deleted successfully', response);
    }, error => {
      console.error('Error deleting schedule', error);
    });
  }
}