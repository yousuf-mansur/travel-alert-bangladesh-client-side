import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TransportationCategoryService } from '../../../../../services/Transport/transportation-category.service';

@Component({
  selector: 'app-edit-transportation-catagory',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './edit-transportation-catagory.component.html',
  styleUrl: './edit-transportation-catagory.component.css'
})
export class EditTransportationCatagoryComponent {

  editForm: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: TransportationCategoryService
  ) {
    // Initialize the form
    this.editForm = this.fb.group({
      transportationCatagoryName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Get the category ID from route
    this.id = +this.route.snapshot.params['id'];
    this.loadCategoryData();
  }

  // Load category data into form
  loadCategoryData() {
    this.categoryService.getCategoryById(this.id).subscribe((data: any) => {
      this.editForm.setValue({
        transportationCatagoryName: data.transportationCatagoryName
      });
    });
  }

  // Submit the form and update the category
  onSubmit() {
    if (this.editForm.valid) {
      this.categoryService.updateCategory(this.id, this.editForm.value).subscribe((res: any) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        alert(' TransportCatagory Edit successfully!');
        this.router.navigateByUrl(res.requestUrl);
          
      
      
      });
    }
  }
}
