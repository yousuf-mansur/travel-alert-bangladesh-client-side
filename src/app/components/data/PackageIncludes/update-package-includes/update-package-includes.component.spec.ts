import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePackageIncludesComponent } from './update-package-includes.component';

describe('UpdatePackageIncludesComponent', () => {
  let component: UpdatePackageIncludesComponent;
  let fixture: ComponentFixture<UpdatePackageIncludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePackageIncludesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePackageIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
