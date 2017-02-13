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
import { AuthService } from "../../services/auth.service";
import { AppService } from "../../app.service";
export var ManageProfilesComponent = (function () {
    function ManageProfilesComponent(auth, appService) {
        this.auth = auth;
        this.appService = appService;
        this.user = null;
        this.selectedImage = null;
        this.selectedThumbnail = '';
        this.formBusy = false;
        this.editMode = false;
    }
    ManageProfilesComponent.prototype.profileUpdated = function (event) {
        var userStuff = this.auth.getUser();
        userStuff.profile = event.user;
        this.auth.setUser(JSON.stringify(userStuff));
    };
    ManageProfilesComponent.prototype.ngOnInit = function () { };
    ManageProfilesComponent = __decorate([
        Component({
            selector: 'sa-create-profile',
            templateUrl: './manage-profiles.component.html',
            styleUrls: ['./manage-profiles.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, AppService])
    ], ManageProfilesComponent);
    return ManageProfilesComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/manage-profiles/manage-profiles.component.js.map