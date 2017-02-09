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
import { Http } from "@angular/http";
import { TimelineService } from "../../services/timeline.service";
import { EntryService } from "../../services/entry.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ProfileManagementService } from "../../services/profile-management.service";
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
        this.user = null;
        this.selectedImage = null;
        this.selectedThumbnail = '';
        this.formBusy = false;
        this.editMode = false;
        var profileData = this.profileManagementService.getProfileData();
        if (profileData != null) {
            this.user = profileData.user;
            this.user.Color = this.profileManagementService.getColor();
            this.selectedThumbnail = profileData.selectedThumbnail;
            this.selectedImage = profileData.selectedImage;
            this.user.DateBirthDay = profileData.DateBirthDay;
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
    CreateProfileComponent.prototype.enterEditMode = function () {
        this.editMode = true;
    };
    CreateProfileComponent.prototype.exitEditMode = function () {
        this.editMode = false;
    };
    CreateProfileComponent.prototype.createProfile = function (form) {
        var _this = this;
        var inputData = form.value;
        inputData.DateBirthDay = $('.datepicker').val();
        var image = null;
        if (this.selectedImage != null) {
            image = new FormData();
            image.append('Image', this.selectedImage);
        }
        this.formBusy = true;
        this.userService.updateSettings(inputData, image).subscribe(function (data) {
            var updatedUser = data.json().payload.User;
            for (var property in updatedUser) {
                _this.user[property] = updatedUser[property];
            }
            _this.auth.setUser(JSON.stringify({ profile: _this.user, timelines: _this.auth.getUser().timelines }));
            if (_this.auth.getUser().timelines == null) {
                _this.timelineService.create({ Name: 'My Private Timeline' }).subscribe(function (data) {
                    var user = _this.auth.getUser();
                    user.timelines = [{ Id: data.json().payload.TimelineId, Name: 'My Private Timeline' }];
                    _this.auth.setUser(JSON.stringify(user));
                    var entry = new Post();
                    entry.DateStart = inputData.DateBirthDay;
                    entry.Type = 'Celebration';
                    entry.Name = 'Birthday added';
                    entry['TimelineId'] = data.json().payload.TimelineId;
                    //adding the first entry
                    var querystr = "";
                    for (var propertyName in entry) {
                        querystr += '&' + propertyName + '=' + entry[propertyName];
                    }
                    _this.http.get(_this.appService.api_end_point + 'entryAdd/' + _this.auth.get_session_token() + "/" + querystr).subscribe(function (data) {
                        _this.formBusy = false;
                        _this.exitEditMode();
                        _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
                    });
                }, function (error) {
                    _this.formBusy = false;
                });
            }
            else {
                _this.formBusy = false;
                _this.exitEditMode();
            }
        }, function (error) {
            _this.formBusy = false;
            alert('some thing went wrong with the server please try again.');
        });
    };
    CreateProfileComponent.prototype.loggedInUsrCanEdit = function (user) {
        return (this.auth.currentUser.UserId == user.UserId);
    };
    CreateProfileComponent.prototype.filesSelected = function (event) {
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
    CreateProfileComponent.prototype.chooseColor = function (form) {
        var user = this.auth.currentUser;
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
    CreateProfileComponent.prototype.chooseFile = function () {
        jQuery('#profile-img-chooser').click();
    };
    CreateProfileComponent.prototype.ngOnInit = function () {
    };
    CreateProfileComponent.prototype.ngAfterViewInit = function () {
        $('.datepicker').datepicker();
    };
    CreateProfileComponent = __decorate([
        Component({
            selector: 'sa-create-profile',
            templateUrl: './create-profile.component.html',
            styleUrls: ['./create-profile.component.css']
        }), 
        __metadata('design:paramtypes', [UsersService, TimelineService, EntryService, AuthService, Router, ProfileManagementService, Http, AppService])
    ], CreateProfileComponent);
    return CreateProfileComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/manage-profiles/create-profile.component.js.map