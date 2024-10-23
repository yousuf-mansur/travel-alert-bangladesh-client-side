import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeatsComponent } from './edit-seats.component';

describe('EditSeatsComponent', () => {
  let component: EditSeatsComponent;
  let fixture: ComponentFixture<EditSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSeatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
