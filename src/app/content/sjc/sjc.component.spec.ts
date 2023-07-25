import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SjcComponent } from './sjc.component';

describe('SjcComponent', () => {
  let component: SjcComponent;
  let fixture: ComponentFixture<SjcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SjcComponent]
    });
    fixture = TestBed.createComponent(SjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
