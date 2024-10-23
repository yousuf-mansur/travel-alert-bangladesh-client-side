import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocationGalleryComponent } from './add-location-gallery.component';

describe('AddLocationGalleryComponent', () => {
  let component: AddLocationGalleryComponent;
  let fixture: ComponentFixture<AddLocationGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLocationGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLocationGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
