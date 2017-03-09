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
import { TimelineService } from "../../services/timeline.service";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
export var CreateLogComponent = (function () {
    function CreateLogComponent(timelineService, router, auth) {
        this.timelineService = timelineService;
        this.router = router;
        this.auth = auth;
    }
    CreateLogComponent.prototype.create = function (form) {
        var _this = this;
        this.timelineService.create({ Name: form.value.Name }).subscribe(function (data) {
            var user = _this.auth.getUser();
            user.timelines.push({ Id: data.json().payload.TimelineId, Name: form.value.Name });
            _this.timelineService.setUserTimelines(user.timelines);
            _this.auth.setUser(JSON.stringify(user));
            _this.router.navigate(['manage-logs']);
        });
    };
    CreateLogComponent.prototype.ngOnInit = function () {
    };
    CreateLogComponent = __decorate([
        Component({
            selector: 'app-create-log',
            templateUrl: './create-log.component.html',
            styleUrls: ['./create-log.component.css']
        }), 
        __metadata('design:paramtypes', [TimelineService, Router, AuthService])
    ], CreateLogComponent);
    return CreateLogComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/create-log/create-log.component.js.map