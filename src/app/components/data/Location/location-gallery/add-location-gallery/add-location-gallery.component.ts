import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LocationGalleryService } from '../../../../../services/Location/location-gallery.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LocationService } from '../../../../../services/Location/location.service';
import { LocationGalleryInsertModel } from '../../../../../models/Location model/LocationGalleryInsertModel';


@Component({
  selector: 'app-add-location-gallery',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './add-location-gallery.component.html',
  styleUrls: ['./add-location-gallery.component.css']

})
export class AddLocationGalleryComponent implements OnInit {
  galleryForm: FormGroup;
  selectedFile: File | null = null;
  locations: any[] = []; // Array to hold locations
  isEditMode: boolean = false;
  editGalleryId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private locationGalleryService: LocationGalleryService,
    private locationService: LocationService,
    private navi:Router // Inject LocationService
  ) {
    this.galleryForm = this.fb.group({
      isPrimary: [false, Validators.required],
      imageCaption: ['', Validators.required],
      locationID: [null, Validators.required], // The dropdown will bind to locationID
      imageFile: [null, Validators.required]
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
        imageFile: this.selectedFile
      });
    }
  }

  submitGallery(): void {
    const galleryModel: LocationGalleryInsertModel = {
      isPrimary: this.galleryForm.get('isPrimary')?.value,
      imageCaption: this.galleryForm.get('imageCaption')?.value,
      locationID: this.galleryForm.get('locationID')?.value, // Location ID will be submitted
      imageFile: this.selectedFile
    };

    if (this.isEditMode && this.editGalleryId) {
      // Update existing gallery
      this.locationGalleryService.updateGallery(this.editGalleryId, galleryModel).subscribe((res:any) => {
        alert('Gallery updated successfully');
        console.log(res);
        this.navi.navigateByUrl(res.requestUrl)
        this.resetForm();
      });
    } else {
      // Add new gallery
      this.locationGalleryService.addGallery(galleryModel).subscribe((res:any) => {
        alert('Gallery added successfully');
        this.resetForm();
        this.navi.navigateByUrl(res.requestUrl)
      });
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
        this.locations = data['$values']; // Assuming the API returns an array of locations
        console.log(data);
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );
  }
}