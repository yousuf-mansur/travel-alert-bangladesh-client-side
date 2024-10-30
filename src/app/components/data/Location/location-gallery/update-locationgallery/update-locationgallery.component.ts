import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { LocationGalleryService } from '../../../../../services/Location/location-gallery.service';

import { CommonModule } from '@angular/common';
import { LocationGalleryInsertModel } from '../../../../../models/Location model/LocationGalleryInsertModel';
import { LocationService } from '../../../../../services/Location/location.service';

@Component({
  selector: 'app-update-location-gallery',
  templateUrl: './update-locationgallery.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
})
export class UpdateLocationgalleryComponent implements OnInit {
  galleryForm: FormGroup;
  selectedImageFile: File | null = null;
  imagePreviewUrl: string | ArrayBuffer | null = null;
  galleryId: number;
  locationName: string = '';
  locations: { locationID: number; locationName: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private locationGalleryService: LocationGalleryService,
    private locationService: LocationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.galleryForm = this.fb.group({
      isPrimary: [false, Validators.required],
      imageCaption: ['', Validators.required],
      locationID: ['', Validators.required],
      imageFile: [null],
    });
    this.galleryId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadLocations();
    this.loadGalleryDetails();
  }

  onImageFileChange(event: any): void {
    const file = event.target.files[0];
    this.selectedImageFile = file ? file : null;
    this.galleryForm.patchValue({ imageFile: this.selectedImageFile });

    // Preview the selected image file
    if (this.selectedImageFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result !== undefined) {
          this.imagePreviewUrl = e.target.result as string | ArrayBuffer;
        }
      };
      reader.readAsDataURL(this.selectedImageFile);
    } else {
      this.imagePreviewUrl = null; // Reset preview if no file is selected
    }
  }

  loadLocations(): void {
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }

  loadGalleryDetails(): void {
    this.locationGalleryService
      .getGalleryById(this.galleryId)
      .subscribe((gallery) => {
        this.galleryForm.patchValue({
          isPrimary: gallery.isPrimary,
          imageCaption: gallery.imageCaption,
          locationID: gallery.locationID,
          imageFile: gallery.imageUrl,
        });

        // Check if locations are already loaded
        if (this.locations.length > 0) {
          this.locationName = this.loadLocationName(gallery.locationID);
        } else {
          // Load locations first, then fetch location name
          this.loadLocationsWithLocationName(gallery.locationID);
        }
      });
  }
  loadLocationName(locationID: number): string {
    const location = this.locations.find((lt) => lt.locationID === locationID);
    return location ? location.locationName : 'Unknown';
  }

  loadLocationsWithLocationName(locationID: number): void {
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations;
      this.locationName = this.loadLocationName(locationID);
    });
  }

  // onImageFileChange(event: any): void {
  //   const file = event.target.files[0];
  //   this.selectedImageFile = file ? file : null;
  //   this.galleryForm.patchValue({ imageFile: this.selectedImageFile });
  // }

  onSubmit(): void {
    if (this.galleryForm.invalid) return;

    const formValue = this.galleryForm.value;
    const model: LocationGalleryInsertModel = {
      isPrimary: formValue.isPrimary,
      imageCaption: formValue.imageCaption,
      locationID: formValue.locationID,
      imageFile: this.selectedImageFile,
    };

    console.log('Data sent to API:', model); // Check structure before submission

    this.locationGalleryService.updateGallery(this.galleryId, model).subscribe({
      next: (response: any) => {
        alert('LocationGallery Updated Successfully');
        const requestUrl = response.requestUrl;
        this.router.navigateByUrl(requestUrl);
      },
      error: (err: any) => {
        console.error('Error updating gallery', err); // Log the entire error object
        if (err.status === 400 && err.error.errors) {
          console.log('Validation errors:', err.error.errors); // Log validation errors specifically
        }
      },
    });
  }
  getLocationName(locationID: number): string {
    const location = this.locations.find(
      (loc) => loc.locationID === locationID
    );
    return location ? location.locationName : 'Unknown Location';
  }
}
