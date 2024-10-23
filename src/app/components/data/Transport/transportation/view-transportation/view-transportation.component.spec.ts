import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransportationComponent } from './view-transportation.component';

describe('ViewTransportationComponent', () => {
  let component: ViewTransportationComponent;
  let fixture: ComponentFixture<ViewTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransportationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
