import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTransportationCatagoryComponent } from './delete-transportation-catagory.component';

describe('DeleteTransportationCatagoryComponent', () => {
  let component: DeleteTransportationCatagoryComponent;
  let fixture: ComponentFixture<DeleteTransportationCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTransportationCatagoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTransportationCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
