import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFooditemsComponent } from './add-fooditems.component';

describe('AddFooditemsComponent', () => {
  let component: AddFooditemsComponent;
  let fixture: ComponentFixture<AddFooditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFooditemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
