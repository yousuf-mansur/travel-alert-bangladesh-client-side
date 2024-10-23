import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackageTransportationComponent } from './add-package-transportation.component';

describe('AddPackageTransportationComponent', () => {
  let component: AddPackageTransportationComponent;
  let fixture: ComponentFixture<AddPackageTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPackageTransportationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPackageTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
