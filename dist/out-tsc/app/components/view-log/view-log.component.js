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
import { AppService } from "../../app.service";
import { HeaderComponent } from "../header/header.component";
import { ManageEntryComponent } from "../manage-entry/manage-entry.component";
import { AuthService } from "../../services/auth.service";
import { Timeline } from "../../models/Timeline";
import { TimelineService } from "../../services/timeline.service";
export var ViewLogComponent = (function () {
    function ViewLogComponent(route, router, app, auth, timelineService) {
        this.route = route;
        this.router = router;
        this.app = app;
        this.auth = auth;
        this.timelineService = timelineService;
        this.timeline = null;
        this.timeline = new Timeline();
    }
    ViewLogComponent.prototype.timelineUpdated = function (event) {
        if (this.timeline.Id != '')
            this.timeline = this.app.find_obj_by_prop('Id', this.timeline.Id, this.timelineService.getAllTimelinesWithEntries());
    };
    ViewLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            if (data.log == null) {
                _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
            }
            else {
                //TODO: users array is not returned by the api yet.
                _this.timeline = data.log;
                console.log(_this.timeline);
                _this.headerComponent.title = _this.timeline.Name;
            }
        }, function (error) { });
    };
    __decorate([
        ViewChild(ManageEntryComponent), 
        __metadata('design:type', Object)
    ], ViewLogComponent.prototype, "manageEntryComponent", void 0);
    __decorate([
        ViewChild(HeaderComponent), 
        __metadata('design:type', Object)
    ], ViewLogComponent.prototype, "headerComponent", void 0);
    ViewLogComponent = __decorate([
        Component({
            selector: 'app-view-log',
            templateUrl: './view-log.component.html',
            styleUrls: ['./view-log.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router, AppService, AuthService, TimelineService])
    ], ViewLogComponent);
    return ViewLogComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/view-log/view-log.component.js.map