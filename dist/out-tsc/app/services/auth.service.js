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
import { Http } from "@angular/http";
import { AppService } from "../app.service";
import { Observable } from "rxjs";
export var AuthService = (function () {
    function AuthService(http, appService) {
        this.http = http;
        this.appService = appService;
        this.app_token = '';
        this.session_token = '';
        this.user = null;
    }
    AuthService.prototype.getUser = function () {
        return (localStorage.getItem('user') != null) ? JSON.parse(localStorage.getItem('user')) : null;
    };
    AuthService.prototype.grab_app_key = function () {
        return new Observable(function (observable) {
            observable.next("WebClient");
        });
    };
    AuthService.prototype.grab_session_token = function (app_key) {
        return this.http.get(this.appService.api_end_point + "getSession/&AppKey=" + app_key);
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
    //sets the authenticated user in the localStorage
    AuthService.prototype.setUser = function (user) {
        localStorage.setItem('user', user);
        this.user = user;
    };
    AuthService.prototype.attempt = function (credentials) {
        return this.http.get(this.appService.api_end_point + 'userSignin/' + this.get_session_token() + '/&Email=&Username=' + credentials.username + '&Pass=' + credentials.password);
    };
    //removes the user from the localStorage
    AuthService.prototype.logout = function () {
        var _this = this;
        return new Observable(function (observable) {
            localStorage.removeItem('user');
            _this.user = null;
            observable.next({ success: "true" });
        });
    };
    ;
    AuthService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AppService])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev2/src/app/services/auth.service.js.map