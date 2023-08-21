import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportAccommodationComponent } from './transport-accommodation.component';

describe('TransportAccommodationComponent', () => {
  let component: TransportAccommodationComponent;
  let fixture: ComponentFixture<TransportAccommodationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportAccommodationComponent]
    });
    fixture = TestBed.createComponent(TransportAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
