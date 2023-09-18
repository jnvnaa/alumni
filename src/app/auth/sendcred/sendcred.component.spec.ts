import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendcredComponent } from './sendcred.component';

describe('SendcredComponent', () => {
  let component: SendcredComponent;
  let fixture: ComponentFixture<SendcredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendcredComponent]
    });
    fixture = TestBed.createComponent(SendcredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
