import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransportationCatagoryComponent } from './edit-transportation-catagory.component';

describe('EditTransportationCatagoryComponent', () => {
  let component: EditTransportationCatagoryComponent;
  let fixture: ComponentFixture<EditTransportationCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTransportationCatagoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTransportationCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
