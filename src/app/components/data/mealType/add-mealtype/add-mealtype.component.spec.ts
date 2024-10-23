import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMealTypeComponent } from './add-mealtype.component';

describe('AddMealtypeComponent', () => {
  let component: AddMealTypeComponent;
  let fixture: ComponentFixture<AddMealTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMealTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMealTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
