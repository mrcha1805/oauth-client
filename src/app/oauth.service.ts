import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class OauthService {
  private tokenUrl = 'http://localhost:3000/oauth/token';
  constructor() { }

  async getToken(username: string, password: string): Promise<any> {

    const data = new URLSearchParams();
    data.append('grant_type', environment.grantsType);
    data.append('client_id', environment.clientId);
    data.append('client_secret', environment.clientSecret);
    data.append('username', username);
    data.append('password', password);

    try {
      const response = await axios.post(this.tokenUrl, data);
      return response.data;
    } catch (error) {
      console.error('Error getting token:', error);
      throw error;
    }
  }

}
