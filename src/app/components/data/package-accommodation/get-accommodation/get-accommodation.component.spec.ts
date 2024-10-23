import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAccommodationComponent } from './get-accommodation.component';

describe('GetAccommodationComponent', () => {
  let component: GetAccommodationComponent;
  let fixture: ComponentFixture<GetAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAccommodationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
