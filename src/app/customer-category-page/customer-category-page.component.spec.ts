import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCategoryPageComponent } from './customer-category-page.component';

describe('CustomerCategoryPageComponent', () => {
  let component: CustomerCategoryPageComponent;
  let fixture: ComponentFixture<CustomerCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
