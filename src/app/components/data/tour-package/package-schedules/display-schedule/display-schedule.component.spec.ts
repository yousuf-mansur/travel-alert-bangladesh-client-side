import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayScheduleComponent } from './display-schedule.component';

describe('DisplayScheduleComponent', () => {
  let component: DisplayScheduleComponent;
  let fixture: ComponentFixture<DisplayScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
