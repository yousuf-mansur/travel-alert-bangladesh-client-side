import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TransportationTypeService } from '../../../../../services/Transport/transportation-type.service';

@Component({
  selector: 'app-delete-transportation-type',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './delete-transportation-type.component.html',
  styleUrl: './delete-transportation-type.component.css'
})
export class DeleteTransportationTypeComponent implements OnInit {
  id: number;
  typeName: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: TransportationTypeService,
    private router: Router
  ) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadTransportationType();
  }

  loadTransportationType() {
    this.service.getTypeById(this.id).subscribe({
      next: response => {
        if (response.success) {
          this.typeName = response.data.typeName;
        }
      },
      error: error => {
        this.errorMessage = "Error loading transportation type.";
      }
    });
  }

  deleteTransportationType() {
    this.service.deleteType(this.id).subscribe({
      next: response => {
        this.successMessage = response.message;
        this.router.navigate(['/transportation-types']);
      },
      error: error => {
        this.errorMessage = "Error deleting transportation type.";
      }
    });
  }
}
