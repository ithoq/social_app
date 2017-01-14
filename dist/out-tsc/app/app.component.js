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
import { AuthService } from './services/auth.service';
import { Router, NavigationStart } from "@angular/router";
import { RightContentService } from "./services/right-content.service";
export var AppComponent = (function () {
    function AppComponent(auth, router, rightc) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.rightc = rightc;
        this.rightContent = rightc;
        router.events.forEach(function (event) {
            if (event instanceof NavigationStart) {
                _this.rightContent.aside_in = false;
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    AppComponent = __decorate([
        Component({
            selector: 'sa-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, Router, RightContentService])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/app.component.js.map