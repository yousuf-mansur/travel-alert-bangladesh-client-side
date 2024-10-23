import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocationgalleryComponent } from './update-locationgallery.component';

describe('UpdateLocationgalleryComponent', () => {
  let component: UpdateLocationgalleryComponent;
  let fixture: ComponentFixture<UpdateLocationgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLocationgalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLocationgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
