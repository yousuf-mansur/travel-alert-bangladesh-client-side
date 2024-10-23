import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPackagefooditemsComponent } from './show-packagefooditems.component';

describe('ShowPackagefooditemsComponent', () => {
  let component: ShowPackagefooditemsComponent;
  let fixture: ComponentFixture<ShowPackagefooditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPackagefooditemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPackagefooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
