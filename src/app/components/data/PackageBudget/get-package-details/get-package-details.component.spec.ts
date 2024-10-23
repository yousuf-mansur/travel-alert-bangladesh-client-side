import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPackageDetailsComponent } from './get-package-details.component';

describe('GetPackageDetailsComponent', () => {
  let component: GetPackageDetailsComponent;
  let fixture: ComponentFixture<GetPackageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPackageDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
