import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSeatsComponent } from './delete-seats.component';

describe('DeleteSeatsComponent', () => {
  let component: DeleteSeatsComponent;
  let fixture: ComponentFixture<DeleteSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSeatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
