import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule ,Http, Response} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './modules/app-routes.module';
import {AuthService} from './services/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import {AppService} from './app.service';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { PasswordResetPromptComponent } from './components/password-reset-prompt/password-reset-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterComponent,
    ForgotpassComponent,
    PasswordResetPromptComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, AppService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
