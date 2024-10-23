import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CostEstimate } from '../../models/PackageBudget/cost-estimate';

@Injectable({
  providedIn: 'root',
})
export class CostEstimateService {
  private apiUrl = 'http://localhost:5148/api/Package/add-package-budget';

  constructor(private http: HttpClient) {}

  createCostEstimate(costEstimate: CostEstimate): Observable<CostEstimate> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<CostEstimate>(this.apiUrl, costEstimate, { headers });
  }
}
