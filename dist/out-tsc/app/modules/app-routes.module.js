var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { ForgotpassComponent } from '../components/forgotpass/forgotpass.component';
import { AntiAuthGuardService } from '../services/anti-auth-guard.service';
import { PasswordResetPromptGuardService } from '../services/password-reset-prompt-guard.service';
import { CreateNewPasswordComponent } from '../components/create-new-password/create-new-password.component';
import { PasswordResetPromptComponent } from '../components/password-reset-prompt/password-reset-prompt.component';
import { ParentComponent } from '../components/parent/parent.component';
import { TokensResolver } from "../components/parent/tokens.resolver";
import { AuthParentComponent } from "../components/auth-parent/auth-parent.component";
import { AntiAuthParentComponent } from "../components/anti-auth-parent/anti-auth-parent.component";
import { CreateProfileComponent } from "../components/create-profile/create-profile.component";
import { PickColorComponent } from "../components/create-profile/pick-color/pick-color.component";
import { ProfileManagementService } from "../services/profile-management.service";
import { ProfileCreatedGuardService } from "../services/profile-created-guard.service";
import { ManageLogsComponent } from "../components/manage-logs/manage-logs.component";
import { CreateLogComponent } from "../components/create-log/create-log.component";
import { LogComponent } from "../components/log/log.component";
import { LogResolver } from "../components/log/log.resolver";
var appRoutes = [
    {
        path: '',
        component: ParentComponent,
        resolve: {
            tokens: TokensResolver
        },
        children: [
            { path: "", component: AuthParentComponent, canActivate: [AuthGuardService], children: [
                    { path: "home", component: HomeComponent, canActivate: [ProfileCreatedGuardService] },
                    { path: 'log/:id', resolve: { log: LogResolver }, component: LogComponent },
                    { path: "manage-profile", component: CreateProfileComponent },
                    { path: "manage-logs", component: ManageLogsComponent, canActivate: [ProfileCreatedGuardService] },
                    { path: "create-log", component: CreateLogComponent, canActivate: [ProfileCreatedGuardService] },
                    { path: "pick-color", component: PickColorComponent, canActivate: [ProfileManagementService] },
                    { path: '', redirectTo: "/home", pathMatch: "full" }
                ] },
            { path: "", component: AntiAuthParentComponent, canActivate: [AntiAuthGuardService], children: [
                    { path: "login", component: LoginComponent },
                    { path: "register", component: RegisterComponent },
                    { path: "forgotpass", component: ForgotpassComponent },
                    { path: "pass-reset", component: PasswordResetPromptComponent, canActivate: [PasswordResetPromptGuardService] },
                    { path: "create-new-password", component: CreateNewPasswordComponent },
                    { path: '', redirectTo: "/login", pathMatch: "full" }
                ] }
        ]
    },
];
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(appRoutes)
            ],
            exports: [
                RouterModule
            ],
            providers: [AuthGuardService, AntiAuthGuardService, PasswordResetPromptGuardService, LogResolver, TokensResolver, ProfileCreatedGuardService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/modules/app-routes.module.js.map