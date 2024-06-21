import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      const state = params['state'];

      if (code) {
        this.authService.getToken(code).subscribe({
          next: (token: any) => {
            // Handle the token (e.g., save it in local storage)
            console.log('Token:', token);
            // Navigate to a protected route or home page
            this.router.navigate(['/my-project']);
          },
          error: (err) => {
            console.error('Error getting token:', err);
          }
        });
      } else {
        console.error('No authorization code found.');
      }
    });
  }
}
