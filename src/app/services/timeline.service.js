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
        if (user_id === void 0) { user_id = ''; }
        return this.http.get(this.appService.api_end_point + 'userTimeline/' + this.auth.get_session_token() + "/&TimelineId=" + timeline_id);
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
    TimelineService.prototype.update = function (timelineId, data) {
        var querystr = "";
        for (var propertyName in data) {
            querystr += '&' + propertyName + '=' + data[propertyName];
        }
        return this.http.get(this.appService.api_end_point + 'timelineUpdate/' + this.auth.get_session_token() + "/&TimelineId=" + timelineId + querystr);
    };
    TimelineService.prototype.getAllTimelinesWithEntries = function () {
        var timelines = JSON.parse(LZString.decompress(localStorage.getItem('allTimelinesWithEntries')));
        return (timelines == null) ? [] : timelines;
    };
    TimelineService.prototype.pushTimelineWithEntires = function (timeline) {
        var existingTimelines = this.getAllTimelinesWithEntries();
        existingTimelines = this.appService.remove_obj_by_property('Id', timeline.Id, existingTimelines);
        existingTimelines.push(timeline);
        localStorage.setItem('allTimelinesWithEntries', LZString.compress(JSON.stringify(existingTimelines)));
        return existingTimelines;
    };
    TimelineService.prototype.pushEntryInTimeline = function (timelineId, entry) {
        var timeline = this.appService.find_obj_by_prop('Id', timelineId, this.getAllTimelinesWithEntries());
        if (timeline != null) {
            var entries = timeline.Entries;
            entries = this.appService.remove_obj_by_property('EntryId', entry.EntryId, timeline.Entries);
            entries.push(entry);
            timeline.Entries = entries;
            this.pushTimelineWithEntires(timeline);
        }
        return this.getAllTimelinesWithEntries();
    };
    TimelineService.prototype.removeEntriesFromTimelines = function (timlines, givenEntries) {
        var timelines = this.getAllTimelinesWithEntries();
        var updatedTimelines = [];
        for (var _i = 0, timelines_1 = timelines; _i < timelines_1.length; _i++) {
            var timeline = timelines_1[_i];
            var entries = [];
            for (var _a = 0, _b = timeline.Entries; _a < _b.length; _a++) {
                var timelineEntry = _b[_a];
                for (var _c = 0, givenEntries_1 = givenEntries; _c < givenEntries_1.length; _c++) {
                    var givenEntry = givenEntries_1[_c];
                    if (timelineEntry.EntryId != givenEntry) {
                        entries.push(timelineEntry);
                    }
                }
            }
            timeline.Entries = entries;
            updatedTimelines.push(timeline);
        }
        localStorage.setItem('allTimelinesWithEntries', LZString.compress(JSON.stringify(updatedTimelines)));
        return updatedTimelines;
    };
    TimelineService = __decorate([
        core_1.Injectable()
    ], TimelineService);
    return TimelineService;
}());
exports.TimelineService = TimelineService;
//# sourceMappingURL=timeline.service.js.map