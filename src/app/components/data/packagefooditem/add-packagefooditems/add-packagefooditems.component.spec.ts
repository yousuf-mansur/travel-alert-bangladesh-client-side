import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackagefooditemsComponent } from './add-packagefooditems.component';

describe('AddPackagefooditemsComponent', () => {
  let component: AddPackagefooditemsComponent;
  let fixture: ComponentFixture<AddPackagefooditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPackagefooditemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPackagefooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
