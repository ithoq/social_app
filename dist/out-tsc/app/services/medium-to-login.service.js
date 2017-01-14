//this service is used to transfer data from any component to login component
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
export var MediumToLoginService = (function () {
    function MediumToLoginService() {
        this.title = {
            current: 'Riza Login',
            default: 'Riza Login'
        };
    }
    MediumToLoginService.prototype.setTitle = function (title) {
        this.title.current = title;
    };
    ;
    /*
      returns the current title from the title object
      set current title with the default one.
      basically its like a flash message. which can only be used once.
     */
    MediumToLoginService.prototype.getTitle = function () {
        var title = this.title.current;
        this.title.current = this.title.default;
        return title;
    };
    MediumToLoginService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], MediumToLoginService);
    return MediumToLoginService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev2/src/app/services/medium-to-login.service.js.map