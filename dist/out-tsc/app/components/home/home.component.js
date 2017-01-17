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
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RightContentService } from "../../services/right-content.service";
export var HomeComponent = (function () {
    /* ----------------------- */
    function HomeComponent(auth, appRouter, rightContent) {
        this.auth = auth;
        this.appRouter = appRouter;
        this.rightContent = rightContent;
        /* map api */
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.showmap = false;
    }
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (response) {
            console.log('loggedout');
            _this.appRouter.navigate(['login']);
        }, function (error) { });
    };
    HomeComponent.prototype.asideToggle = function () {
        this.rightContent.aside_in = !this.rightContent.aside_in;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showMap = function () {
        this.showmap = !this.showmap;
    };
    HomeComponent = __decorate([
        Component({
            selector: 'sa-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, Router, RightContentService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/home/home.component.js.map