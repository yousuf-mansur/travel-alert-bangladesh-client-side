import { Component, OnInit } from '@angular/core';
import { TransportProviderOutputModel } from '../../../../../models/Transport/transport-provider-output-model';
import { TransportProviderService } from '../../../../../services/Transport/transport-provider.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-transport-provider',
  standalone: true,
  imports: [CommonModule,FormsModule,JsonPipe,RouterLink],
  templateUrl: './view-transport-provider.component.html',
  styleUrl: './view-transport-provider.component.css'
})
export class ViewTransportProvidersComponent implements OnInit {
  providers: TransportProviderOutputModel[] = [];

  constructor(private providerService: TransportProviderService,private router:Router) { }

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders() {
    this.providerService.getAllProviders().subscribe({
      next: (response: any) => {
        if (response.success) {
          this.providers = response.data.$values; // Adjust if your structure differs
        } else {
          console.error('Failed to load providers:', response.message);
          // Optionally, show user feedback
        }
      },
      error: (error) => {
        console.error('Error fetching providers:', error);
        // Add user feedback here if necessary
      }
    });
  }


  editProvider(providerID: number) {
    this.router.navigate(['/transport-provider/edit', providerID]);
  }

  // Delete method
  deleteProvider(providerID: number) {
    if (confirm('Are you sure you want to delete this provider?')) {
      this.providerService.deleteProvider(providerID).subscribe({
        next: () => {
          alert('Provider deleted successfully');
          this.loadProviders(); // Refresh the list
        },
        error: (error) => {
          console.error('Error deleting provider:', error);
          alert('Failed to delete the provider');
        }
      });
    }
  }
}
