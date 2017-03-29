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
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { UsersService } from "../../services/users.service";
import { UserStuff } from "../../models/UserStuff";
import { TimelineService } from "../../services/timeline.service";
import { AppService } from "../../app.service";
export var InviteManagedUserComponent = (function () {
    function InviteManagedUserComponent(router, auth, usersService, timelineService, activatedRoute, app) {
        this.router = router;
        this.auth = auth;
        this.usersService = usersService;
        this.timelineService = timelineService;
        this.activatedRoute = activatedRoute;
        this.app = app;
        this.timelineId = '';
        this.title = '';
        this.formBusy = false;
    }
    InviteManagedUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .map(function (params) { return params['id']; })
            .subscribe(function (timelineId) {
            _this.timelineId = timelineId;
            _this.managedProfile.setAction('');
        });
    };
    InviteManagedUserComponent.prototype.saveUser = function () {
        this.managedProfile.submitForm();
    };
    InviteManagedUserComponent.prototype.profileCreated = function (event) {
        var _this = this;
        this.usersService.getUserTimelinesAndStuff().subscribe(function (data) {
            var mapedData = data.json().payload;
            var userStuff = new UserStuff(mapedData.User, mapedData.Timelines, mapedData.ManagedUsers);
            _this.auth.setUser(JSON.stringify(userStuff));
            _this.timelineService.inviteUsers(_this.timelineId, event.user.UserId, "").subscribe(function (data) {
                _this.app.show_success_popup('Managed user added successfully.');
                _this.formBusy = false;
                _this.router.navigate(['/manage-logs']);
            });
        });
    };
    InviteManagedUserComponent.prototype.profileCreating = function (event) {
        this.formBusy = true;
    };
    __decorate([
        ViewChild('managedProfile'), 
        __metadata('design:type', Object)
    ], InviteManagedUserComponent.prototype, "managedProfile", void 0);
    InviteManagedUserComponent = __decorate([
        Component({
            selector: 'app-invite-managed-user',
            templateUrl: './invite-managed-user.component.html',
            styleUrls: ['./invite-managed-user.component.css']
        }), 
        __metadata('design:paramtypes', [Router, AuthService, UsersService, TimelineService, ActivatedRoute, AppService])
    ], InviteManagedUserComponent);
    return InviteManagedUserComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/invite-managed-user/invite-managed-user.component.js.map