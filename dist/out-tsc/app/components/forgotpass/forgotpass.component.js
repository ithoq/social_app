var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { AuthService } from '../../services/auth.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MediumToLoginService } from '../../services/medium-to-login.service';
import { MediumToPasswordResetPromptService } from '../../services/medium-to-password-reset-prompt.service';
var ForgotpassComponent = (function () {
    function ForgotpassComponent(authenticator, rootService, httpService, appRouter, route, mediumToLogin, mediumToPasswordResetPromptService) {
        this.authenticator = authenticator;
        this.rootService = rootService;
        this.httpService = httpService;
        this.route = route;
        this.mediumToLogin = mediumToLogin;
        this.mediumToPasswordResetPromptService = mediumToPasswordResetPromptService;
        this.auth = authenticator;
        this.appService = rootService;
        this.http = httpService;
        this.router = appRouter;
        this.user = {
            email: '',
            password: ''
        };
    }
    ;
    ForgotpassComponent.prototype.sendPasswordResetLink = function (form) {
        var _this = this;
        this.auth.grab_app_key().subscribe(function (app_key) {
            _this.auth.set_app_token(app_key);
            _this.http.get(_this.appService.api_end_point + "getSession/&AppKey=" + app_key).subscribe(function (data) {
                var session_token = data.json().payload.SessionToken;
                _this.auth.set_session_token(session_token);
                _this.http.get(_this.appService.api_end_point + 'userPassReset/' + session_token + '/&Email=' + form.value.email).subscribe(function (data) {
                    _this.mediumToPasswordResetPromptService.setAccessable(true);
                    _this.mediumToPasswordResetPromptService.setEmail(form.value.email);
                    _this.router.navigate(['pass-reset']);
                }, function (e) {
                    _this.errors = e.json()['error_message'];
                    console.log(e.json());
                });
            });
        });
    };
    ;
    ForgotpassComponent.prototype.ngOnInit = function () {
    };
    ;
    return ForgotpassComponent;
}());
ForgotpassComponent = __decorate([
    Component({
        selector: 'sa-forgotpass',
        templateUrl: './forgotpass.component.html',
        styleUrls: ['./forgotpass.component.css']
    }),
    __metadata("design:paramtypes", [AuthService, AppService,
        Http, Router, ActivatedRoute,
        MediumToLoginService,
        MediumToPasswordResetPromptService])
], ForgotpassComponent);
export { ForgotpassComponent };
//# sourceMappingURL=../../../../../src/app/components/forgotpass/forgotpass.component.js.map