var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.service';
var AuthService = (function () {
    function AuthService(appService) {
        this.appService = appService;
        this.app_token = '';
        this.session_token = '';
        this.user = null;
    }
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('user');
    };
    AuthService.prototype.grab_app_key = function () {
        return new Observable(function (observable) {
            observable.next("WebClient");
        });
    };
    AuthService.prototype.get_app_token = function () {
        return localStorage.getItem('app_token');
    };
    ;
    AuthService.prototype.set_app_token = function (token) {
        localStorage.setItem('app_token', token);
        this.app_token = token;
    };
    ;
    AuthService.prototype.get_session_token = function () {
        return localStorage.getItem('session_token');
    };
    ;
    AuthService.prototype.set_session_token = function (token) {
        localStorage.setItem('session_token', token);
        this.session_token = token;
    };
    ;
    AuthService.prototype.authenticated = function () {
        return (this.getUser() != null);
    };
    AuthService.prototype.setUser = function (user) {
        localStorage.setItem('user', user);
        this.user = user;
    };
    AuthService.prototype.attempt = function () {
        return new Observable(function (observable) {
            setTimeout(function () {
                observable.next({
                    ver: "1.1",
                    cmd: "userSignin",
                    t: "1483643656",
                    success: "true",
                    payload: {
                        firstName: "",
                        lastName: "",
                        email: "test3@yahoo.com",
                        userId: "usr6tFNst5ZjFj6EvAgcHc2",
                        color: "",
                        timelines: []
                    }
                });
            }, 1000);
        });
    };
    AuthService.prototype.logout = function () {
        return new Observable(function (observable) {
            localStorage.removeItem('user');
            observable.next({ success: "true" });
        });
    };
    ;
    AuthService.prototype.ngOnInit = function () {
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AppService])
], AuthService);
export { AuthService };
//# sourceMappingURL=../../../../src/app/services/auth.service.js.map