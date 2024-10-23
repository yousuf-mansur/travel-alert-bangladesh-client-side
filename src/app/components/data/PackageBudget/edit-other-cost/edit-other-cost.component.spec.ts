import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOtherCostComponent } from './edit-other-cost.component';

describe('EditOtherCostComponent', () => {
  let component: EditOtherCostComponent;
  let fixture: ComponentFixture<EditOtherCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOtherCostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOtherCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
