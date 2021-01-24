import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLocalineComponent } from './about-localine.component';

describe('AboutLocalineComponent', () => {
  let component: AboutLocalineComponent;
  let fixture: ComponentFixture<AboutLocalineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLocalineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLocalineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
