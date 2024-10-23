import { TestBed } from '@angular/core/testing';

import { TransportationServicesService } from './transportation-services.service';

describe('TransportationServicesService', () => {
  let service: TransportationServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportationServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
