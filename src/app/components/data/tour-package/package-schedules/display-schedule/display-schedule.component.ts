import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // For route parameters
import { Router } from '@angular/router'; // For navigation

import { NgFor, NgIf } from '@angular/common';
import { Schedule } from '../../../../../models/Package/schedules';
import { PackageSchedulesService } from '../../../../../services/schedules/package-schedules.service';

@Component({
  selector: 'app-display-schedule',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './display-schedule.component.html',
  styleUrls: ['./display-schedule.component.css'],
})
export class DisplayScheduleComponent implements OnInit {
  schedules: Schedule[] = [];
  packageTitle: string = '';
  packageId: number = 0; // Declare packageId here

  constructor(
    private router: Router, // Inject Router service
    private route: ActivatedRoute, // Inject ActivatedRoute service
    private packageSchedulesService: PackageSchedulesService // Inject your service
  ) {}

  ngOnInit(): void {
    const packageId = this.route.snapshot.paramMap.get('packageId');
    if (packageId) {
      this.packageId = +packageId; // Store the packageId and convert to number
      this.loadSchedules(); // Call the method to load schedules based on packageId
    } else {
      console.error('No package ID found in route parameters.');
    }
  }

  loadSchedules(): void {
    this.packageSchedulesService
      .getSchedulesByPackageId(this.packageId)
      .subscribe({
        next: (response) => {
          console.log('API Response:', response); // Check the response in the console
          if (response.success) {
            this.packageTitle = response.packageTitle;
            this.schedules = response.data.$values; // Access the $values array
            console.log('Schedules:', this.schedules); // Log schedules
          } else {
          }
        },
        error: (error) => {
          console.error('Error loading schedules:', error);
        },
      });
  }

  // Method to navigate to the edit schedule page
  editSchedule(scheduleID: number): void {
    this.router.navigate(['/edit/schedule', scheduleID]);
  }

  // Method to delete a schedule
  deleteSchedule(scheduleID: number): void {
    if (confirm('Are you sure you want to delete this schedule?')) {
      this.packageSchedulesService.deleteSchedule(scheduleID).subscribe({
        next: (response) => {
          if (response.success) {
            alert('Schedule deleted successfully');
            this.loadSchedules(); // Reload the schedules
          } else {
            alert('Failed to delete schedule');
          }
        },
        error: (error) => {
          console.error('Error deleting schedule:', error);
          alert('An error occurred while deleting the schedule');
        },
      });
    }
  }
}
