import { Component, OnInit } from '@angular/core';
import { GetPackageBudget } from '../../../../models/PackageBudget/get-package-budget';
import { ActivatedRoute } from '@angular/router';
import { PackageBudgetService } from '../../../../services/PackageBudget/package-budget.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-get-package-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './get-package-details.component.html',
  styleUrl: './get-package-details.component.css'
})
export class GetPackageDetailsComponent implements OnInit {

  package: GetPackageBudget | undefined;
  showOtherCostInput: boolean = false;
  otherCost: number = 0;  // Default value set to 0


  

  constructor(
    private route: ActivatedRoute,
    private packageBudgetService: PackageBudgetService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const packageID = Number(params.get('id'));
      if (packageID) {
        this.packageBudgetService.getPackageById(packageID).subscribe(
           (data: GetPackageBudget) => {
            this.package = data;
            this.otherCost = data.otherCost || 0;  // Default to 0 if otherCost is undefined
          },
          error => console.error(error)
        );
      }
    });
  }

  toggleOtherCostInput(): void {
    this.showOtherCostInput = !this.showOtherCostInput;
  }

  updateOtherCost(): void {
    if (this.package) {
      // Prepare the body with both values
      const updateData = {
        otherCost: this.otherCost,
        profitPercent: this.package.profitPercent  // Make sure you have the correct value here
      };
      
      console.log('Sending update data:', updateData);
  
      this.packageBudgetService.updateOtherCost(this.package.packageID, updateData)
        .subscribe(
          () => {
            if (this.package) {
              this.package.otherCost = this.otherCost;
              this.package.profitPercent = updateData.profitPercent;
            }
            this.showOtherCostInput = false;  
          },
          error => {
            console.error('Error updating package details:', error);
          }
        );
    }
  }
  
  
  
}


