import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostEstimateFormComponentComponent } from './cost-estimate-form-component.component';

describe('CostEstimateFormComponentComponent', () => {
  let component: CostEstimateFormComponentComponent;
  let fixture: ComponentFixture<CostEstimateFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostEstimateFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostEstimateFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
