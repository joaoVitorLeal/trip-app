import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from "rxjs";
import { OauthGoogleService } from '../../oauth-google.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  props: LayoutProps = { title: 'Trip App', subtitle: 'Explore, dream and create memories everywhere' };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private googleLoginService: OauthGoogleService
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(() => this.activatedRoute.firstChild !== null),
        map(() => this.extractLayoutProps())
      )
      .subscribe( (props: LayoutProps) => this.props = props );
  }

  private extractLayoutProps(): LayoutProps {
    let childRoute = this.activatedRoute.firstChild;
    while (childRoute?.firstChild) {
      childRoute = childRoute.firstChild;
    }
    return childRoute?.snapshot.data as LayoutProps; // Capturando o objeto 'data' e convertendo-o para LayoutProps
  }

  logout(): void {
    this.googleLoginService.logout();
  }
}
