import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAddProductPageComponent } from './provider-add-product-page.component';

describe('ProviderAddProductPageComponent', () => {
  let component: ProviderAddProductPageComponent;
  let fixture: ComponentFixture<ProviderAddProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderAddProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderAddProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
