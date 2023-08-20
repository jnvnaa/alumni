import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPublicityComponent } from './media-publicity.component';

describe('MediaPublicityComponent', () => {
  let component: MediaPublicityComponent;
  let fixture: ComponentFixture<MediaPublicityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaPublicityComponent]
    });
    fixture = TestBed.createComponent(MediaPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
