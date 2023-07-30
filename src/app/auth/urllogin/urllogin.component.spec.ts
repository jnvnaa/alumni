import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlloginComponent } from './urllogin.component';

describe('UrlloginComponent', () => {
  let component: UrlloginComponent;
  let fixture: ComponentFixture<UrlloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlloginComponent]
    });
    fixture = TestBed.createComponent(UrlloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
