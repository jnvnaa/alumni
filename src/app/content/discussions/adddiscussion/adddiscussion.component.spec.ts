import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddiscussionComponent } from './adddiscussion.component';

describe('AdddiscussionComponent', () => {
  let component: AdddiscussionComponent;
  let fixture: ComponentFixture<AdddiscussionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddiscussionComponent]
    });
    fixture = TestBed.createComponent(AdddiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
