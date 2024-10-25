import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../../../services/packages/package.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-package-display',
  standalone: true, // This indicates that the component is standalone
  templateUrl: './show-packages.component.html',
  styleUrls: ['./show-packages.component.css'],
  imports: [CommonModule, RouterModule], // Make sure CommonModule is included here
})
export class PackageDisplayComponent implements OnInit {
  packages: any[] = []; // Array to hold packages
  errorMessage: string | null = null; // Variable for error messages

  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.loadAllPackages(); // Load packages on initialization
  }

  loadAllPackages(): void {
    this.packageService.getAllPackages().subscribe({
      next: (response) => {
        if (response.success) {
          this.packages = response.data; // Assign packages data
        } else {
          this.errorMessage = response.message;
        }
      },
      error: (err) => {
        console.error('Error fetching packages', err);
        this.errorMessage = 'An error occurred while fetching packages.'; // Set error message
      },
    });
  }
}
