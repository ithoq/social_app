var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { TimelineDetail } from "../../models/TimelineDetail";
import { AppService } from "../../app.service";
import { User } from "../../models/User";
import { AuthService } from "../../services/auth.service";
import { TimelineService } from "../../services/timeline.service";
import { Router } from "@angular/router";
import * as _ from 'lodash';
import { UsersService } from "../../services/users.service";
export var TimelineDetailComponent = (function () {
    function TimelineDetailComponent(app, auth, timelineService, router, usersService) {
        this.app = app;
        this.auth = auth;
        this.timelineService = timelineService;
        this.router = router;
        this.usersService = usersService;
        this.edit_log_modal_id = '';
        this.timeline = new TimelineDetail();
    }
    TimelineDetailComponent.prototype.currentUserCanEditThis = function (user) {
        return (this.usersService.findMangedUserById(user.UserId) != null ||
            user.UserId == this.auth.getUser().profile.UserId);
    };
    TimelineDetailComponent.prototype.currentUserCanDeleteThis = function (user) {
        return (this.usersService.findMangedUserById(user.UserId) != null ||
            this.timeline.CreatedByUserId == this.auth.getUser().profile.UserId);
    };
    TimelineDetailComponent.prototype.updateLog = function (form) {
        var _this = this;
        this.timelineService.update(this.timeline.Id, form.value).subscribe(function (data) {
            _this.timeline.Name = form.value.Name;
            $('#' + _this.edit_log_modal_id).modal('hide');
        }, function (error) {
            alert('some thing went wrong');
            $('#' + _this.edit_log_modal_id).modal('hide');
        });
    };
    TimelineDetailComponent.prototype.editUser = function (user) {
        var userfound = this.usersService.findMangedUserById(user.UserId);
        var actualUser = new User();
        for (var property in userfound) {
            actualUser[property] = userfound[property];
        }
        //*****************************//
        localStorage.setItem('viewUserProfile', JSON.stringify(actualUser));
        this.router.navigate(['/profile/' + userfound.UserId + '/edit']);
    };
    TimelineDetailComponent.prototype.removeUser = function (userId) {
        var _this = this;
        if (userId == this.auth.currentUser.UserId) {
            alert('Can not remove yourself');
        }
        else {
            //TODO: Couldn't test it at the time for some reason.
            this.timelineService.removeUsers(this.timeline.Id, userId).subscribe(function (data) {
                var updatedUsers = [];
                var existingUsers = _.cloneDeep(_this.timeline.Users);
                for (var _i = 0, existingUsers_1 = existingUsers; _i < existingUsers_1.length; _i++) {
                    var user = existingUsers_1[_i];
                    if (user.UserId != userId)
                        updatedUsers.push(user);
                }
                _this.timeline.Users = updatedUsers;
                alert('user deleted');
            }, function (error) {
                alert('some thing went wrong the server');
            });
        }
    };
    TimelineDetailComponent.prototype.ngOnInit = function () {
        this.edit_log_modal_id = 'edit-log-' + this.app.unique_id();
        console.log(this.timeline);
    };
    __decorate([
        Input(), 
        __metadata('design:type', TimelineDetail)
    ], TimelineDetailComponent.prototype, "timeline", void 0);
    TimelineDetailComponent = __decorate([
        Component({
            selector: 'app-timeline-detail',
            templateUrl: './timeline-detail.component.html',
            styleUrls: ['./timeline-detail.component.css']
        }), 
        __metadata('design:paramtypes', [AppService, AuthService, TimelineService, Router, UsersService])
    ], TimelineDetailComponent);
    return TimelineDetailComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/timeline-detail/timeline-detail.component.js.map