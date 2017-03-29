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
import { ActivatedRoute, Router } from "@angular/router";
import { AppService } from "../../app.service";
import { TimelineService } from "../../services/timeline.service";
export var EmailPreviewComponent = (function () {
    function EmailPreviewComponent(router, appService, timelineService, route) {
        this.router = router;
        this.appService = appService;
        this.timelineService = timelineService;
        this.route = route;
        this.userStuff = null;
        this.timelineId = null;
        this.sending = false;
    }
    EmailPreviewComponent.prototype.sendInvite = function (form) {
        var _this = this;
        this.sending = true;
        var users = this.userStuff.users[0].UserId;
        var emails = this.userStuff.emails;
        this.timelineService.inviteUsers(this.timelineId, users, emails, form.value.InviteMessage).subscribe(function (data) {
            _this.appService.show_success_popup('invitation sent successfully');
            _this.sending = false;
            _this.router.navigate(['/manage-logs']);
        }, function (error) {
            _this.appService.show_error_popup('Something went wrong with the server. please try again.');
            _this.sending = false;
        });
    };
    EmailPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userStuff = JSON.parse(localStorage.getItem('emails_userids_of_inviting_user'));
        if (this.userStuff == null || (this.userStuff.users.length == 0 && this.userStuff.emails == '')) {
            this.router.navigate(['/manage-logs']);
        }
        else {
            this.route.params
                .map(function (params) { return params['id']; })
                .subscribe(function (timelineId) {
                _this.timelineId = timelineId;
            });
        }
    };
    EmailPreviewComponent = __decorate([
        Component({
            selector: 'app-email-preview',
            templateUrl: './email-preview.component.html',
            styleUrls: ['./email-preview.component.css']
        }), 
        __metadata('design:paramtypes', [Router, AppService, TimelineService, ActivatedRoute])
    ], EmailPreviewComponent);
    return EmailPreviewComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/email-preview/email-preview.component.js.map