import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackageDetailsComponent } from './add-package-details.component';

describe('AddPackageDetailsComponent', () => {
  let component: AddPackageDetailsComponent;
  let fixture: ComponentFixture<AddPackageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPackageDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
