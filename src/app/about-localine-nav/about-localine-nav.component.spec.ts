import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLocalineNavComponent } from './about-localine-nav.component';

describe('AboutLocalineNavComponent', () => {
  let component: AboutLocalineNavComponent;
  let fixture: ComponentFixture<AboutLocalineNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLocalineNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLocalineNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
