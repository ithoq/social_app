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
import { AuthService } from "./auth.service";
export var UsersService = (function () {
    function UsersService(http, appService, auth) {
        this.http = http;
        this.appService = appService;
        this.auth = auth;
    }
    UsersService.prototype.register = function (user) {
        return this.http.get(this.appService.api_end_point + 'userRegister/' + this.auth.get_session_token() + '/&Email=' + user.email + '&Username=' + user.username + '&Pass=' + user.password + '');
    };
    UsersService.prototype.updateSettings = function (settings, image) {
        if (image === void 0) { image = null; }
        var querystr = "";
        for (var propertyName in settings) {
            querystr += '&' + propertyName + '=' + settings[propertyName];
        }
        return this.http.post(this.appService.api_end_point + 'userSettings/' + this.auth.get_session_token() + "/" + querystr, image);
    };
    UsersService.prototype.searchByKeyword = function (keyword) {
        if (keyword === void 0) { keyword = ""; }
        return this.http.get(this.appService.api_end_point + 'userSearch/' + this.auth.get_session_token() + "/&SearchFor=" + keyword);
    };
    UsersService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AppService, AuthService])
    ], UsersService);
    return UsersService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/services/users.service.js.map