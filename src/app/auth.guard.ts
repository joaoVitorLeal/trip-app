import { inject } from "@angular/core";
import { CanActivateFn, Router } from '@angular/router';
import { OauthGoogleService } from "./oauth-google.service";
import { Profile } from "./landingpage/profile.model";

// Configurações de permissão de acesso a rotas. Sendo que true para permitido e false para proibido
export const authGuard: CanActivateFn = (route, state) => {
  const googleLoginService: OauthGoogleService = inject(OauthGoogleService);
  const router: Router = inject(Router);
  const loggedProfile: Profile = googleLoginService.getLoggedProfile();

  if (loggedProfile) {
    return true;
  }
  
  router.navigate([''])
  return false;
};
