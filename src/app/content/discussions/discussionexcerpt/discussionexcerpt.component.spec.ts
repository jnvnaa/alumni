import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionexcerptComponent } from './discussionexcerpt.component';

describe('DiscussionexcerptComponent', () => {
  let component: DiscussionexcerptComponent;
  let fixture: ComponentFixture<DiscussionexcerptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionexcerptComponent]
    });
    fixture = TestBed.createComponent(DiscussionexcerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
