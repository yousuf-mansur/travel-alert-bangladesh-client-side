import { Component, OnInit } from '@angular/core';
import { TransportProviderService } from '../../../../../services/Transport/transport-provider.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-transport-provider',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './delete-transport-provider.component.html',
  styleUrl: './delete-transport-provider.component.css'
})
export class DeleteTransportProviderComponent implements OnInit {
  id: number | null = null; // Initialize to null

  constructor(
    private providerService: TransportProviderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = parseInt(idParam, 10);
        if (isNaN(this.id)) {
          console.error('Invalid ID parameter');
          this.router.navigate(['/transportation-types']); // Redirect if ID is invalid
        }
      } else {
        console.error('ID parameter not found');
        this.router.navigate(['/transportation-types']); // Redirect if ID is not found
      }
    });
  }

  deleteProvider() {
    if (this.id !== null) { // Check if ID is valid
      const confirmation = confirm('Are you sure you want to delete this transport provider?');
      if (confirmation) {
        this.providerService.deleteProvider(this.id).subscribe(() => {
          alert('Transport provider deleted successfully.');
          this.router.navigate(['/']);
        });
      }
    } else {
      alert('Unable to delete: Invalid provider ID.');
    }
  }
}