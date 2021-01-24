import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderMyShopComponent } from './provider-my-shop.component';

describe('ProviderMyShopComponent', () => {
  let component: ProviderMyShopComponent;
  let fixture: ComponentFixture<ProviderMyShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderMyShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderMyShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
