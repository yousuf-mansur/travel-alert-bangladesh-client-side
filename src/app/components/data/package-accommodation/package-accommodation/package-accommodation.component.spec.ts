import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageAccommodationComponent } from './package-accommodation.component';

describe('PackageAccommodationComponent', () => {
  let component: PackageAccommodationComponent;
  let fixture: ComponentFixture<PackageAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageAccommodationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
