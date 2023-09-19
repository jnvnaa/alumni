import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigicardComponent } from './digicard.component';

describe('DigicardComponent', () => {
  let component: DigicardComponent;
  let fixture: ComponentFixture<DigicardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigicardComponent]
    });
    fixture = TestBed.createComponent(DigicardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
