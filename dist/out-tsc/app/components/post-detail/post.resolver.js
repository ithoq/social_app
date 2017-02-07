/**
 * Created by officeaccount on 11/01/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { TimelineService } from "../../services/timeline.service";
import { AppService } from "../../app.service";
import { MediumToPostDetailService } from "../../services/medium-to-post-detail.service";
export var PostResolver = (function () {
    function PostResolver(appService, auth, timelineService, route, router, mediumToPostDetail) {
        this.appService = appService;
        this.auth = auth;
        this.timelineService = timelineService;
        this.route = route;
        this.router = router;
        this.mediumToPostDetail = mediumToPostDetail;
    }
    PostResolver.prototype.resolve = function (route, state) {
        var mediumToPostDetail = this.mediumToPostDetail;
        return new Promise(function (resolve, reject) {
            resolve(mediumToPostDetail.getPost());
        });
    };
    PostResolver = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AppService, AuthService, TimelineService, ActivatedRoute, Router, MediumToPostDetailService])
    ], PostResolver);
    return PostResolver;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/post-detail/post.resolver.js.map