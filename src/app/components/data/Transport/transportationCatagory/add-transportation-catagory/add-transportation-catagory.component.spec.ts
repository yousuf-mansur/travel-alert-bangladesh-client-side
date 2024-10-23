import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransportationCatagoryComponent } from './add-transportation-catagory.component';

describe('AddTransportationCatagoryComponent', () => {
  let component: AddTransportationCatagoryComponent;
  let fixture: ComponentFixture<AddTransportationCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTransportationCatagoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransportationCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
