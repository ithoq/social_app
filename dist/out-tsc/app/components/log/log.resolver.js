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
export var LogResolver = (function () {
    function LogResolver(auth, timelineService, route, router) {
        this.auth = auth;
        this.timelineService = timelineService;
        this.route = route;
        this.router = router;
    }
    LogResolver.prototype.resolve = function (route, state) {
        var auth = this.auth;
        var timelineService = this.timelineService;
        var router = this.router;
        return new Promise(function (resolve, reject) {
            var params = route.params;
            timelineService.get(params.id).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(null);
            });
        });
    };
    LogResolver = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AuthService, TimelineService, ActivatedRoute, Router])
    ], LogResolver);
    return LogResolver;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/log/log.resolver.js.map