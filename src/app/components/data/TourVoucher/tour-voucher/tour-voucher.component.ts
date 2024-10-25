import { Component, OnInit } from '@angular/core';
import { TourVoucher } from '../../../../models/TourVoucher/tour-voucher';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TourVoucherService } from '../../../../services/TourVoucher/tour-voucher.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tour-voucher',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './tour-voucher.component.html',
  styleUrl: './tour-voucher.component.css',
})
export class TourVoucherComponent implements OnInit {
  tourVouchers: any[] = [];
  tourVoucherForm!: FormGroup;
  selectedFile!: File;
  loading = false;
  error: string | null = null;
  private apiBaseUrl = 'http://localhost:5148';

  constructor(
    private tourVoucherService: TourVoucherService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadTourVouchers();

    // Initialize the form
    this.tourVoucherForm = this.fb.group({
      tourVoucherCode: ['', Validators.required],
      voucherFile: [null],
    });
  }

  getFullImageUrl(voucherUrl: string): string {
    if (!voucherUrl) return '';
    // Check if the URL is already absolute
    if (voucherUrl.startsWith('http')) {
      return voucherUrl;
    }
    // Remove leading slash if present to avoid double slashes
    const cleanPath = voucherUrl.startsWith('/')
      ? voucherUrl.slice(1)
      : voucherUrl;
    return `${this.apiBaseUrl}/${cleanPath}`;
  }

  // Load all tour vouchers
  loadTourVouchers() {
    this.loading = true;
    this.error = null;

    this.tourVoucherService.getTourVouchers().subscribe(
      (response: any) => {
        this.tourVouchers = response;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading tour vouchers', error);
        this.error = 'Failed to load tour vouchers. Please try again.';
        this.loading = false;
      }
    );
  }

  // Handle file selection for uploading voucher file
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  // Submit form to add a new tour voucher
  submitTourVoucher() {
    const formData = new FormData();
    formData.append(
      'tourVoucherCode',
      this.tourVoucherForm.get('tourVoucherCode')?.value
    );
    if (this.selectedFile) {
      formData.append('voucherFile', this.selectedFile);
    }

    this.tourVoucherService.addTourVoucher(formData).subscribe(
      (response) => {
        console.log('Tour voucher added', response);
        this.loadTourVouchers(); // Reload vouchers after adding
      },
      (error) => {
        console.error('Error adding tour voucher', error);
      }
    );
  }

  // Delete a tour voucher
  deleteTourVoucher(id: number) {
    this.tourVoucherService.deleteTourVoucher(id).subscribe(
      (response) => {
        console.log('Tour voucher deleted', response);
        this.loadTourVouchers(); // Reload vouchers after deletion
      },
      (error) => {
        console.error('Error deleting tour voucher', error);
      }
    );
  }
}
