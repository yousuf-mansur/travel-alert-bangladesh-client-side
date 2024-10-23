import { TestBed } from '@angular/core/testing';

import { TransportationTypeService } from './transportation-type.service';

describe('TransportationTypeService', () => {
  let service: TransportationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
