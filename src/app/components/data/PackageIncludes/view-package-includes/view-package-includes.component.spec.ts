import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPackageIncludesComponent } from './view-package-includes.component';

describe('ViewPackageIncludesComponent', () => {
  let component: ViewPackageIncludesComponent;
  let fixture: ComponentFixture<ViewPackageIncludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPackageIncludesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPackageIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
