import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTransportationTypesComponent } from './view-transportation-type.component';



describe('ViewTransportationTypeComponent', () => {
  let component: ViewTransportationTypesComponent;
  let fixture: ComponentFixture<ViewTransportationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransportationTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransportationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
