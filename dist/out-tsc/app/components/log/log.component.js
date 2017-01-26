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
import { ActivatedRoute, Router } from "@angular/router";
import { MediumToPostDetailService } from "../../services/medium-to-post-detail.service";
export var LogComponent = (function () {
    function LogComponent(route, router, mediumToPostDetail) {
        this.route = route;
        this.router = router;
        this.mediumToPostDetail = mediumToPostDetail;
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
                _this.router.navigate(['/home']);
            }
            _this.timeline = data.log.json().payload;
            console.log(_this.timeline);
        }, function (error) { });
    };
    LogComponent = __decorate([
        Component({
            selector: 'app-log',
            templateUrl: './log.component.html',
            styleUrls: ['./log.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router, MediumToPostDetailService])
    ], LogComponent);
    return LogComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/log/log.component.js.map