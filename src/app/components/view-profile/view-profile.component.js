"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ViewProfileComponent = (function () {
    function ViewProfileComponent(route) {
        this.route = route;
        this.user = null;
    }
    ViewProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            if (data.user == null) {
                alert('no user found');
            } //Todo: handel this case later.
            _this.user = data.user;
        }, function (error) { });
    };
    ViewProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-view-profile',
            templateUrl: './view-profile.component.html',
            styleUrls: ['./view-profile.component.css']
        })
    ], ViewProfileComponent);
    return ViewProfileComponent;
}());
exports.ViewProfileComponent = ViewProfileComponent;
//# sourceMappingURL=view-profile.component.js.map