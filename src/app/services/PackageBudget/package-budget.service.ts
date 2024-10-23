import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetPackageBudget } from '../../models/PackageBudget/get-package-budget';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PackageBudgetService {
  private baseUrl = 'http://localhost:5148/api/Package/get-package-budget';

  constructor(private http: HttpClient) {}

  getPackageById(packageID: number): Observable<GetPackageBudget> {
    return this.http.get<GetPackageBudget>(`${this.baseUrl}/${packageID}`);
  }

  // updateOtherCost(packageID: number, otherCost: number): Observable<any> {
  //   const url = `http://localhost:5141/api/Package/update-package-budget-othercost/${packageID}?otherCost=${otherCost}`;
  //   console.log(otherCost);

  //   return this.http.put(url,  { packageID, otherCost });
  // }

  // Update this method in PackageBudgetService
  updateOtherCost(
    packageID: number,
    data: { otherCost: number; profitPercent: number }
  ): Observable<any> {
    return this.http.put(
      `http://localhost:5141/api/Package/update-package-budget-othercost/${packageID}`,
      data
    );
  }
}
