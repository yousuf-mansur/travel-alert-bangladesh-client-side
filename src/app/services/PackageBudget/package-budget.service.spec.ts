import { TestBed } from '@angular/core/testing';

import { PackageBudgetService } from './package-budget.service';

describe('PackageBudgetService', () => {
  let service: PackageBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
