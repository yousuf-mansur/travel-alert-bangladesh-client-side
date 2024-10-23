import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { TransportationService } from '../../../../../services/Transport/transportation-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-transportation',
  standalone: true,
  imports: [ CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './edit-transportation.component.html',
  styleUrl: './edit-transportation.component.css'
})
export class EditTransportationComponent implements OnInit {
  
  editForm: FormGroup;
  id!: number;  // Ensure this is initialized later

  constructor(
    private fb: FormBuilder,
    private transportationService: TransportationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Initialize the form with form controls
    this.editForm = this.fb.group({
      isActive: [false, Validators.required],
      transportProviderID: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Get the id from the route parameters
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id')!;  // Convert the 'id' to a number
      this.loadTransportationData();  // Load the transportation details for this id
    });
  }

  loadTransportationData() {
    // Fetch the transportation details using the id
    this.transportationService.getTransportationById(this.id).subscribe((data: any) => {
      // Update the form with the fetched data
      this.editForm.setValue({
        isActive: data.isActive,
        transportProviderID: data.transportProviderID,
        description: data.description,
      });
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      // Call the update service method
      this.transportationService.updateTransportation(this.id, this.editForm.value).subscribe((res: any) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        alert('Transportation Edit successfully!');
        this.router.navigateByUrl(res.requestUrl);
          
      
      
      });
    }
  }
}
