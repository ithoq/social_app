"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AsideComponent = (function () {
    function AsideComponent(auth, appRouter, timelineService) {
        this.auth = auth;
        this.appRouter = appRouter;
        this.timelineService = timelineService;
        this.timelines = this.auth.getUser().timelines;
    }
    AsideComponent.prototype.ngOnInit = function () {
    };
    AsideComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (response) {
            _this.appRouter.navigate(['login']);
        }, function (error) { });
    };
    AsideComponent = __decorate([
        core_1.Component({
            selector: 'sa-aside',
            templateUrl: './aside.component.html',
            styleUrls: ['./aside.component.css']
        })
    ], AsideComponent);
    return AsideComponent;
}());
exports.AsideComponent = AsideComponent;
//# sourceMappingURL=aside.component.js.map