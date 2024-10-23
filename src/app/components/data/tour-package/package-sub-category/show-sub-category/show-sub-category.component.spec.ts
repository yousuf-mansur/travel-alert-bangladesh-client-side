import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubCategoryComponent } from './show-sub-category.component';

describe('ShowSubCategoryComponent', () => {
  let component: ShowSubCategoryComponent;
  let fixture: ComponentFixture<ShowSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSubCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
