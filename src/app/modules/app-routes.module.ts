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
import {PickColorComponent} from "../components/manage-profiles/pick-color/pick-color.component";
import {ProfileManagementService} from "../services/profile-management.service";
import {ProfileCreatedGuardService} from "../services/profile-created-guard.service";
import {ManageLogsComponent} from "../components/manage-logs/manage-logs.component";
import {CreateLogComponent} from "../components/create-log/create-log.component";
import {LogComponent} from "../components/log/log.component";
import {LogResolver} from "../components/log/log.resolver";
import {LogsResolver} from "../components/manage-logs/logs.resolver";
import {InviteUsersComponent} from "../components/invite-users/invite-users.component";
import {PostDetailComponent} from "../components/post-detail/post-detail.component";
import {PostResolver} from "../components/post-detail/post.resolver";
import {PostDetailGuardService} from "../services/post-detail-guard.service";
import {CreateCustomLogComponent} from "../components/create-custom-log/create-custom-log.component";
import {CustomLogResolver} from "../components/log/customLog.resolver";
import {TestComponent} from "../components/test/test.component";
import {ViewProfileComponent} from "../components/view-profile/view-profile.component";
import {ViewProfileResolver} from "../components/view-profile/view-profile.resolver";
import {ManageProfilesComponent} from "../components/manage-profiles/manage-profiles.component";
import {CreateProfileComponent} from "../components/create-profile/create-profile.component";
import {AntiProfileCreatedGuardService} from "../services/anti-profile-created-guard.service";
import {EditProfileComponent} from "../components/edit-profile/edit-profile.component";
import {CreateManagedUserComponent} from "../components/create-managed-user/create-managed-user.component";
import {InviteManagedUserComponent} from "../components/invite-managed-user/invite-managed-user.component";
import {ViewLogComponent} from "../components/view-log/view-log.component";

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
                {path: "profile/:id", resolve:{user:ViewProfileResolver}, component:ViewProfileComponent, canActivate:[ProfileCreatedGuardService]},
                {path: "profile/:id/edit", resolve:{user:ViewProfileResolver}, component:EditProfileComponent, canActivate:[ProfileCreatedGuardService]},
                {path: 'log/custom', resolve:{log:CustomLogResolver}, component: LogComponent , canActivate:[ProfileCreatedGuardService]},
                {path: 'log/:id', resolve:{log:LogResolver}, component: ViewLogComponent , canActivate:[ProfileCreatedGuardService]},
                // {path: 'log/:id', resolve:{log:LogResolver}, component: LogComponent , canActivate:[ProfileCreatedGuardService]},
                {path: 'log/:id/invite-users', resolve:{log:LogResolver}, component: InviteUsersComponent , canActivate:[ProfileCreatedGuardService]},
                {path: 'log/:id/invite-users/managed', component: InviteManagedUserComponent , canActivate:[ProfileCreatedGuardService]},
                {path: "manage-profiles", component:ManageProfilesComponent, canActivate:[ProfileCreatedGuardService]},
                {path: "create-profile", component:CreateProfileComponent, canActivate:[AntiProfileCreatedGuardService]},
                {path: "create-managed-profile", component:CreateManagedUserComponent, canActivate:[ProfileCreatedGuardService]},
                {path: "manage-logs", resolve:{logs:LogsResolver}, component:ManageLogsComponent, canActivate:[ProfileCreatedGuardService]},
                {path: "create-custom-log", component:CreateCustomLogComponent, canActivate:[ProfileCreatedGuardService]},
                {path: "pick-color", component:PickColorComponent, canActivate:[ProfileManagementService]},
                {path: "post/:id", resolve:{post:PostResolver}, component:PostDetailComponent, canActivate:[ProfileCreatedGuardService]},
                {path:'',redirectTo:"/log/custom",pathMatch:"full"}
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
  providers: [
      AuthGuardService,
      AntiAuthGuardService,
      LogsResolver,
      PasswordResetPromptGuardService,
      LogResolver,
      TokensResolver,
      PostResolver,
      ProfileCreatedGuardService,
      PostDetailGuardService,
      CustomLogResolver,
      ViewProfileResolver,
      AntiProfileCreatedGuardService
  ]
})
export class AppRoutingModule {}
