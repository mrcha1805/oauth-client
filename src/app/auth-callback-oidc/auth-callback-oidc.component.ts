import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-auth-callback-oidc',
  templateUrl: './auth-callback-oidc.component.html',
  styleUrls: ['./auth-callback-oidc.component.scss']
})
export class AuthCallbackOidcComponent implements OnInit {
  constructor(private oauthService: OAuthService, private router: Router) { }

  ngOnInit(): void {
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
      if (this.oauthService.hasValidAccessToken()) {
        this.router.navigate(['/my-project']);
      }
    });
  }
}
