import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const rt = inject(Router);

  if(auth.isLoggedIn())
  {
    return true;
  }
  else
  {
    rt.navigate(["login"]);

    return false;
  }
};
