import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFooditemsComponent } from './update-fooditems.component';

describe('UpdateFooditemsComponent', () => {
  let component: UpdateFooditemsComponent;
  let fixture: ComponentFixture<UpdateFooditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFooditemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
