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
import { AuthService } from "./auth.service";
export var AntiProfileCreatedGuardService = (function () {
    function AntiProfileCreatedGuardService(authService, appRouter, activatedRoute) {
        this.authService = authService;
        this.appRouter = appRouter;
        this.activatedRoute = activatedRoute;
        this.auth = authService;
        this.router = appRouter;
        this.currentRoute = activatedRoute;
    }
    AntiProfileCreatedGuardService.prototype.canActivate = function () {
        if (this.auth.getUser().timelines != null) {
            this.router.navigate(['manage-profiles']);
            return false;
        }
        return true;
    };
    AntiProfileCreatedGuardService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AuthService, Router, ActivatedRoute])
    ], AntiProfileCreatedGuardService);
    return AntiProfileCreatedGuardService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/services/anti-profile-created-guard.service.js.map