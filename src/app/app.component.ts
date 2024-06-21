import { Component } from '@angular/core';
import { OauthService } from './oauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oauth-client';
  username = '';
  password = '';
  token: any;
  constructor(private oauthService: OauthService) { }
  async onSubmit(event: Event) {
    event.preventDefault();
    this.token = await this.oauthService.getToken(this.username, this.password);
    console.log(this.token)
  }
}
