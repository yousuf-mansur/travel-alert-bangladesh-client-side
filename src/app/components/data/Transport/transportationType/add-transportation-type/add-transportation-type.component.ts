import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransportationTypeInsertModel } from '../../../../../models/Transport/transportation-type-insert-model';
import { TransportationTypeService } from '../../../../../services/Transport/transportation-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-transportation-type',
  standalone: true,
  imports: [CommonModule,FormsModule,JsonPipe],
  templateUrl: './add-transportation-type.component.html',
  styleUrl: './add-transportation-type.component.css'
})
export class AddTransportationTypeComponent {
  model: TransportationTypeInsertModel = { typeName: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: TransportationTypeService, private router: Router) { }

  addTransportationType() {
    this.service.addType(this.model).subscribe({
      next: response => {
        if (response.success) {
          this.successMessage = response.message;
          this.router.navigateByUrl(`/${response.url}`); // Navigate to list view after adding
        }
      },
      error: error => {
        this.errorMessage = "Error occurred while adding the transportation type.";
      }
    });
  }
}