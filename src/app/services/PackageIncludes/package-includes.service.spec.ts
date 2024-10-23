import { TestBed } from '@angular/core/testing';

import { PackageIncludesService } from './package-includes.service';

describe('PackageIncludesService', () => {
  let service: PackageIncludesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageIncludesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
