import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {ForgotpassComponent} from '../components/forgotpass/forgotpass.component';
import {AntiAuthGuardService} from '../services/anti-auth-guard.service';
import {PasswordResetPromptComponent} from '../components/password-reset-prompt/password-reset-prompt.component';

const appRoutes: Routes = [
  {path: "home", component:HomeComponent, canActivate:[AuthGuardService]},
  {
    path: "login", component:LoginComponent, canActivate: [AntiAuthGuardService]
  },
  {path: "register", component:RegisterComponent, canActivate: [AntiAuthGuardService]},
  {path: "forgotpass", component:ForgotpassComponent, canActivate: [AntiAuthGuardService]},
  {path: "pass-reset", component:PasswordResetPromptComponent, canActivate: [AntiAuthGuardService]},
  {path:'',redirectTo:"/home",pathMatch:"full"}
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuardService, AntiAuthGuardService]
})
export class AppRoutingModule {}
