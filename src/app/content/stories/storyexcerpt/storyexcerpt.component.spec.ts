import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryexcerptComponent } from './storyexcerpt.component';

describe('StoryexcerptComponent', () => {
  let component: StoryexcerptComponent;
  let fixture: ComponentFixture<StoryexcerptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryexcerptComponent]
    });
    fixture = TestBed.createComponent(StoryexcerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
