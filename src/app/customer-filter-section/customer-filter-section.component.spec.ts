import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFilterSectionComponent } from './customer-filter-section.component';

describe('CustomerFilterSectionComponent', () => {
  let component: CustomerFilterSectionComponent;
  let fixture: ComponentFixture<CustomerFilterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFilterSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
