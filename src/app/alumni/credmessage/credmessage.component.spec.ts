import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredmessageComponent } from './credmessage.component';

describe('CredmessageComponent', () => {
  let component: CredmessageComponent;
  let fixture: ComponentFixture<CredmessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CredmessageComponent]
    });
    fixture = TestBed.createComponent(CredmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
