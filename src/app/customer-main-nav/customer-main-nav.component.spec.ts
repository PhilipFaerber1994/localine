import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMainNavComponent } from './customer-main-nav.component';

describe('CustomerMainNavComponent', () => {
  let component: CustomerMainNavComponent;
  let fixture: ComponentFixture<CustomerMainNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMainNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
