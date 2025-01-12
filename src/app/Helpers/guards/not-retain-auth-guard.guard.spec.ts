import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notRetainAuthGuardGuard } from './not-retain-auth-guard.guard';

describe('notRetainAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notRetainAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
