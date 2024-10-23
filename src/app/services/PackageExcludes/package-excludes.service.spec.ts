import { TestBed } from '@angular/core/testing';

import { PackageExcludesService } from './package-excludes.service';

describe('PackageExcludesService', () => {
  let service: PackageExcludesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageExcludesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
