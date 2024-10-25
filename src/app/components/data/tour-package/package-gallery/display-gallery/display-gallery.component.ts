import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PackageGalleries } from '../../../../../models/Package/package-galleries';
import { PackageGalleryResponse } from '../../../../../models/Package/package-gallery-response';
import { PackageGalleriesService } from '../../../../../services/galleries/package-galleries.service';
import { environment } from '../../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './display-gallery.component.html',
  styleUrls: ['./display-gallery.component.css'],
})
export class DisplayGalleryComponent implements OnInit {
  galleries: (PackageGalleries & { imageError?: boolean })[] = [];
  packageTitle: string = '';
  errorMessage: string = '';
  packageId!: number;
  loading: boolean = false;
  private apiBaseUrl = environment.apiUrl;

  constructor(
    private galleryService: PackageGalleriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('packageId');
      if (id) {
        this.packageId = +id;
        this.loadGalleries();
      }
    });
  }

  getFullImageUrl(imageUrl: string): string {
    if (!imageUrl) return '';
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    const cleanPath = imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl;
    return `${this.apiBaseUrl}/${cleanPath}`;
  }

  handleImageError(gallery: PackageGalleries & { imageError?: boolean }): void {
    gallery.imageError = true;
  }

  loadGalleries(): void {
    this.loading = true;
    this.errorMessage = '';

    this.galleryService.getGalleriesByPackageId(this.packageId).subscribe({
      next: (response: PackageGalleryResponse) => {
        if (response.success && response.images) {
          this.packageTitle = response.packageTitle;
          this.galleries = response.images.map((image) => ({
            ...image,
            imageError: false,
          }));
        } else {
          this.errorMessage = 'No galleries found.';
          this.galleries = [];
        }
      },
      error: (error) => {
        console.error('Error loading galleries:', error);
        this.errorMessage = 'Failed to load galleries';
        this.galleries = [];
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  addGallery(): void {
    this.router.navigate(['/add/gallery', this.packageId]);
  }
}
