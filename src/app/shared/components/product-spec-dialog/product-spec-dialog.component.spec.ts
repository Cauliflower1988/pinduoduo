import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecDialogComponent } from './product-spec-dialog.component';

describe('ProductSpecDialogComponent', () => {
  let component: ProductSpecDialogComponent;
  let fixture: ComponentFixture<ProductSpecDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSpecDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSpecDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
