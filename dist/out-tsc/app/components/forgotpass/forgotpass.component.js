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
import { MediumToPasswordResetPromptService } from '../../services/medium-to-password-reset-prompt.service';
export var ForgotpassComponent = (function () {
    function ForgotpassComponent(auth, appService, http, router, route, mediumToPasswordResetPromptService) {
        this.auth = auth;
        this.appService = appService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.mediumToPasswordResetPromptService = mediumToPasswordResetPromptService;
    }
    ;
    ForgotpassComponent.prototype.sendPasswordResetLink = function (form) {
        var _this = this;
        this.http.get(this.appService.api_end_point + 'userPassReset/' + this.auth.get_session_token() + '/&Email=' + form.value.email).subscribe(function (data) {
            /*
             giving the permissions to user so that
             he can access password reset prompt message
             */
            _this.mediumToPasswordResetPromptService.setAccessable(true);
            _this.mediumToPasswordResetPromptService.setEmail(form.value.email);
            _this.router.navigate(['pass-reset']);
        }, function (e) {
            _this.errors = e.json()['error_message'];
        });
    };
    ;
    ForgotpassComponent.prototype.ngOnInit = function () { };
    ;
    ForgotpassComponent = __decorate([
        Component({
            selector: 'sa-forgotpass',
            templateUrl: './forgotpass.component.html',
            styleUrls: ['./forgotpass.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, AppService, Http, Router, ActivatedRoute, MediumToPasswordResetPromptService])
    ], ForgotpassComponent);
    return ForgotpassComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/forgotpass/forgotpass.component.js.map