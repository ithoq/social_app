"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var User_1 = require("../../models/User");
var RegisterComponent = (function () {
    function RegisterComponent(authenticator, rootService, httpService, appRouter, route, users) {
        this.authenticator = authenticator;
        this.rootService = rootService;
        this.httpService = httpService;
        this.route = route;
        this.users = users;
        //default values
        this.email = '';
        this.username = '';
        this.pass = '';
        this.passagain = '';
        this.auth = authenticator;
        this.appService = rootService;
        this.http = httpService;
        this.router = appRouter;
        this.user = {
            email: '',
            password: ''
        };
        // if(localStorage.getItem('user_num') == null){
        //     localStorage.setItem('user_num', '5');
        // }
        // localStorage.setItem('user_num',(parseInt(localStorage.getItem('user_num'))+1)+'');
        // this.email = 'newuser'+localStorage.getItem('user_num')+'@gmail.com';
        // this.username = 'newuser'+localStorage.getItem('user_num');
    }
    RegisterComponent.prototype.registerUser = function (form) {
        var _this = this;
        if (!this.validate(form.value)) {
            return false;
        }
        this.users.register(form.value).subscribe(function (data) {
            _this.auth.attempt({ Email: form.value.email, Password: form.value.password }).subscribe(function (data) {
                /*
                 saving the authenticated user in the localStorage
                 */
                var user = new User_1.User();
                var updatedUser = data.json().payload.User;
                for (var property in updatedUser) {
                    user[property] = updatedUser[property];
                }
                _this.auth.setUser(JSON.stringify({ profile: user, timelines: data.json().payload.Timelines }));
                if (_this.auth.getUser().timelines != null)
                    _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
                else
                    _this.router.navigate(['create-profile']);
            }, function (e) {
                _this.errors = (e.json()['error_message'] != undefined) ? e.json()['error_message'] : 'Something went wrong with the server or may be you internet connection is lost. please try a few moments later.';
            });
        }, function (e) {
            _this.errors = e.json()['error_message'];
        });
    };
    RegisterComponent.prototype.validate = function (user) {
        if (user.password != user.confirmpass) {
            this.errors = "Password did not match!";
            return false;
        }
        return true;
    };
    RegisterComponent.prototype.ngOnInit = function () {
        //this.contact = this.route.snapshot.data['contact'];
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'sa-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map