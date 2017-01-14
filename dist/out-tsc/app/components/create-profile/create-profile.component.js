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
import { UsersService } from "../../services/users.service";
import { TimelineService } from "../../services/timeline.service";
import { EntryService } from "../../services/entry.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ProfileManagementService } from "../../services/profile-management.service";
export var CreateProfileComponent = (function () {
    function CreateProfileComponent(userService, timelineService, entrySerice, auth, router, profileManagementService) {
        this.userService = userService;
        this.timelineService = timelineService;
        this.entrySerice = entrySerice;
        this.auth = auth;
        this.router = router;
        this.profileManagementService = profileManagementService;
        this.user = null;
        var profileData = this.profileManagementService.getProfileData();
        if (profileData != null) {
            this.user = profileData;
            this.user.Color = this.profileManagementService.getColor();
        }
        else {
            this.user = this.auth.getUser().profile;
        }
    }
    CreateProfileComponent.prototype.getTitle = function () {
        if (this.auth.getUser().timelines == null)
            return 'Create';
        return 'Edit';
    };
    CreateProfileComponent.prototype.getAction = function () {
        if (this.auth.getUser().timelines == null)
            return 'Add';
        return 'Save';
    };
    CreateProfileComponent.prototype.createProfile = function (form) {
        var _this = this;
        this.userService.updateSettings(form.value).subscribe(function (data) {
            _this.auth.setUser(JSON.stringify({ profile: data.json().payload.User, timelines: data.json().payload.Timelines }));
            if (_this.auth.getUser().timelines == null) {
                _this.timelineService.create({ Name: 'My Private Timeline' }).subscribe(function (data) {
                    var user = _this.auth.getUser();
                    user.timelines = [{ Id: data.json().payload.TimelineId, Name: 'My Private Timeline 5' }];
                    _this.auth.setUser(JSON.stringify(user));
                    var entry = {
                        TimelineId: data.json().payload.TimelineId,
                        DateStart: form.value.DateBirthDay,
                        Type: 'Celebrations',
                        Name: 'Birthday added'
                    };
                    _this.entrySerice.addEntry(entry).subscribe(function (data) {
                        _this.router.navigate(['/home']);
                    });
                }, function (error) { });
            }
            else {
                _this.router.navigate(['/home']);
            }
        }, function (error) {
            console.log(error.json());
        });
    };
    CreateProfileComponent.prototype.chooseColor = function (form) {
        this.profileManagementService.setProfileData(form.value);
        this.profileManagementService.setAllowColorChooser(true);
        this.router.navigate(['pick-color']);
    };
    CreateProfileComponent.prototype.ngOnInit = function () { };
    CreateProfileComponent = __decorate([
        Component({
            selector: 'sa-create-profile',
            templateUrl: './create-profile.component.html',
            styleUrls: ['./create-profile.component.css']
        }), 
        __metadata('design:paramtypes', [UsersService, TimelineService, EntryService, AuthService, Router, ProfileManagementService])
    ], CreateProfileComponent);
    return CreateProfileComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev2/src/app/components/create-profile/create-profile.component.js.map