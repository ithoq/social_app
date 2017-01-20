var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { AppService } from "../app.service";
import { AuthService } from "./auth.service";
export var TimelineService = (function () {
    function TimelineService(http, appService, auth) {
        this.http = http;
        this.appService = appService;
        this.auth = auth;
        this.userTimelines = [];
        this.setUserTimelines(this.auth.getUser().timelines);
    }
    TimelineService.prototype.create = function (data) {
        var querystr = "";
        for (var propertyName in data) {
            querystr += '&' + propertyName + '=' + data[propertyName];
        }
        return this.http.get(this.appService.api_end_point + 'timelineCreate/' + this.auth.get_session_token() + "/" + querystr);
    };
    TimelineService.prototype.get = function (timeline_id, user_id) {
        return this.http.get(this.appService.api_end_point + 'userTimeline/' + this.auth.get_session_token() + "/&TimelineId=" + timeline_id + "&UserId=" + user_id);
    };
    TimelineService.prototype.setUserTimelines = function (timelines) {
        this.userTimelines = timelines;
    };
    TimelineService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AppService, AuthService])
    ], TimelineService);
    return TimelineService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/services/timeline.service.js.map