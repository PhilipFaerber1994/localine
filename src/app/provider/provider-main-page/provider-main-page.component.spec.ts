import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderMainPageComponent } from './provider-main-page.component';

describe('ProviderMainPageComponent', () => {
  let component: ProviderMainPageComponent;
  let fixture: ComponentFixture<ProviderMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
