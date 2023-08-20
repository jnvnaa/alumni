import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryComponent } from './literary.component';

describe('LiteraryComponent', () => {
  let component: LiteraryComponent;
  let fixture: ComponentFixture<LiteraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiteraryComponent]
    });
    fixture = TestBed.createComponent(LiteraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
