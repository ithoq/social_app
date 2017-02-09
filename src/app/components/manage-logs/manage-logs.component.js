"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ManageLogsComponent = (function () {
    function ManageLogsComponent(auth, route, timelineService, app) {
        this.auth = auth;
        this.route = route;
        this.timelineService = timelineService;
        this.app = app;
        this.timelines = [];
        //this.timelines = this.auth.getUser().timelines;
        this.user = this.auth.getUser().profile;
    }
    ManageLogsComponent.prototype.removeUser = function (timelineId, userId) {
        var _this = this;
        this.timelineService.removeUsers(timelineId, userId).subscribe(function (data) {
            _this.timelineService.getUserTimelines().subscribe(function (data) {
                _this.timelines = data.json().payload;
            });
        });
    };
    ManageLogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.timelines = data.logs.json().payload;
            console.log(_this.timelines);
        }, function (error) { });
    };
    ManageLogsComponent = __decorate([
        core_1.Component({
            selector: 'app-manage-logs',
            templateUrl: './manage-logs.component.html',
            styleUrls: ['./manage-logs.component.css']
        })
    ], ManageLogsComponent);
    return ManageLogsComponent;
}());
exports.ManageLogsComponent = ManageLogsComponent;
//# sourceMappingURL=manage-logs.component.js.map