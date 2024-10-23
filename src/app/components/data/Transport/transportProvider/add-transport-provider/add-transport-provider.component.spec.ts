import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransportProviderComponent } from './add-transport-provider.component';

describe('AddTransportProviderComponent', () => {
  let component: AddTransportProviderComponent;
  let fixture: ComponentFixture<AddTransportProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTransportProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransportProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
