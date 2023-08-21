import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchrepresentativesComponent } from './batchrepresentatives.component';

describe('BatchrepresentativesComponent', () => {
  let component: BatchrepresentativesComponent;
  let fixture: ComponentFixture<BatchrepresentativesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchrepresentativesComponent]
    });
    fixture = TestBed.createComponent(BatchrepresentativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
