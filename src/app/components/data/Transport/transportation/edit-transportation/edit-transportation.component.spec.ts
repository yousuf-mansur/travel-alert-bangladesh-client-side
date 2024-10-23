import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransportationComponent } from './edit-transportation.component';

describe('EditTransportationComponent', () => {
  let component: EditTransportationComponent;
  let fixture: ComponentFixture<EditTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTransportationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
