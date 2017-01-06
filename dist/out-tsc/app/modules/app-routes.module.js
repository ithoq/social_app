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
import { PasswordResetPromptComponent } from '../components/password-reset-prompt/password-reset-prompt.component';
var appRoutes = [
    { path: "home", component: HomeComponent, canActivate: [AuthGuardService] },
    {
        path: "login", component: LoginComponent, canActivate: [AntiAuthGuardService]
    },
    { path: "register", component: RegisterComponent, canActivate: [AntiAuthGuardService] },
    { path: "forgotpass", component: ForgotpassComponent, canActivate: [AntiAuthGuardService] },
    { path: "pass-reset", component: PasswordResetPromptComponent, canActivate: [AntiAuthGuardService] },
    { path: '', redirectTo: "/home", pathMatch: "full" }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(appRoutes)
        ],
        exports: [
            RouterModule
        ],
        providers: [AuthGuardService, AntiAuthGuardService]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=../../../../src/app/modules/app-routes.module.js.map