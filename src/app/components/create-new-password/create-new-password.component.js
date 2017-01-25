"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CreateNewPasswordComponent = (function () {
    function CreateNewPasswordComponent(http, router, mediumToLogin) {
        this.http = http;
        this.router = router;
        this.mediumToLogin = mediumToLogin;
    }
    CreateNewPasswordComponent.prototype.createNewPassword = function (form) {
        this.mediumToLogin.setTitle('Your Riza password has been reset.');
        this.router.navigate(['login']);
    };
    CreateNewPasswordComponent.prototype.ngOnInit = function () { };
    CreateNewPasswordComponent = __decorate([
        core_1.Component({
            selector: 'sa-create-new-password',
            templateUrl: './create-new-password.component.html',
            styleUrls: ['./create-new-password.component.css']
        })
    ], CreateNewPasswordComponent);
    return CreateNewPasswordComponent;
}());
exports.CreateNewPasswordComponent = CreateNewPasswordComponent;
//# sourceMappingURL=create-new-password.component.js.map