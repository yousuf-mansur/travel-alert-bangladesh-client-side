import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePackageExcludesComponent } from './update-package-excludes.component';

describe('UpdatePackageExcludesComponent', () => {
  let component: UpdatePackageExcludesComponent;
  let fixture: ComponentFixture<UpdatePackageExcludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePackageExcludesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePackageExcludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
