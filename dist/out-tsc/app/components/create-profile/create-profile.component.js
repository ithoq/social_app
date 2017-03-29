var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { UsersService } from "../../services/users.service";
import { TimelineService } from "../../services/timeline.service";
import { EntryService } from "../../services/entry.service";
import { Router } from "@angular/router";
import { ProfileManagementService } from "../../services/profile-management.service";
import { Http } from "@angular/http";
import { AppService } from "../../app.service";
import { Post } from "../../models/Post";
export var CreateProfileComponent = (function () {
    function CreateProfileComponent(userService, timelineService, entrySerice, auth, router, profileManagementService, http, appService) {
        this.userService = userService;
        this.timelineService = timelineService;
        this.entrySerice = entrySerice;
        this.auth = auth;
        this.router = router;
        this.profileManagementService = profileManagementService;
        this.http = http;
        this.appService = appService;
        this.editMode = true;
        this.formBusy = false;
        this.title = 'Create Profile';
    }
    CreateProfileComponent.prototype.profileUpdating = function (event) {
        this.formBusy = true;
    };
    CreateProfileComponent.prototype.createProfile = function () {
        this.profile.submitForm();
    };
    CreateProfileComponent.prototype.profileUpdated = function (event) {
        var _this = this;
        var inputData = event.user;
        var userStuff = this.auth.getUser();
        userStuff.profile = event.user;
        this.auth.setUser(JSON.stringify(userStuff));
        if (this.auth.getUser().timelines.length == 0) {
            this.timelineService.create({ Name: 'My Private Timeline' }).subscribe(function (data) {
                var user = _this.auth.getUser();
                user.timelines = [{ Id: data.json().payload.TimelineId, Name: 'My Private Timeline' }];
                _this.auth.setUser(JSON.stringify(user));
                var entry = new Post();
                entry.DateStart = inputData.DateBirthDay;
                entry.Type = 'Celebration';
                entry.Name = 'Birthday';
                entry['TimelineId'] = data.json().payload.TimelineId;
                //adding the first entry
                var querystr = "";
                for (var propertyName in entry) {
                    querystr += '&' + propertyName + '=' + entry[propertyName];
                }
                _this.http.get(_this.appService.api_end_point + 'entryAdd/' + _this.auth.get_session_token() + "/" + querystr).subscribe(function (data) {
                    _this.formBusy = false;
                    _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
                });
            }, function (error) {
                _this.formBusy = false;
            });
        }
        else {
            this.formBusy = false;
            this.appService.show_error_popup();
        }
    };
    CreateProfileComponent.prototype.someThingWentWrong = function (event) {
        this.appService.show_error_popup(event.error.msg);
        this.formBusy = false;
    };
    CreateProfileComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        ViewChild('profile'), 
        __metadata('design:type', Object)
    ], CreateProfileComponent.prototype, "profile", void 0);
    CreateProfileComponent = __decorate([
        Component({
            selector: 'app-create-profile',
            templateUrl: './create-profile.component.html',
            styleUrls: ['./create-profile.component.css']
        }), 
        __metadata('design:paramtypes', [UsersService, TimelineService, EntryService, AuthService, Router, ProfileManagementService, Http, AppService])
    ], CreateProfileComponent);
    return CreateProfileComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/create-profile/create-profile.component.js.map