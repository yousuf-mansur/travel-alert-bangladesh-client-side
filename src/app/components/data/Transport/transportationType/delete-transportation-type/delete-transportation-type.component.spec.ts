import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTransportationTypeComponent } from './delete-transportation-type.component';

describe('DeleteTransportationTypeComponent', () => {
  let component: DeleteTransportationTypeComponent;
  let fixture: ComponentFixture<DeleteTransportationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTransportationTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTransportationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
