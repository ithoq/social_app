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
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { TimelineService } from "../../../services/timeline.service";
import { AppService } from "../../../app.service";
import { UsersService } from "../../../services/users.service";
import { UserStuff } from "../../../models/UserStuff";
export var AsideComponent = (function () {
    function AsideComponent(auth, appRouter, timelineService, app, usersService) {
        this.auth = auth;
        this.appRouter = appRouter;
        this.timelineService = timelineService;
        this.app = app;
        this.usersService = usersService;
    }
    AsideComponent.prototype.ngOnInit = function () {
        this.timelineService.setUserTimelines(this.auth.getUser().timelines);
    };
    AsideComponent.prototype.refreshTimelines = function () {
        var _this = this;
        this.loadingUserStuff = true;
        this.usersService.getUserTimelinesAndStuff().subscribe(function (data) {
            var mapedData = data.json().payload;
            var userStuff = new UserStuff(mapedData.User, mapedData.Timelines, mapedData.ManagedUsers);
            _this.timelineService.setUserTimelines(userStuff.timelines);
            _this.auth.setUser(JSON.stringify(userStuff));
            _this.loadingUserStuff = false;
        });
    };
    AsideComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (response) {
            _this.appRouter.navigate(['login']);
        }, function (error) { });
    };
    AsideComponent = __decorate([
        Component({
            selector: 'sa-aside',
            templateUrl: './aside.component.html',
            styleUrls: ['./aside.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, Router, TimelineService, AppService, UsersService])
    ], AsideComponent);
    return AsideComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/body/aside/aside.component.js.map