import { TestBed } from '@angular/core/testing';

import { PackageAccommodationService } from './package-accommodation.service';

describe('PackageAccommodationService', () => {
  let service: PackageAccommodationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageAccommodationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
