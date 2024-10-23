import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackageExcludesComponent } from './add-package-excludes.component';

describe('AddPackageExcludesComponent', () => {
  let component: AddPackageExcludesComponent;
  let fixture: ComponentFixture<AddPackageExcludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPackageExcludesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPackageExcludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
