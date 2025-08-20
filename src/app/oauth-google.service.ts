import { inject, Injectable, signal } from '@angular/core';
import { OAuthService } from "angular-oauth2-oidc";
import { auth } from "./auth.config";
import { Router } from "@angular/router";
import { Profile } from './landingpage/profile.model';

@Injectable({
  providedIn: 'root'
})
export class OauthGoogleService {

  private oauthService: OAuthService = inject(OAuthService);
  private router: Router = inject(Router); // Redirecionar usuário para pagina de login quando realizar o logout
  profile = signal<any>(null); // Guarda os dados do perfil vindos da autenticação de qualquer tipo de provedor (Google, GitHub, etc)

  constructor() { 
    this.initConfiguration();
  }

  initConfiguration(): void {
    this.oauthService.configure(auth);
    this.oauthService.setupAutomaticSilentRefresh();// Renova os tokens em segundo plano, mantendo o usuário autenticado na aplicação, até que seja feito logout.
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .then(() => {
        if (this.oauthService.hasValidIdToken()) {
          this.profile.set(this.oauthService.getIdentityClaims());
        }
      });
  }

  login(): void {
    this.oauthService.initImplicitFlow(); // Fluxo de autenticação do Google
  }

  logout(): void {
    this.oauthService.revokeTokenAndLogout(); // Revogar todas as credenciais
    this.oauthService.logOut(); // Realizar o logout
    this.profile.set(null); // Remover o perfil
    this.router.navigate(['']); // Redireciona para rota raiz da aplicação
  }

  getLoggedProfile(): Profile | any {
    return this.profile();
  }
}
