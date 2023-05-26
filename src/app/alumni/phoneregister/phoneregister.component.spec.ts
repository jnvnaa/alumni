import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneregisterComponent } from './phoneregister.component';

describe('PhoneregisterComponent', () => {
  let component: PhoneregisterComponent;
  let fixture: ComponentFixture<PhoneregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneregisterComponent]
    });
    fixture = TestBed.createComponent(PhoneregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
