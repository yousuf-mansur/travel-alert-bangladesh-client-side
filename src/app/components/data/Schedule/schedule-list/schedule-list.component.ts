import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../../../services/Schedule/schedule.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-schedule-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, JsonPipe],
  templateUrl: './schedule-list.component.html',
  styleUrl: './schedule-list.component.css'
})
export class ScheduleListComponent implements OnInit {
  schedules: any[] = [];
  packageID: number = 1; 

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.loadSchedules();
  }

  deleteSchedule(scheduleID: number): void {
    this.scheduleService.deleteSchedule(scheduleID).subscribe(response => {
      console.log('Schedule deleted successfully', response);
    }, error => {
      console.error('Error deleting schedule', error);
    });
  }

  loadSchedules(): void {
    this.scheduleService.getSchedulesByPackageID(this.packageID).subscribe(response => {
      this.schedules = response.data.$values;
    }, error => {
      console.error('Error fetching schedules', error);
    });
  }
}
