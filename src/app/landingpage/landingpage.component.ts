import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { OauthGoogleService } from '../oauth-google.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  
  profile: Profile | undefined;

  constructor(private router: Router, private googleLoginService: OauthGoogleService) { }

  navigate() {
    this.router.navigate(['/pages/gallery']);
  }

  googleLogin(): void {
    this.googleLoginService.login();
   }

  isLoggedIn(): boolean {
    const googleUserData = this.googleLoginService.getLoggedProfile();
    this.profile = googleUserData;
    return !!this.profile;
  }
}
