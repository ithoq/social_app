import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {ForgotpassComponent} from '../components/forgotpass/forgotpass.component';
import {AntiAuthGuardService} from '../services/anti-auth-guard.service';
import {PasswordResetPromptGuardService} from '../services/password-reset-prompt-guard.service';
import { CreateNewPasswordComponent } from '../components/create-new-password/create-new-password.component';
import {PasswordResetPromptComponent} from '../components/password-reset-prompt/password-reset-prompt.component';
import {ParentComponent} from '../components/parent/parent.component';
import {TokensResolver} from "../components/parent/tokens.resolver";
import {AuthParentComponent} from "../components/auth-parent/auth-parent.component";
import {AntiAuthParentComponent} from "../components/anti-auth-parent/anti-auth-parent.component";
import {CreateProfileComponent} from "../components/create-profile/create-profile.component";
import {PickColorComponent} from "../components/create-profile/pick-color/pick-color.component";
import {ProfileManagementService} from "../services/profile-management.service";
import {ProfileCreatedGuardService} from "../services/profile-created-guard.service";

const appRoutes: Routes = [
    {
        path:'',
        component: ParentComponent,
        resolve:{
            tokens:TokensResolver
        },
        children:[
            {path: "", component:AuthParentComponent, canActivate:[AuthGuardService], children:[
                {path: "home", component:HomeComponent, canActivate:[ProfileCreatedGuardService]},
                {path: "manage-profile", component:CreateProfileComponent},
                {path: "pick-color", component:PickColorComponent, canActivate:[ProfileManagementService]},
                {path:'',redirectTo:"/home",pathMatch:"full"}
            ]},
            {path: "", component:AntiAuthParentComponent, canActivate:[AntiAuthGuardService], children:[
                {path: "login", component:LoginComponent},
                {path: "register", component:RegisterComponent},
                {path: "forgotpass", component:ForgotpassComponent},
                {path: "pass-reset", component:PasswordResetPromptComponent, canActivate: [PasswordResetPromptGuardService]},
                {path: "create-new-password", component:CreateNewPasswordComponent},
                {path:'',redirectTo:"/login",pathMatch:"full"}
            ]}
        ]
    },
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuardService, AntiAuthGuardService, PasswordResetPromptGuardService, TokensResolver, ProfileCreatedGuardService]
})
export class AppRoutingModule {}
