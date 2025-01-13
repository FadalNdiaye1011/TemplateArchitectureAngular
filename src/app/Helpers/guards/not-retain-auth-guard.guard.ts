import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { AuthService } from '../../Auth/services/auth.service';

export const notRetainAuthGuardGuard: CanActivateFn = (route, state) => {
  const autService = inject(AuthService);
  const router = inject(Router);

  if(autService.isAuthenticate()){
    router.navigateByUrl("");
    return false;
  }
  return true;
};
