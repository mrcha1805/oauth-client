import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { HomeComponent } from './home/home.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { AuthCallbackOidcComponent } from './auth-callback-oidc/auth-callback-oidc.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'callback', component: AuthCallbackComponent },
  { path: 'home', component: HomeComponent },
  { path: 'my-project', component: MyProjectComponent },
  { path: 'callback-oidc', component: AuthCallbackOidcComponent },
  { path: 'login', component: LoginComponent }
  // Other routes...
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
