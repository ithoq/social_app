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
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './modules/app-routes.module';
import { AuthService } from './services/auth.service';
import { MediumToLoginService } from './services/medium-to-login.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppService } from './app.service';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { PasswordResetPromptComponent } from './components/password-reset-prompt/password-reset-prompt.component';
import { MediumToPasswordResetPromptService } from './services/medium-to-password-reset-prompt.service';
import { CreateNewPasswordComponent } from './components/create-new-password/create-new-password.component';
import { ParentComponent } from './components/parent/parent.component';
import { UsersService } from "./services/users.service";
import { AuthParentComponent } from './components/auth-parent/auth-parent.component';
import { AntiAuthParentComponent } from './components/anti-auth-parent/anti-auth-parent.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { PickColorComponent } from './components/create-profile/pick-color/pick-color.component';
import { TimelineService } from "./services/timeline.service";
import { EntryService } from "./services/entry.service";
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/header/title/title.component';
import { ActionComponent } from './components/header/action/action.component';
import { BodyComponent } from './components/body/body.component';
import { AsideComponent } from './components/body/aside/aside.component';
import { BodyContentComponent } from './components/body/body-content/body-content.component';
import { BodyRightContentComponent } from './components/body/body-right-content/body-right-content.component';
import { ManageEntryComponent } from './components/manage-entry/manage-entry.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileManagementService } from "./services/profile-management.service";
import { RightContentService } from "./services/right-content.service";
import { AgmCoreModule } from "angular2-google-maps/core";
import { ManageLogsComponent } from './components/manage-logs/manage-logs.component';
import { CreateLogComponent } from './components/create-log/create-log.component';
import { LogComponent } from './components/log/log.component';
import { InviteUsersComponent } from './components/invite-users/invite-users.component';
import { AddContentBtnComponent } from './components/add-content-btn/add-content-btn.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { MediumToPostDetailService } from "./services/medium-to-post-detail.service";
import { MediumToManageEntryService } from "./services/medium-to-manage-entry.service";
import { CreateCustomLogComponent } from './components/create-custom-log/create-custom-log.component';
import { TestComponent } from './components/test/test.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                LoginComponent,
                RegisterComponent,
                RegisterComponent,
                ForgotpassComponent,
                PasswordResetPromptComponent,
                CreateNewPasswordComponent,
                ParentComponent,
                AuthParentComponent,
                AntiAuthParentComponent,
                CreateProfileComponent,
                PickColorComponent,
                HeaderComponent,
                HeaderComponent,
                TitleComponent,
                ActionComponent,
                BodyComponent,
                AsideComponent,
                BodyContentComponent,
                BodyRightContentComponent,
                ManageEntryComponent,
                FooterComponent,
                ManageLogsComponent,
                CreateLogComponent,
                LogComponent,
                InviteUsersComponent,
                AddContentBtnComponent,
                PostDetailComponent,
                CreateCustomLogComponent,
                CreateCustomLogComponent,
                TestComponent
            ],
            imports: [
                AppRoutingModule,
                BrowserModule,
                FormsModule,
                HttpModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBC4QNkQKk6p37YYHjrxWcVZ7BSQ7UZvIQ',
                    libraries: ['places']
                })
            ],
            providers: [
                AuthService,
                AppService,
                MediumToLoginService,
                MediumToPasswordResetPromptService,
                MediumToPostDetailService,
                UsersService,
                TimelineService,
                EntryService,
                ProfileManagementService,
                RightContentService,
                MediumToManageEntryService
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/app.module.js.map