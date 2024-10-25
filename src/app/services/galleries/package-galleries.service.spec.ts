import { TestBed } from '@angular/core/testing';

import { PackageGalleriesService } from './package-galleries.service';

describe('PackageGalleriesService', () => {
  let service: PackageGalleriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageGalleriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
