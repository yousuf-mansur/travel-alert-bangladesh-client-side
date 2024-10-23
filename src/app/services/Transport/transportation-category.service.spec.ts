import { TestBed } from '@angular/core/testing';

import { TransportationCategoryService } from './transportation-category.service';

describe('TransportationCategoryService', () => {
  let service: TransportationCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportationCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
