import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayspinnerComponent } from './overlayspinner.component';

describe('OverlayspinnerComponent', () => {
  let component: OverlayspinnerComponent;
  let fixture: ComponentFixture<OverlayspinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayspinnerComponent]
    });
    fixture = TestBed.createComponent(OverlayspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
