import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransportationTypeOutputModel } from '../../../../../models/Transport/transportation-type-output-model';
import { TransportationTypeService } from '../../../../../services/Transport/transportation-type.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-transportation-type',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './view-transportation-type.component.html',
  styleUrls: ['./view-transportation-type.component.css'] // Corrected here
})
export class ViewTransportationTypesComponent implements OnInit {
  types: TransportationTypeOutputModel[] = [];

  constructor(private service: TransportationTypeService) { }

  ngOnInit(): void {
    this.loadTypes();
  }

  loadTypes() {
    this.service.getAllTypes().subscribe({
      next: (response:any)=> {
        if (response.success) {
          this.types = response.data.$values;
          console.log(response)
        }
      },
      error: error => {
        console.error('Error fetching transportation types');
        // Add user feedback here if necessary
      }
    });
  }
}
