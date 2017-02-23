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
import { AppService } from '../../app.service';
import { AuthService } from '../../services/auth.service';
import { MediumToLoginService } from '../../services/medium-to-login.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserStuff } from "../../models/UserStuff";
import { TimelineService } from "../../services/timeline.service";
export var LoginComponent = (function () {
    function LoginComponent(authenticator, rootService, httpService, appRouter, route, mediumToLogin, timelineService) {
        this.authenticator = authenticator;
        this.rootService = rootService;
        this.httpService = httpService;
        this.route = route;
        this.mediumToLogin = mediumToLogin;
        this.timelineService = timelineService;
        this.auth = authenticator;
        this.appService = rootService;
        this.http = httpService;
        this.router = appRouter;
        this.title = this.mediumToLogin.getTitle();
    }
    LoginComponent.prototype.attempt = function (form) {
        var _this = this;
        this.auth.attempt(form.value).subscribe(function (data) {
            console.log(data); //TODO: please map this data te prevent issues if timeline is null
            /*
             saving the authenticated user in the localStorage
             */
            var mapedData = data.json().payload;
            console.log(mapedData);
            var userStuff = new UserStuff(mapedData.User, mapedData.Timelines, mapedData.ManagedUsers);
            _this.auth.setUser(JSON.stringify(userStuff));
            _this.timelineService.flushAllTimelinesFromLocalStorage();
            if (_this.auth.getUser().timelines.length > 0) {
                _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
            }
            else
                _this.router.navigate(['create-profile']);
        }, function (e) {
            _this.errors = (e.json()['error_message'] != undefined) ? e.json()['error_message'] : 'Something went wrong with the server or may be you internet connection is lost. please try a few moments later.';
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        //this.contact = this.route.snapshot.data['contact'];
    };
    LoginComponent = __decorate([
        Component({
            selector: 'sa-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, AppService, Http, Router, ActivatedRoute, MediumToLoginService, TimelineService])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/login/login.component.js.map