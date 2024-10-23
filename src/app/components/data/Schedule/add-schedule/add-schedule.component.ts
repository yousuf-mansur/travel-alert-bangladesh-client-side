import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScheduleService } from '../../../../services/Schedule/schedule.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-schedule.component.html',
  styleUrl: './add-schedule.component.css'
})
export class AddScheduleComponent implements OnInit {
  scheduleForm: FormGroup;

  constructor(private fb: FormBuilder, private scheduleService: ScheduleService, private route : ActivatedRoute) {
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
 packId : number = 0;
 schedules: any[] = [];

  ngOnInit(): void {
    this.packId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSchedules()
  }

  onSubmit(): void {
   
      // Set the packageID field with the current packId
      this.scheduleForm.patchValue({
        packageID: this.packId
      });
  
      this.scheduleService.addSchedule(this.scheduleForm.value, this.packId).subscribe(response => {
        console.log('Schedule added successfully', response);
        // Optionally, reset the form or perform additional actions here
        this.scheduleForm.reset();
        this.loadSchedules();
      }, error => {
        console.error('Error adding schedule', error);
      });
    
  }
  


  loadSchedules(): void {
    this.scheduleService.getSchedulesByPackageID(this.packId).subscribe(response => {
      this.schedules = response.data.$values;
    }, error => {
      console.error('Error fetching schedules', error);
    });
  }



}