import { TestBed } from '@angular/core/testing';

import { CostEstimateServiceService } from './cost-estimate-service.service';

describe('CostEstimateServiceService', () => {
  let service: CostEstimateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostEstimateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
