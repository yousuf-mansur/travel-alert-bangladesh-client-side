import { TestBed } from '@angular/core/testing';

import { TourVoucherService } from './tour-voucher.service';

describe('TourVoucherService', () => {
  let service: TourVoucherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourVoucherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
