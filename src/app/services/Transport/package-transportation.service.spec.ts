import { TestBed } from '@angular/core/testing';

import { PackageTransportationService } from './package-transportation.service';

describe('PackageTransportationService', () => {
  let service: PackageTransportationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageTransportationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
