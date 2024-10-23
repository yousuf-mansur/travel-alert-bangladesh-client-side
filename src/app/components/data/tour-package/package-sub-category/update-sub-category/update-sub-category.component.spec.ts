import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubCategoryComponent } from './update-sub-category.component';

describe('UpdateSubCategoryComponent', () => {
  let component: UpdateSubCategoryComponent;
  let fixture: ComponentFixture<UpdateSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSubCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
