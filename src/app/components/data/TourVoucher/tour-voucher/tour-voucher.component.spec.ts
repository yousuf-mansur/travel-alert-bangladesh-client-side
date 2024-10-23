import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVoucherComponent } from './tour-voucher.component';

describe('TourVoucherComponent', () => {
  let component: TourVoucherComponent;
  let fixture: ComponentFixture<TourVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourVoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
