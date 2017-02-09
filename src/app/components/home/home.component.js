"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    /* ----------------------- */
    function HomeComponent(auth, appRouter, rightContent) {
        this.auth = auth;
        this.appRouter = appRouter;
        this.rightContent = rightContent;
        /* map api */
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.showmap = false;
    }
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (response) {
            _this.appRouter.navigate(['login']);
        }, function (error) { });
    };
    HomeComponent.prototype.asideToggle = function () {
        this.rightContent.aside_in = !this.rightContent.aside_in;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showMap = function () {
        this.showmap = !this.showmap;
    };
    HomeComponent.prototype.profileUpdating = function (event) {
        console.log(event);
    };
    HomeComponent.prototype.profileUpdated = function (event) {
        console.log(event);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'sa-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map