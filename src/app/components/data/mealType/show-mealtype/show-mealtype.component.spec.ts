import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMealtypeComponent } from './show-mealtype.component';

describe('ShowMealtypeComponent', () => {
  let component: ShowMealtypeComponent;
  let fixture: ComponentFixture<ShowMealtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMealtypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMealtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
