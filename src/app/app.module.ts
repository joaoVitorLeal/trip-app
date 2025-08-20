import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LandingpageComponent } from './landingpage/landingpage.component'; // Fetch API para requisições HTTP
import { provideOAuthClient } from "angular-oauth2-oidc";

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideOAuthClient() // Habilitando o provedor de autenticação OAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
