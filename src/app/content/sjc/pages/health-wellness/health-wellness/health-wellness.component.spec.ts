import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthWellnessComponent } from './health-wellness.component';

describe('HealthWellnessComponent', () => {
  let component: HealthWellnessComponent;
  let fixture: ComponentFixture<HealthWellnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthWellnessComponent]
    });
    fixture = TestBed.createComponent(HealthWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
