import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMealtypeComponent } from './update-mealtype.component';

describe('UpdateMealtypeComponent', () => {
  let component: UpdateMealtypeComponent;
  let fixture: ComponentFixture<UpdateMealtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMealtypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMealtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
