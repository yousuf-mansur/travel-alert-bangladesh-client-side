import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePackageDetailsComponent } from './update-package-details.component';

describe('UpdatePackageDetailsComponent', () => {
  let component: UpdatePackageDetailsComponent;
  let fixture: ComponentFixture<UpdatePackageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePackageDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
