import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeexcerptComponent } from './noticeexcerpt.component';

describe('NoticeexcerptComponent', () => {
  let component: NoticeexcerptComponent;
  let fixture: ComponentFixture<NoticeexcerptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticeexcerptComponent]
    });
    fixture = TestBed.createComponent(NoticeexcerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
