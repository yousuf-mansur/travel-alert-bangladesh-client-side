import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  
import { PackageSubCategoryService } from '../../../../../services/categories/package-sub-category.service';
import { PackageCategoryService } from '../../../../../services/categories/package-category.service';
import { PackageCategoryListDTO } from './../../../../../models/categories/package-category';
import { PackageSubCategoryListDTO } from './../../../../../models/categories/package-ubCategory-list-dto';

@Component({
  selector: 'app-update-sub-category',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-sub-category.component.html',
  styleUrls: ['./update-sub-category.component.css']
})
export class UpdateSubCategoryComponent implements OnInit {
  subCategoryForm: FormGroup;
  categories: PackageCategoryListDTO[] = [];
  subCategoryId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private subCategoryService: PackageSubCategoryService,
    private categoryService: PackageCategoryService,
    private router: Router
  ) {
    this.subCategoryForm = this.fb.group({
      SubCategoryName: ['', Validators.required],
      Description: ['', Validators.required],
      PackageCategoryID: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.subCategoryId = +this.route.snapshot.paramMap.get('id')!;
    this.loadCategories();
    this.loadSubCategory();
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  loadSubCategory() {
    this.subCategoryService.getSubCategoryById(this.subCategoryId).subscribe({
      next: (data: PackageSubCategoryListDTO) => {
        console.log(data); // Check the fetched data
        this.subCategoryForm.patchValue({
          SubCategoryName: data.subCategoryName,
          Description: data.description,
          PackageCategoryID: data.packageCategoryID
        });
      },
      error: (error) => {
        console.error('Error fetching sub-category', error);
      }
    });
  }
  

  onSubmit() {
    if (this.subCategoryForm.valid) {
      // Map the form values to the expected DTO format
      const updatedSubCategory: PackageSubCategoryListDTO = {
        packageSubCategoryID: this.subCategoryId,  // ensure you have this ID
        ...this.subCategoryForm.value
      };
  
      this.subCategoryService.updateSubCategory(updatedSubCategory).subscribe({
        next: (response) => {
          console.log('Sub-Category updated successfully!', response);
          this.router.navigate(['/sub-categories']); // Navigate back to the list
        },
        error: (error) => {
          console.error('Error updating sub-category', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
  
  

}
