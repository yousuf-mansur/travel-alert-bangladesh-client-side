import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PackageGalleriesService } from '../../../../../services/galleries/package-galleries.service';
//import { PackageGalleriesService } from '../../services/package-galleries.service'; // Import your service

export interface PackageGalleryInsertModel {
  ImageFile: File | null;
  IsPrimary: boolean;
  ImageCaption: string;
  PackageID: number;
}

@Component({
  selector: 'app-add-gallery',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './add-gallery.component.html',
  styleUrls: ['./add-gallery.component.css'],
})
export class AddGalleryComponent implements OnInit {
  galleryForm: FormGroup;
  imageFile: File | null = null;
  packageId!: number;

  constructor(
    private fb: FormBuilder,
    private packageGalleriesService: PackageGalleriesService, // Use the service here
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.galleryForm = this.fb.group({
      ImageCaption: ['', Validators.required],
      IsPrimary: [false],
      packageId: [this.packageId, Validators.required],
    });
  }

  ngOnInit(): void {
    // Get packageId from route parameters
    this.route.params.subscribe((params) => {
      this.packageId = +params['packageId'];
      this.galleryForm.patchValue({ packageId: this.packageId });
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.imageFile = file ? file : null;
  }

  onSubmit(): void {
    if (this.galleryForm.valid) {
      const formData = new FormData();
      const formModel: PackageGalleryInsertModel = this.galleryForm.value;

      formData.append('ImageFile', this.imageFile as any);
      formData.append('IsPrimary', formModel.IsPrimary.toString());
      formData.append('ImageCaption', formModel.ImageCaption);
      formData.append('PackageID', this.packageId.toString());

      // Call the saveGallery method from the service
      this.packageGalleriesService.saveGallery(formData).subscribe({
        next: () => {
          this.router.navigate(['/get/gallery/', this.packageId]);
        },
        error: (err) => {
          console.error('Error adding gallery:', err);
        },
      });
    }
  }
}
