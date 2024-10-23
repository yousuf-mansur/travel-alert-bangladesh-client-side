import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransportProviderComponent } from './edit-transport-provider.component';

describe('EditTransportProviderComponent', () => {
  let component: EditTransportProviderComponent;
  let fixture: ComponentFixture<EditTransportProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTransportProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTransportProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
