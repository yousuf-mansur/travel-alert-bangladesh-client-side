import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPackageExcludesComponent } from './view-package-excludes.component';

describe('ViewPackageExcludesComponent', () => {
  let component: ViewPackageExcludesComponent;
  let fixture: ComponentFixture<ViewPackageExcludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPackageExcludesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPackageExcludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
