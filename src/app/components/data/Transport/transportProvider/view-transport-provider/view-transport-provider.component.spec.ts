import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransportProvidersComponent } from './view-transport-provider.component';

describe('ViewTransportProviderComponent', () => {
  let component: ViewTransportProvidersComponent;
  let fixture: ComponentFixture<ViewTransportProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransportProvidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransportProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
