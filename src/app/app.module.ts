import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http} from '@angular/http';
import { AppRoutingModule } from './modules/app-routes.module';
import {AuthService} from './services/auth.service';
import {MediumToLoginService} from './services/medium-to-login.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import {AppService} from './app.service';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { PasswordResetPromptComponent } from './components/password-reset-prompt/password-reset-prompt.component';
import {MediumToPasswordResetPromptService} from './services/medium-to-password-reset-prompt.service';
import { CreateNewPasswordComponent } from './components/create-new-password/create-new-password.component';
import { ParentComponent } from './components/parent/parent.component';
import {UsersService} from "./services/users.service";
import { AuthParentComponent } from './components/auth-parent/auth-parent.component';
import { AntiAuthParentComponent } from './components/anti-auth-parent/anti-auth-parent.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { PickColorComponent } from './components/create-profile/pick-color/pick-color.component';
import {TimelineService} from "./services/timeline.service";
import {EntryService} from "./services/entry.service";
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/header/title/title.component';
import { ActionComponent } from './components/header/action/action.component';
import { BodyComponent } from './components/body/body.component';
import { AsideComponent } from './components/body/aside/aside.component';
import { BodyContentComponent } from './components/body/body-content/body-content.component';
import { BodyRightContentComponent } from './components/body/body-right-content/body-right-content.component';
import { AddEntryComponent } from './components/add-entry/add-entry.component';
import { FooterComponent } from './components/footer/footer.component';
import {ProfileManagementService} from "./services/profile-management.service";

@NgModule({
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
    AddEntryComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    AppService,
    MediumToLoginService,
    MediumToPasswordResetPromptService,
    UsersService,
    TimelineService,
    EntryService,
    ProfileManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
