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
export var LogComponent = (function () {
    function LogComponent(route, router, mediumToPostDetail, mediumToManageEntry) {
        this.route = route;
        this.router = router;
        this.mediumToPostDetail = mediumToPostDetail;
        this.mediumToManageEntry = mediumToManageEntry;
        this.timeline = null;
    }
    LogComponent.prototype.showDetail = function (entry) {
        this.mediumToPostDetail.setPost(entry);
        this.router.navigate(['/post/' + entry.EntryId]);
    };
    LogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            if (data.log == null) {
                _this.router.navigate(['/log/custom']);
            }
            _this.timeline = data.log.json().payload;
            _this.manageEntryComponent.setSelectedTimelines([_this.timeline.Id]); //seting up timeline id for auto select in add entry component
        }, function (error) { });
    };
    __decorate([
        ViewChild(ManageEntryComponent), 
        __metadata('design:type', Object)
    ], LogComponent.prototype, "manageEntryComponent", void 0);
    LogComponent = __decorate([
        Component({
            selector: 'app-log',
            templateUrl: './log.component.html',
            styleUrls: ['./log.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router, MediumToPostDetailService, MediumToManageEntryService])
    ], LogComponent);
    return LogComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/log/log.component.js.map