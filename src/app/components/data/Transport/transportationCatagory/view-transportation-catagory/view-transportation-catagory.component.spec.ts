import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransportationCatagoryComponent } from './view-transportation-catagory.component';

describe('ViewTransportationCatagoryComponent', () => {
  let component: ViewTransportationCatagoryComponent;
  let fixture: ComponentFixture<ViewTransportationCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransportationCatagoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransportationCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
