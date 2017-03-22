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
    function ProfileComponent(userService, timelineService, entrySerice, auth, router, profileManagementService, http, appService, users) {
        this.userService = userService;
        this.timelineService = timelineService;
        this.entrySerice = entrySerice;
        this.auth = auth;
        this.router = router;
        this.profileManagementService = profileManagementService;
        this.http = http;
        this.appService = appService;
        this.users = users;
        this.profileUpdating = new EventEmitter();
        this.profileUpdated = new EventEmitter();
        this.enteringEditingMode = new EventEmitter();
        this.exitingEditingMode = new EventEmitter();
        this.someThingWentWrong = new EventEmitter();
        this.colors = [
            'aquamarine', 'beachblue', 'bloodred', 'brownbear', 'chai',
            'cream', 'creamsicleorange', 'forestgreen', 'graywhale', 'lemonyellow', 'mintgreen',
            'bloodorange', 'pinkrose', 'plum', 'raspberry', 'seagreen', 'skyblue', 'slateblue'
        ];
        this.selectedImage = null;
        this.selectedThumbnail = '';
        this.newUser = { email: '', password: '' };
        this.color_picker_modal_id = '';
        this.photo_chooser_id = '';
        this.uploadedFile = null;
        this.uploadingFile = false;
        this.user = new User();
        this.editMode = false;
        this.manualControls = false;
        this.formBusy = false;
        this.newAccount = false;
        this.title = 'Profile';
        this.managedProfile = false;
    }
    ProfileComponent.prototype.getTitle = function () {
        return this.title;
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
        var profileData = {
            FirstName: inputData.FirstName,
            LastName: inputData.LastName,
            NickName: inputData.NickName,
            DateBirthDay: $('.datepicker').val(),
            address: inputData.address,
            Color: inputData.Color,
            ManagedByUserId: this.auth.currentUser.UserId,
            ManagedByUserName: ((this.getUser().UserId == this.auth.currentUser.UserId) ?
                inputData.FirstName + ' ' + inputData.LastName :
                this.auth.currentUser.FirstName + ' ' + this.auth.currentUser.LastName),
            ManagedByUserNickName: ((this.getUser().UserId == this.auth.currentUser.UserId) ?
                inputData.NickName :
                this.auth.currentUser.Nickname),
        };
        if (this.uploadedFile != null) {
            profileData['ImageId'] = this.uploadedFile.Id;
        }
        var newAcountData = {
            Email: inputData.email,
            Pass: inputData.password,
            Username: ''
        };
        var createProfile = new Promise(function (resolve, reject) {
            if (_this.newAccount) {
                _this.users.createManagedUser(newAcountData, _this.auth.currentUser.UserId).subscribe(function (data) {
                    _this.user.UserId = data.json().payload.UserId;
                    resolve(true);
                }, function (e) {
                    var error = (e.json()['error_message'] != undefined) ? e.json()['error_message'] : 'Something went wrong with the server or may be you internet connection is lost. please try a few moments later.';
                    reject(error);
                });
            }
            else {
                resolve(true);
            }
        });
        createProfile.then(function (_promise_data) {
            var image = null;
            if (_this.selectedImage != null) {
                image = new FormData();
                image.append('Image', _this.selectedImage);
            }
            if (!_this.manualControls)
                _this.formBusy = true;
            _this.profileUpdating.emit({
                data: form.value
            });
            _this.userService.updateSettings(_this.managedProfile, _this.getUser().UserId, profileData).subscribe(function (data) {
                if (!_this.manualControls) {
                    _this.formBusy = false;
                    _this.exitEditMode();
                }
                var updatedUser = data.json().payload.User;
                _this.setUser(_this.appService.map(updatedUser, new User()));
                _this.profileUpdated.emit({
                    user: _this.getUser()
                });
            }, function (error) {
                _this.someThingWentWrong.emit({
                    error: { msg: 'some thing went wrong with the server' }
                });
                if (!_this.manualControls) {
                    _this.formBusy = false;
                    alert('some thing went wrong with the server please try again.');
                }
            });
        }, function (error) {
            alert(error);
        });
    };
    ProfileComponent.prototype.loggedInUsrCanEdit = function () {
        return (this.auth.currentUser.UserId == this.getUser().UserId || this.newAccount || this.auth.currentUser.UserId == this.getUser().ManagedByUserId);
    };
    ProfileComponent.prototype.filesSelected = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            this.selectedImage = event.target.files[0];
            if (this.selectedImage.type == 'image/jpeg') {
                this.uploadingFile = true;
                var files = new FormData();
                files.append('Image', event.target.files[0]);
                this.userService.uploadUserImage(files, function (evt) { }).subscribe(function (files) {
                    _this.uploadedFile = files[0];
                    _this.selectedThumbnail = _this.uploadedFile.ThumbURL;
                    _this.uploadingFile = false;
                });
            }
            else {
                alert('only jpeg images are allowed');
            }
        }
    };
    ProfileComponent.prototype.chooseFile = function (event) {
        jQuery('#' + this.photo_chooser_id).click();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.color_picker_modal_id = 'color-picker-' + this.appService.unique_id();
        this.photo_chooser_id = 'profile-img-chooser-' + this.appService.unique_id();
        this.user = _.cloneDeep(this.user);
        if (this.newAccount) {
            this.managedProfile = true;
        }
        var managedUsers = _.cloneDeep(this.auth.getUser().managedUsers);
        for (var _i = 0, managedUsers_1 = managedUsers; _i < managedUsers_1.length; _i++) {
            var managedUser = managedUsers_1[_i];
            if (managedUser.UserId == this.getUser().UserId) {
                this.managedProfile = true;
            }
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
    ProfileComponent.prototype.colorPicked = function (event) {
        $('#' + this.color_picker_modal_id).modal('hide');
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
        Output(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "someThingWentWrong", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', User)
    ], ProfileComponent.prototype, "user", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], ProfileComponent.prototype, "editMode", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], ProfileComponent.prototype, "manualControls", void 0);
    __decorate([
        //used to control loaders etc by parent component
        Input(), 
        __metadata('design:type', Boolean)
    ], ProfileComponent.prototype, "formBusy", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], ProfileComponent.prototype, "newAccount", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ProfileComponent.prototype, "title", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], ProfileComponent.prototype, "managedProfile", void 0);
    ProfileComponent = __decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }), 
        __metadata('design:paramtypes', [UsersService, TimelineService, EntryService, AuthService, Router, ProfileManagementService, Http, AppService, UsersService])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/profile/profile.component.js.map