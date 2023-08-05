import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesongComponent } from './themesong.component';

describe('ThemesongComponent', () => {
  let component: ThemesongComponent;
  let fixture: ComponentFixture<ThemesongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemesongComponent]
    });
    fixture = TestBed.createComponent(ThemesongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
