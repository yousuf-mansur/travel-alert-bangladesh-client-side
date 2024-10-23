import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScheduleService } from '../../../../services/Schedule/schedule.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-schedule',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule ],
  templateUrl: './update-schedule.component.html',
  styleUrl: './update-schedule.component.css'
})
export class UpdateScheduleComponent implements OnInit {
  scheduleForm: FormGroup;
  scheduleID: any;

  constructor(private fb: FormBuilder, private scheduleService: ScheduleService, private route: ActivatedRoute) {
    this.scheduleForm = this.fb.group({
      tourVoucherID: [null, Validators.required],
      scheduleTitle: ['', Validators.required],
      scheduleDescription: [''],
      packageID: [null, Validators.required],
      dayNumber: [null, Validators.required],
      tentativeTime: ['', Validators.required],
      actualTime: [''],
      tentativeCost: [null, Validators.required],
      actualCost: [''],
      dayCostCategoryID: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.scheduleID = +this.route.snapshot.paramMap.get('id')!;
    this.loadSchedule();
  }

  loadSchedule(): void {
    this.scheduleService.getScheduleById(1, this.scheduleID).subscribe(response => {
      this.scheduleForm.patchValue(response.data);
    });
  }

  onSubmit(): void {
    if (this.scheduleForm.valid) {
      this.scheduleService.updateSchedule(this.scheduleID, this.scheduleForm.value).subscribe(response => {
        console.log('Schedule updated successfully', response);
      });
    }
  }
}
