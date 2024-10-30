import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

import { LocationGalleryService } from '../../../../../services/Location/location-gallery.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LocationService } from '../../../../../services/Location/location.service';
import { LocationGalleryInsertModel } from '../../../../../models/Location model/LocationGalleryInsertModel';

@Component({
  selector: 'app-add-location-gallery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './add-location-gallery.component.html',
  styleUrls: ['./add-location-gallery.component.css'],
})
export class AddLocationGalleryComponent implements OnInit {
  galleryForm: FormGroup;
  selectedFile: File | null = null;
  imagePreviewUrl: string | ArrayBuffer | null = null;
  locations: any[] = []; // Array to hold locations
  isEditMode: boolean = false;
  editGalleryId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private locationGalleryService: LocationGalleryService,
    private locationService: LocationService,
    private navi: Router // Inject LocationService
  ) {
    this.galleryForm = this.fb.group({
      isPrimary: [false, Validators.required],
      imageCaption: ['', Validators.required],
      locationID: ['', Validators.required], // The dropdown will bind to locationID
      imageFile: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    // Fetch locations from the service
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations; // Store fetched locations
      this.loadLocations();
    });
  }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.galleryForm.patchValue({
        imageFile: this.selectedFile,
      });

      // Create an image preview URL only if selectedFile is not null
      if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviewUrl = reader.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    }
  }

  submitGallery(): void {
    if (!this.selectedFile) {
      alert('Please select an image file.');
      return;
    }

    const galleryModel: LocationGalleryInsertModel = {
      isPrimary: this.galleryForm.get('isPrimary')?.value,
      imageCaption:
        this.galleryForm.get('imageCaption')?.value?.toString() || '', // Use .toString() carefully
      locationID: this.galleryForm.get('locationID')?.value,
      imageFile: this.selectedFile,
    };

    if (this.isEditMode && this.editGalleryId) {
      this.locationGalleryService
        .updateGallery(this.editGalleryId, galleryModel)
        .subscribe(
          (res: any) => {
            alert('Gallery updated successfully');
            this.navi.navigateByUrl(res.requestUrl);
            this.resetForm();
          },
          (error) => console.error('Update failed:', error)
        );
    } else {
      this.locationGalleryService.addGallery(galleryModel).subscribe(
        (res: any) => {
          alert('Gallery added successfully');
          this.navi.navigateByUrl(res.requestUrl);
          this.resetForm();
        },
        (error) => console.error('Add failed:', error)
      );
    }
  }

  resetForm(): void {
    this.isEditMode = false;
    this.editGalleryId = null;
    this.selectedFile = null;
    this.galleryForm.reset();
  }

  loadLocations(): void {
    this.locationService.getLocations().subscribe(
      (data) => {
        this.locations = data; // Assuming the API returns an array of locations
        console.log(data);
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );
  }
}
