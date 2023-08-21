import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nonameGuard } from './noname.guard';

describe('nonameGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nonameGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
