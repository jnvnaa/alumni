import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export const nonameGuard: CanActivateFn = (route, state) => {
  
  const auth = inject(AuthService);
  const rt = inject(Router);

  if(auth.isNameSet())
  {
    return true;
  }
  else if(!auth.isLoggedIn())
  {
    rt.navigate(["login"]);

    return false;
  }
  else
  {
    rt.navigate(["alumni/profile"]);

    return false;
  }

};
