import { TestBed } from '@angular/core/testing';

import { PackageSubCategoryService } from './package-sub-category.service';

describe('PackageSubCategoryService', () => {
  let service: PackageSubCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageSubCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
