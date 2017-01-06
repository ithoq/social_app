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
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
var RegisterComponent = (function () {
    function RegisterComponent(authenticator, rootService, httpService, appRouter, route) {
        this.authenticator = authenticator;
        this.rootService = rootService;
        this.httpService = httpService;
        this.route = route;
        this.auth = authenticator;
        this.appService = rootService;
        this.http = httpService;
        this.router = appRouter;
        this.user = {
            email: '',
            password: ''
        };
    }
    RegisterComponent.prototype.registerUser = function (form) {
        var _this = this;
        this.http.get('http://api-social.apptazer.com/api/userRegister/&email=' + form.value.email + '&username=' + form.value.username + '&pass=' + form.value.password + '').subscribe(function (data) {
            console.log(data.json());
            _this.router.navigate(['login']);
        }, function (e) {
            _this.errors = e.json()['error-message'];
            console.log(e.json());
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Component({
        selector: 'sa-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    }),
    __metadata("design:paramtypes", [AuthService, AppService,
        Http, Router, ActivatedRoute])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=../../../../../src/app/components/register/register.component.js.map