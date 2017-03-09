// this service is a guard which protect routes from unauthenticated users.
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
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
export var AuthGuardService = (function () {
    function AuthGuardService(authService, appRouter, activatedRoute) {
        this.authService = authService;
        this.appRouter = appRouter;
        this.activatedRoute = activatedRoute;
        this.auth = authService;
        this.router = appRouter;
        this.currentRoute = activatedRoute;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.authenticated()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    AuthGuardService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AuthService, Router, ActivatedRoute])
    ], AuthGuardService);
    return AuthGuardService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/services/auth-guard.service.js.map