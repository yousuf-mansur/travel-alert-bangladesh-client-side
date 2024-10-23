import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PackageTransportationService } from '../../../../../services/Transport/package-transportation.service';
import { FormsModule } from '@angular/forms';

import { TransportationCatagory } from '../../../../../models/Transport/transportation-catagory';
import { TransportationTypeService } from '../../../../../services/Transport/transportation-type.service';
import { TransportationCategoryService } from '../../../../../services/Transport/transportation-category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-package-transportation',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './add-package-transportation.component.html',
  styleUrl: './add-package-transportation.component.css'
})


export class AddPackageTransportationComponent implements OnInit {
  transportationTypes: any[] = []; 
  transportationCategories: any[] = []; 

  newTransportationItem: any = { 
    packageID: 0,
    transportationTypeID: 0,
    transportationCatagoryID: 0,
    transportationID: 0,
    seatBooked: 0,
    packageTransportationDescription: '',
    perHeadTransportCost: 0,
  };

  prevTransport :any[] =[]

  packageID: number = 0; 
  ide:any

  constructor(private cataService : TransportationCategoryService ,
    private packageTransportationService: PackageTransportationService ,
     private typeservice: TransportationTypeService,
    private route : ActivatedRoute, private navig : Router
    ) {}

  ngOnInit(): void {
    this.getTransportationTypes(); 
  this.getTransportationCategories(); 
  //this.getPackageTransportations(String(this.packageID)); 
   this.ide = this.route.snapshot.paramMap.get('id')
  this.LoadTransport()
  
  }  


  LoadTransport(){
    this.packageTransportationService.getPackageTransportationById(this.ide).subscribe((res:any)=>{
      console.log('reee',res);
      this.prevTransport = res.transportationItems.$values
      
    })
  }


  addPackageTransportation(): void {
    if (this.newTransportationItem.transportationTypeID === 0 || this.newTransportationItem.transportationID === 0) {
      alert('Transportation Type ID and Transportation ID cannot be null');
      return;
    }
    
    this.newTransportationItem.packageID = this.ide
    this.packageTransportationService.createPackageTransportation(this.ide, this.newTransportationItem).subscribe(
      (response:any) => {
        console.log(response);

        if (response.success) {
          alert('Package transportation added successfully');
          this.LoadTransport();
          this.resetForm(); 
        } else {
          alert('Error: ' + response.message);
        }
      },
      error => {
        console.error('Error adding package transportation:', error);
      }
    );
  }

  SaveExit(){
    this.addPackageTransportation();
    this.navig.navigateByUrl('/dashboard')
  }
  

  // Optionally reset the form fields after adding a transportation item
  resetForm(): void {
    this.newTransportationItem = {
      packageID: this.packageID,
      transportationTypeID: 0,
      transportationCatagoryID: 0,
      transportationID: 0,
      seatBooked: 0,
      packageTransportationDescription: '',
      perHeadTransportCost: 0,
    };
  }

  getTransportationTypes(): void {
    
    this.typeservice.getAllTypes().subscribe((response: any) => {
     // console.log(response);
      
      this.transportationTypes = response.data.$values; 
      console.log('Transportation Types:', this.transportationTypes);
    });
  }

  getTransportationCategories(): void {
    
    this.cataService.getAllCategories().subscribe((response: any) => {
      console.log(response);
      
      this.transportationCategories = response.data.$values; // Adjust based on your API response structure
      console.log('Transportation Categories:', this.transportationCategories);
    });
  }


  getTransportationTypeName(id: number): string {
    const type = this.transportationTypes.find(t => t.transportationTypeID === id);
    return type ? type.typeName : 'Unknown';
}

// Method to get the transportation category name by ID
getTransportationCategoryName(id: number): string {
    const category = this.transportationCategories.find(c => c.transportationCatagoryID === id);
    return category ? category.transportationCatagoryName : 'Unknown';
}



}