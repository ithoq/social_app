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
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
export var AsideComponent = (function () {
    function AsideComponent(auth, appRouter) {
        this.auth = auth;
        this.appRouter = appRouter;
    }
    AsideComponent.prototype.ngOnInit = function () {
    };
    AsideComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (response) {
            console.log('loggedout');
            _this.appRouter.navigate(['login']);
        }, function (error) { });
    };
    AsideComponent = __decorate([
        Component({
            selector: 'sa-aside',
            templateUrl: './aside.component.html',
            styleUrls: ['./aside.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, Router])
    ], AsideComponent);
    return AsideComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev2/src/app/components/body/aside/aside.component.js.map