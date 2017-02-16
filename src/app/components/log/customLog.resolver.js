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
var CustomLogResolver = (function () {
    function CustomLogResolver(auth, timelineService, route, router) {
        this.auth = auth;
        this.timelineService = timelineService;
        this.route = route;
        this.router = router;
    }
    CustomLogResolver.prototype.resolve = function (route, state) {
        var auth = this.auth;
        var timelineService = this.timelineService;
        var router = this.router;
        return new Promise(function (resolve, reject) {
            if (JSON.parse(localStorage.getItem('custom_log_settings')) != null) {
                timelineService.get(auth.getUser().timelines[0].Id, auth.getUser().profile.UserId).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    resolve(null);
                });
            }
            else {
                timelineService.get(auth.getUser().timelines[0].Id, auth.getUser().profile.UserId).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    resolve(null);
                });
            }
        });
    };
    CustomLogResolver = __decorate([
        core_1.Injectable()
    ], CustomLogResolver);
    return CustomLogResolver;
}());
exports.CustomLogResolver = CustomLogResolver;
//# sourceMappingURL=customLog.resolver.js.map