import { TestBed } from '@angular/core/testing';

import { LocationGalleryService } from './location-gallery.service';

describe('LocationGalleryService', () => {
  let service: LocationGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
