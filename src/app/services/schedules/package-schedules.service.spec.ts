import { TestBed } from '@angular/core/testing';

import { PackageSchedulesService } from './package-schedules.service';

describe('PackageSchedulesService', () => {
  let service: PackageSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
