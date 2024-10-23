import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFoodItemsComponent } from './show-food-items.component';

describe('ShowFoodItemsComponent', () => {
  let component: ShowFoodItemsComponent;
  let fixture: ComponentFixture<ShowFoodItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFoodItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFoodItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
