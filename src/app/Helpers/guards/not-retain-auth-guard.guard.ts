import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../Auth/services/auth.service';
import { inject } from '@angular/core';

export const notRetainAuthGuardGuard: CanActivateFn = (route, state) => {
  const autService = inject(AuthService);
  const router = inject(Router);

  if(autService.isAuthenticate()){
    router.navigateByUrl("");
    return false;
  }
  return true;
};
