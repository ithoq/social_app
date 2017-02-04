"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TimelineService = (function () {
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
    TimelineService.prototype.getUserTimelines = function () {
        return this.http.get(this.appService.api_end_point + 'timelineDetails/' + this.auth.get_session_token() + "/");
    };
    TimelineService.prototype.setUserTimelines = function (timelines) {
        this.userTimelines = timelines;
    };
    TimelineService.prototype.inviteUsers = function (timelineId, users, emails) {
        return this.http.get(this.appService.api_end_point + 'timelineInviteUsers/' + this.auth.get_session_token() + "/&TimelineId=" + timelineId + "&InviteUsers=" + users + "&InviteEmails=" + emails);
    };
    TimelineService.prototype.removeUsers = function (timelineId, users) {
        return this.http.get(this.appService.api_end_point + 'timelineInviteUsers/' + this.auth.get_session_token() + "/&TimelineId=" + timelineId + "&RemoveUsers=" + users);
    };
    TimelineService = __decorate([
        core_1.Injectable()
    ], TimelineService);
    return TimelineService;
}());
exports.TimelineService = TimelineService;
//# sourceMappingURL=timeline.service.js.map