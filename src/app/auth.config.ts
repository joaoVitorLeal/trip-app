import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "../environments/environment";

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com', // Verifica a validade da credencial
    redirectUri: window.location.origin,
    clientId: environment.oauth.googleClientId,
    scope: 'openid profile email', // Quais dados do cliente teremos acesso
    strictDiscoveryDocumentValidation: false
};