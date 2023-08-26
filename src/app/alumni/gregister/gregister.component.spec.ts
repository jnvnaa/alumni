import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GregisterComponent } from './gregister.component';

describe('GregisterComponent', () => {
  let component: GregisterComponent;
  let fixture: ComponentFixture<GregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GregisterComponent]
    });
    fixture = TestBed.createComponent(GregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
