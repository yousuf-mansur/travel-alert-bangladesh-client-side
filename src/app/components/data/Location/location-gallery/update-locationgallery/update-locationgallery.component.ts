import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LocationGalleryService } from '../../../../../services/Location/location-gallery.service';

import { CommonModule } from '@angular/common';
import { LocationGalleryInsertModel } from '../../../../../models/Location model/LocationGalleryInsertModel';

@Component({
  selector: 'app-update-location-gallery',
  templateUrl: './update-locationgallery.component.html',
  standalone:true,
  imports:[FormsModule,ReactiveFormsModule,CommonModule]
})
export class UpdateLocationgalleryComponent implements OnInit {
  galleryForm: FormGroup;
  selectedImageFile: File | null = null;
  galleryId: number;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationGalleryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.galleryForm = this.fb.group({
      isPrimary: [false, Validators.required],
      imageCaption: ['', Validators.required],
      locationID: ['', Validators.required],
      imageFile: [null]
    });

    this.galleryId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadGalleryDetails();
  }

  loadGalleryDetails(): void {

    this.locationService.getGalleriesByLocationId(this.galleryId).subscribe((gallery) => {
      this.galleryForm.patchValue({
        isPrimary: gallery.isPrimary,
        imageCaption: gallery.imageCaption,
        locationID: gallery.locationID
      });
    });
  }

  onImageFileChange(event: any): void {
    const file = event.target.files[0];
    this.selectedImageFile = file ? file : null;
    this.galleryForm.patchValue({ imageFile: this.selectedImageFile });
  }

  onSubmit(): void {
    if (this.galleryForm.invalid) return;
  
    const formValue = this.galleryForm.value;
    const model: LocationGalleryInsertModel = {
      isPrimary: formValue.isPrimary,
      imageCaption: formValue.imageCaption,
      locationID: formValue.locationID,
      imageFile: this.selectedImageFile
    };
  
    this.locationService.updateGallery(this.galleryId, model).subscribe({
      next: (response: any) => {
        alert('LocationGallery Updated Successfully');
        // Navigate using the requestUrl from the response
        const requestUrl = response.requestUrl;
        this.router.navigateByUrl(requestUrl);
      },
      error: (err: any) => console.error('Error updating gallery', err)
    });
  }
  
}