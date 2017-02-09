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
import { ActivatedRoute, Router } from "@angular/router";
import { MediumToPostDetailService } from "../../services/medium-to-post-detail.service";
import { MediumToManageEntryService } from "../../services/medium-to-manage-entry.service";
import { ManageEntryComponent } from "../manage-entry/manage-entry.component";
import { AuthService } from "../../services/auth.service";
import { TimelineService } from "../../services/timeline.service";
import { AppService } from "../../app.service";
import { HeaderComponent } from "../header/header.component";
import * as _ from 'lodash';
export var LogComponent = (function () {
    function LogComponent(route, router, mediumToPostDetail, mediumToManageEntry, auth, timelineService, app) {
        this.route = route;
        this.router = router;
        this.mediumToPostDetail = mediumToPostDetail;
        this.mediumToManageEntry = mediumToManageEntry;
        this.auth = auth;
        this.timelineService = timelineService;
        this.app = app;
        this.timeline = null;
        this.user = null;
    }
    LogComponent.prototype.showDetail = function (entry) {
        localStorage.setItem('post', JSON.stringify(entry));
        this.router.navigate(['/post/' + entry.EntryId]);
    };
    LogComponent.prototype.modifiedDate = function (date) {
        return date.split(' ')[0];
    };
    LogComponent.prototype.timelineUpdated = function (event) {
        this.refreshLog();
    };
    LogComponent.prototype.refreshLog = function () {
        var _this = this;
        var auth = this.auth;
        var timelineService = this.timelineService;
        var timelineId = this.timeline.Id;
        return new Promise(function (resolve, reject) {
            timelineService.get(timelineId, auth.getUser().profile.UserId).subscribe(function (data) {
                _this.timeline = data.json().payload;
                resolve(true);
            }, function (error) {
                console.log(error);
                reject(false);
            });
        });
    };
    LogComponent.prototype.getEntryTypes = function (givenTypes) {
        var foundTypes = [];
        for (var _i = 0, _a = givenTypes.split(','); _i < _a.length; _i++) {
            var givenType = _a[_i];
            for (var _b = 0, _c = this.manageEntryComponent.types; _b < _c.length; _b++) {
                var hostedType = _c[_b];
                if (hostedType.value == givenType)
                    foundTypes.push(hostedType);
            }
        }
        return foundTypes;
    };
    LogComponent.prototype.showUserProfile = function (UserId) {
        var user = _.cloneDeep(this.auth.getUser().profile);
        user.UserId = UserId;
        localStorage.setItem('viewUserProfile', JSON.stringify(user));
        console.log(localStorage.getItem('viewUserProfile'));
        this.router.navigate(['/profile/' + UserId]);
    };
    LogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            if (data.log == null) {
                _this.router.navigate(['/log/custom']);
            }
            _this.timeline = data.log.json().payload;
            _this.headerComponent.title = _this.timeline.Name;
            _this.manageEntryComponent.setSelectedTimelines([_this.timeline.Id]); //seting up timeline id for auto select in add entry component
        }, function (error) { });
        this.user = this.auth.getUser().profile;
    };
    __decorate([
        ViewChild(ManageEntryComponent), 
        __metadata('design:type', Object)
    ], LogComponent.prototype, "manageEntryComponent", void 0);
    __decorate([
        ViewChild(HeaderComponent), 
        __metadata('design:type', Object)
    ], LogComponent.prototype, "headerComponent", void 0);
    LogComponent = __decorate([
        Component({
            selector: 'app-log',
            templateUrl: './log.component.html',
            styleUrls: ['./log.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router, MediumToPostDetailService, MediumToManageEntryService, AuthService, TimelineService, AppService])
    ], LogComponent);
    return LogComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/log/log.component.js.map