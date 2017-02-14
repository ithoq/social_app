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
import { ActivatedRoute, Router } from "@angular/router";
import { TimelineService } from "../../services/timeline.service";
import { AppService } from "../../app.service";
import * as _ from 'lodash';
import { TimelineDetail } from "../../models/TimelineDetail";
export var ManageLogsComponent = (function () {
    function ManageLogsComponent(auth, route, app, timelineService, router) {
        this.auth = auth;
        this.route = route;
        this.app = app;
        this.timelineService = timelineService;
        this.router = router;
        this.timelines = [];
        this.create_log_modal_id = '';
        //this.timelines = this.auth.getUser().timelines;
        this.user = this.auth.getUser().profile;
    }
    ManageLogsComponent.prototype.createLog = function (form) {
        var _this = this;
        this.timelineService.create({ Name: form.value.Name }).subscribe(function (data) {
            var timelineDetails = new TimelineDetail();
            timelineDetails.CreatedByUser = _this.auth.currentUser.FirstName + ' ' + _this.auth.currentUser.LastName;
            timelineDetails.CreatedByUserId = _this.auth.currentUser.UserId;
            timelineDetails.Id = data.json().payload.TimelineId;
            timelineDetails.Name = form.value.Name;
            timelineDetails.Users = [_this.auth.currentUser];
            var currentUser = _.cloneDeep(_this.auth.getUser());
            currentUser.timelines.push({ Id: timelineDetails.Id, Name: timelineDetails.Name });
            _this.timelineService.setUserTimelines(currentUser.timelines);
            _this.auth.setUser(JSON.stringify(currentUser));
            _this.timelines.push(timelineDetails);
            $('#' + _this.create_log_modal_id).modal('hide');
        });
    };
    ManageLogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.create_log_modal_id = 'edit-log-' + this.app.unique_id();
        this.route.data
            .subscribe(function (data) {
            _this.timelines = data.logs.json().payload;
            console.log(_this.timelines);
        }, function (error) { });
    };
    ManageLogsComponent = __decorate([
        Component({
            selector: 'app-manage-logs',
            templateUrl: './manage-logs.component.html',
            styleUrls: ['./manage-logs.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, ActivatedRoute, AppService, TimelineService, Router])
    ], ManageLogsComponent);
    return ManageLogsComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/manage-logs/manage-logs.component.js.map