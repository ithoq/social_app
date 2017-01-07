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
import { MediumToLoginService } from '../../services/medium-to-login.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
var LoginComponent = (function () {
    function LoginComponent(authenticator, rootService, httpService, appRouter, route, mediumToLogin) {
        this.authenticator = authenticator;
        this.rootService = rootService;
        this.httpService = httpService;
        this.route = route;
        this.mediumToLogin = mediumToLogin;
        this.auth = authenticator;
        this.appService = rootService;
        this.http = httpService;
        this.router = appRouter;
        this.title = this.mediumToLogin.getTitle();
    }
    LoginComponent.prototype.attempt = function (form) {
        var _this = this;
        this.http.get('http://api-social.apptazer.com/api/userSignin/ses09812098312/&email=&username=' + form.value.username + '&pass=' + form.value.password).subscribe(function (data) {
            console.log(data.json());
            _this.auth.set_app_token('asssbbb34ccc');
            _this.auth.set_session_token('asssbbb34ccc');
            _this.router.navigate(['home']);
        }, function (e) {
            _this.errors = (e.json()['error_message'] != undefined) ? e.json()['error_message'] : 'Something went wrong with the server or may be you internet connection is lost. please try a few moments later.';
            console.log(e.json());
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'sa-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [AuthService, AppService,
        Http, Router, ActivatedRoute,
        MediumToLoginService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=../../../../../src/app/components/login/login.component.js.map