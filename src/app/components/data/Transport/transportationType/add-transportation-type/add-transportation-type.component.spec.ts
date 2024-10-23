import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransportationTypeComponent } from './add-transportation-type.component';

describe('AddTransportationTypeComponent', () => {
  let component: AddTransportationTypeComponent;
  let fixture: ComponentFixture<AddTransportationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTransportationTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransportationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
