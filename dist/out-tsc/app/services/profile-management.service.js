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
import { Router } from "@angular/router";
export var ProfileManagementService = (function () {
    function ProfileManagementService(router) {
        this.router = router;
        this.allowColorChooser = {
            current: false,
            default: false
        };
        this.color = {
            current: null,
            default: null
        };
        this.profileData = {
            current: null,
            default: null
        };
    }
    ProfileManagementService.prototype.setAllowColorChooser = function (value) {
        this.allowColorChooser.current = value;
    };
    ;
    /*
     returns the current title from the title object
     set current title with the default one.
     basically its like a flash message. which can only be used once.
     */
    ProfileManagementService.prototype.getAllowColorChooser = function () {
        var value = this.allowColorChooser.current;
        this.allowColorChooser.current = this.allowColorChooser.default;
        return value;
    };
    ProfileManagementService.prototype.setColor = function (value) {
        this.color.current = value;
    };
    ;
    /*
     returns the current title from the title object
     set current title with the default one.
     basically its like a flash message. which can only be used once.
     */
    ProfileManagementService.prototype.getColor = function () {
        var value = this.color.current;
        this.color.current = this.color.default;
        return value;
    };
    ProfileManagementService.prototype.setProfileData = function (value) {
        this.profileData.current = value;
    };
    ;
    /*
     returns the current title from the title object
     set current title with the default one.
     basically its like a flash message. which can only be used once.
     */
    ProfileManagementService.prototype.getProfileData = function () {
        var value = this.profileData.current;
        this.profileData.current = this.profileData.default;
        return value;
    };
    ProfileManagementService.prototype.canActivate = function () {
        if (!this.getAllowColorChooser()) {
            this.router.navigate(['create-profile']);
        }
        else {
            return true;
        }
    };
    ProfileManagementService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Router])
    ], ProfileManagementService);
    return ProfileManagementService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/services/profile-management.service.js.map