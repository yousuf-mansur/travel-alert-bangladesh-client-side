import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPackageTransportationComponent } from './view-package-transportation.component';

describe('ViewPackageTransportationComponent', () => {
  let component: ViewPackageTransportationComponent;
  let fixture: ComponentFixture<ViewPackageTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPackageTransportationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPackageTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
