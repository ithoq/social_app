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
import { ProfileManagementService } from "../../../services/profile-management.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
export var PickColorComponent = (function () {
    function PickColorComponent(profileService, router, _location) {
        this.profileService = profileService;
        this.router = router;
        this._location = _location;
        this.colors = [
            'aquamarine',
            'beachblue',
            'bloodred',
            'brownbear',
            'chai',
            'cream',
            'creamsicleorange',
            'pinkrose',
            'plum',
            'bloodred',
            'brownbear',
            'cream'
        ];
    }
    PickColorComponent.prototype.clicked = function (color) {
        this.profileService.setColor(color);
        this._location.back();
    };
    PickColorComponent.prototype.ngOnInit = function () { };
    PickColorComponent = __decorate([
        Component({
            selector: 'sa-pick-color',
            templateUrl: './pick-color.component.html',
            styleUrls: ['./pick-color.component.css']
        }), 
        __metadata('design:paramtypes', [ProfileManagementService, Router, Location])
    ], PickColorComponent);
    return PickColorComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/manage-profiles/pick-color/pick-color.component.js.map