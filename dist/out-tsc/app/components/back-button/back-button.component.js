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
export var BackButtonComponent = (function () {
    function BackButtonComponent() {
    }
    BackButtonComponent.prototype.ngOnInit = function () {
    };
    BackButtonComponent.prototype.goBack = function () {
        window.history.back();
    };
    BackButtonComponent = __decorate([
        Component({
            selector: 'app-back-button',
            templateUrl: './back-button.component.html',
            styleUrls: ['./back-button.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BackButtonComponent);
    return BackButtonComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/back-button/back-button.component.js.map