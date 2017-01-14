/**
 * Created by officeaccount on 11/01/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { AuthService } from "../../services/auth.service";
export var TokensResolver = (function () {
    function TokensResolver(auth) {
        this.auth = auth;
    }
    TokensResolver.prototype.resolve = function (route, state) {
        var auth = this.auth;
        var set_app_token = new Promise(function (resolve, reject) {
            if (auth.get_app_token() == null) {
                auth.grab_app_key().subscribe(function (app_key) {
                    auth.set_app_token(app_key);
                    resolve(app_key);
                }, function (error) { reject(error); });
            }
            else {
                resolve(auth.get_app_token());
            }
        });
        return set_app_token.then(function (app_key) {
            return new Promise(function (resolve, reject) {
                if (auth.get_session_token() == null) {
                    auth.grab_session_token(auth.get_app_token()).subscribe(//fetching the session token from api
                    function (data) {
                        var session_token = data.json().payload.SessionToken;
                        auth.set_session_token(session_token);
                        resolve(session_token);
                    }, function (error) {
                        reject(error);
                    });
                }
                else {
                    resolve(auth.get_session_token());
                }
            });
        }, function (error) {
            return error;
        });
    };
    TokensResolver = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AuthService])
    ], TokensResolver);
    return TokensResolver;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev2/src/app/components/parent/tokens.resolver.js.map