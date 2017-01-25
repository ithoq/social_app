/**
 * Created by officeaccount on 11/01/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LogsResolver = (function () {
    function LogsResolver(auth, timelineService, route, router) {
        this.auth = auth;
        this.timelineService = timelineService;
        this.route = route;
        this.router = router;
    }
    LogsResolver.prototype.resolve = function (route, state) {
        var timelineService = this.timelineService;
        return new Promise(function (resolve, reject) {
            timelineService.getUserTimelines().subscribe(function (data) {
                resolve(data);
            });
        });
    };
    LogsResolver = __decorate([
        core_1.Injectable()
    ], LogsResolver);
    return LogsResolver;
}());
exports.LogsResolver = LogsResolver;
//# sourceMappingURL=logs.resolver.js.map