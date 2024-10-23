import { Component } from '@angular/core';
import { CostEstimate } from '../../../../models/PackageBudget/cost-estimate';
import { CostEstimateService } from '../../../../services/PackageBudget/cost-estimate-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cost-estimate-form-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cost-estimate-form-component.component.html',
  styleUrl: './cost-estimate-form-component.component.css'
})
export class CostEstimateFormComponentComponent {
  costEstimate: CostEstimate = {
    packageID: 0,
    estimatedFoodCost: 0,
    estimatedTransportCost: 0,
    estimatedAccommodationCost: 0,
    otherCost: 0,
    profitPercent: 0,
};

constructor(private costEstimateService: CostEstimateService) {}

submitCostEstimate() {
    this.costEstimateService.createCostEstimate(this.costEstimate).subscribe({
        next: (response) => {
            console.log('Cost Estimate created:', response);
            // Handle successful response
        },
        error: (error) => {
            console.error('Error creating Cost Estimate:', error);
            // Handle error response
        },
    });
}
}
