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
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AppService } from "../../app.service";
export var EditProfileComponent = (function () {
    function EditProfileComponent(route, location, app) {
        this.route = route;
        this.location = location;
        this.app = app;
        this.user = null;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            if (data.user == null) {
                _this.app.show_error_popup('no user found.');
                _this.location.back();
            }
            _this.user = data.user;
            console.log(_this.user);
        }, function (error) { });
    };
    EditProfileComponent = __decorate([
        Component({
            selector: 'app-edit-profile',
            templateUrl: './edit-profile.component.html',
            styleUrls: ['./edit-profile.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Location, AppService])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/edit-profile/edit-profile.component.js.map