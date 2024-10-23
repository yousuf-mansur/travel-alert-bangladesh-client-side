import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTransportationComponent } from './delete-transportation.component';

describe('DeleteTransportationComponent', () => {
  let component: DeleteTransportationComponent;
  let fixture: ComponentFixture<DeleteTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTransportationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
