import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackageIncludesComponent } from './add-package-includes.component';

describe('AddPackageIncludesComponent', () => {
  let component: AddPackageIncludesComponent;
  let fixture: ComponentFixture<AddPackageIncludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPackageIncludesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPackageIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
