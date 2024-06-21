import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clientId = environment.clientId;
  private redirectUri = environment.redirectUri;
  constructor(private http: HttpClient, private router: Router, private oauthService: OAuthService) { }


  // Step 1: Redirect to authorization endpoint
  authorize() {
    const authUrl = `${environment.apiUrl}/oauth/authorize`;
    const params = new HttpParams()
      .set('response_type', 'code')
      .set('client_id', this.clientId)
      .set('redirect_uri', this.redirectUri)
      .set('scope', 'profile')
      .set('state', 'xyz'); // State can be used to prevent CSRF

    window.location.href = `${authUrl}?${params.toString()}`;
  }

  // Step 2: Exchange authorization code for access token
  getToken(code: string) {
    const tokenUrl = `${environment.apiUrl}/oauth/token`;
    const body = new HttpParams()
      .set('grant_type', environment.grantsType)
      .set('code', code)
      .set('redirect_uri', this.redirectUri)
      .set('client_id', this.clientId)
      .set('client_secret', environment.clientSecret);

    return this.http.post(tokenUrl, body.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  public login() {
    this.oauthService.initCodeFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  public get accessToken(): string {
    return this.oauthService.getAccessToken();
  }
}
