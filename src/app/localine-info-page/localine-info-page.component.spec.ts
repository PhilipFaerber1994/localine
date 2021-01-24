import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalineInfoPageComponent } from './localine-info-page.component';

describe('LocalineInfoPageComponent', () => {
  let component: LocalineInfoPageComponent;
  let fixture: ComponentFixture<LocalineInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalineInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalineInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
