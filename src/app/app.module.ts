import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { HomeComponent } from './home/home.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { environment } from 'src/environments/environment';
import { AuthConfig, OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AuthCallbackOidcComponent } from './auth-callback-oidc/auth-callback-oidc.component';
import { LoginComponent } from './login/login.component';

const authConfig: AuthConfig = {
  issuer: environment.apiUrl,
  redirectUri: environment.redirectUri,
  clientId: environment.clientId,
  dummyClientSecret: environment.clientSecret,
  responseType: 'code',
  scope: 'profile', // Adjust scope as necessary
  showDebugInformation: true,
  requireHttps: false,
};

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent,
    HomeComponent,
    MyProjectComponent,
    AuthCallbackOidcComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
