import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationGallerylistComponent } from './location-gallerylist.component';

describe('LocationGallerylistComponent', () => {
  let component: LocationGallerylistComponent;
  let fixture: ComponentFixture<LocationGallerylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationGallerylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationGallerylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
