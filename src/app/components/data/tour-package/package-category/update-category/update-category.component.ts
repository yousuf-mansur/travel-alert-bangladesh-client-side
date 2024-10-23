import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // <--- Import ReactiveFormsModule
import { CommonModule } from '@angular/common';  // Import CommonModule for template features like ngIf, ngFor
import { PackageCategoryService } from '../../../../../services/categories/package-category.service';
import { PackageCategoryDTO } from '../../../../../models/categories/create-category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule   // <-- Ensure ReactiveFormsModule is imported
  ],
  standalone: true,
})
export class UpdateCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categoryId!: number;

  constructor(
    private fb: FormBuilder,
    private packageCategoryService: PackageCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.categoryId = +this.route.snapshot.paramMap.get('id')!;
    this.loadCategory();
  }

  loadCategory(): void {
    this.packageCategoryService.getCategoryById(this.categoryId).subscribe({
      next: (category) => {
        this.categoryForm.patchValue(category);
      },
      error: (err) => {
        console.error('Error fetching category', err);
      }
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const formData: PackageCategoryDTO = {
        ...this.categoryForm.value,
        PackageCategoryID: this.categoryId
      };
      this.packageCategoryService.updateCategory(this.categoryId, formData).subscribe({
        next: () => {
          console.log('Category updated successfully!');
          this.router.navigate(['/categories']);
        },
        error: (error) => {
          console.error('Error updating category', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
