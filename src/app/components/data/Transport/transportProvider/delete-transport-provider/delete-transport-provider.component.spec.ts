import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTransportProviderComponent } from './delete-transport-provider.component';

describe('DeleteTransportProviderComponent', () => {
  let component: DeleteTransportProviderComponent;
  let fixture: ComponentFixture<DeleteTransportProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTransportProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTransportProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
