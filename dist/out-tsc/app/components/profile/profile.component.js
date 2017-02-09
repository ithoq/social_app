var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from "../../models/User";
import { UsersService } from "../../services/users.service";
import { TimelineService } from "../../services/timeline.service";
import { EntryService } from "../../services/entry.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ProfileManagementService } from "../../services/profile-management.service";
import { Http } from "@angular/http";
import { AppService } from "../../app.service";
import * as _ from "lodash";
export var ProfileComponent = (function () {
    function ProfileComponent(userService, timelineService, entrySerice, auth, router, profileManagementService, http, appService) {
        this.userService = userService;
        this.timelineService = timelineService;
        this.entrySerice = entrySerice;
        this.auth = auth;
        this.router = router;
        this.profileManagementService = profileManagementService;
        this.http = http;
        this.appService = appService;
        this.profileUpdating = new EventEmitter();
        this.profileUpdated = new EventEmitter();
        this.enteringEditingMode = new EventEmitter();
        this.exitingEditingMode = new EventEmitter();
        this.selectedImage = null;
        this.selectedThumbnail = '';
        this.formBusy = false;
        this.editMode = false;
        this.user = new User();
    }
    ProfileComponent.prototype.getTitle = function () {
        return 'Profile';
    };
    ProfileComponent.prototype.getAction = function () {
        return 'Save';
    };
    ProfileComponent.prototype.enterEditMode = function () {
        this.editMode = true;
    };
    ProfileComponent.prototype.exitEditMode = function () {
        this.editMode = false;
    };
    ProfileComponent.prototype.createProfile = function (form) {
        var _this = this;
        var inputData = form.value;
        inputData.DateBirthDay = $('.datepicker').val();
        var image = null;
        if (this.selectedImage != null) {
            image = new FormData();
            image.append('Image', this.selectedImage);
        }
        this.formBusy = true;
        this.profileUpdating.emit({
            data: form.value
        });
        this.userService.updateSettings(this.getUser().UserId, inputData, image).subscribe(function (data) {
            _this.exitEditMode();
            _this.formBusy = false;
            var user = _.cloneDeep(_this.getUser());
            var updatedUser = data.json().payload.User;
            for (var property in updatedUser) {
                user[property] = updatedUser[property];
            }
            _this.setUser(user);
            _this.profileUpdated.emit({
                user: _this.getUser()
            });
        }, function (error) {
            _this.formBusy = false;
            alert('some thing went wrong with the server please try again.');
        });
    };
    ProfileComponent.prototype.loggedInUsrCanEdit = function () {
        return (this.auth.currentUser.UserId == this.getUser().UserId);
    };
    ProfileComponent.prototype.filesSelected = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            this.selectedImage = event.target.files[0];
            if (this.selectedImage.type == 'image/jpeg') {
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.selectedThumbnail = e.target.result;
                };
                reader.readAsDataURL(this.selectedImage);
            }
            else {
                alert('only jpeg images are allowed');
            }
        }
    };
    ProfileComponent.prototype.chooseColor = function (form) {
        var user = this.getUser();
        for (var property in form.value) {
            user[property] = form.value[property];
        }
        var data = {
            user: user,
            selectedImage: this.selectedImage,
            selectedThumbnail: this.selectedThumbnail,
            DateBirthDay: $('.datepicker').val()
        };
        this.profileManagementService.setProfileData(data);
        this.profileManagementService.setAllowColorChooser(true);
        this.router.navigate(['pick-color']);
    };
    ProfileComponent.prototype.chooseFile = function () {
        jQuery('#profile-img-chooser').click();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var profileData = this.profileManagementService.getProfileData();
        if (profileData != null) {
            this.enterEditMode();
            this.user = profileData.user;
            this.user.Color = this.profileManagementService.getColor();
            this.selectedThumbnail = profileData.selectedThumbnail;
            this.selectedImage = profileData.selectedImage;
            this.user.DateBirthDay = profileData.DateBirthDay;
        }
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        $('.datepicker').datepicker();
    };
    ProfileComponent.prototype.setUser = function (user) {
        this.user = user;
    };
    ProfileComponent.prototype.getUser = function () {
        return this.user;
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "profileUpdating", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "profileUpdated", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "enteringEditingMode", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "exitingEditingMode", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', User)
    ], ProfileComponent.prototype, "user", void 0);
    ProfileComponent = __decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }), 
        __metadata('design:paramtypes', [UsersService, TimelineService, EntryService, AuthService, Router, ProfileManagementService, Http, AppService])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/profile/profile.component.js.map