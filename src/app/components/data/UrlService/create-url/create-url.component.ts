import { Component, OnInit } from '@angular/core';
import { CurrentUrl, RequestUrl } from '../../../../models/UrlService/url-service-dto';
import { UrlServiceService } from '../../../../services/UrlService/url-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-url',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-url.component.html',
  styleUrl: './create-url.component.css'
})
export class CreateUrlComponent implements OnInit {
  requestUrls: RequestUrl[] = [];
  currentUrls: CurrentUrl[] = [];

  selectedRequestUrlId: number | null = null;
  selectedCurrentUrlId: number | null = null;
  description: string = ''; // Added property for description

  constructor(private urlService: UrlServiceService, private router: Router) {}

  ngOnInit(): void {
      this.loadRequestUrls();
      this.loadCurrentUrls();
  }

  loadRequestUrls(): void {
      this.urlService.getAllRequestUrls().subscribe(
          (data:any) => {
              this.requestUrls = data.$values;
              console.log(data);
              
          },
          (error) => {
              console.error('Error fetching request URLs:', error);
          }
      );
  }

  loadCurrentUrls(): void {
      this.urlService.getAllCurrentUrls().subscribe(
          (data:any) => {
              this.currentUrls = data.$values;
              console.log(data);
          },
          (error) => {
              console.error('Error fetching current URLs:', error);
          }
      );
  }

  // Handle submission of the form
  onSubmit(): void {
      // Ensure that selected IDs are valid numbers
      if (this.selectedRequestUrlId === null || this.selectedCurrentUrlId === null) {
          console.error('Both Request URL and Current URL must be selected.');
          return; // Prevent form submission if IDs are null
      }

      const newUrlService = {
          requestUrlId: this.selectedRequestUrlId,
          currentUrlId: this.selectedCurrentUrlId,
          description: this.description || '' // Optional description
      };

      this.urlService.createUrlService(newUrlService).subscribe(
          () => {
              console.log('URL Service created successfully.');
              alert('success')
              this.router.navigate(['/url/list']); // Redirect after success
          },
          (error) => {
              console.error('Error creating URL Service:', error);
          }
      );
  }
}