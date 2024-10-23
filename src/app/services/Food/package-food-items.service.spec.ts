import { TestBed } from '@angular/core/testing';

import { PackageFoodItemsService } from './package-food-items.service';

describe('PackageFoodItemsService', () => {
  let service: PackageFoodItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageFoodItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
