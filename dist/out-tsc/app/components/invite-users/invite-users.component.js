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
import { UsersService } from "../../services/users.service";
import { AppService } from "../../app.service";
import { AuthService } from "../../services/auth.service";
import { TimelineService } from "../../services/timeline.service";
export var InviteUsersComponent = (function () {
    function InviteUsersComponent(timelineService, route, router, users, appService, auth) {
        this.timelineService = timelineService;
        this.route = route;
        this.router = router;
        this.users = users;
        this.appService = appService;
        this.auth = auth;
        this.searchedUsers = [];
        this.timeline = null;
        this.email = '';
        this.selectedUsers = [];
    }
    InviteUsersComponent.prototype.invite = function (form) {
        var _this = this;
        var users = this.selectedUsers.join(',');
        var emails = form.value.email;
        if (users == '' && emails == '') {
            alert('please select atleast one user or enter an email address.');
        }
        else {
            this.timelineService.inviteUsers(this.timeline.Id, users, emails).subscribe(function (data) {
                alert('invitation sent successfully');
                _this.router.navigate(['/manage-logs']);
            });
        }
    };
    InviteUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var invite_users_multi_select = $('.invite-users-multi-select');
        invite_users_multi_select.select2({
            ajax: {
                url: function (params) {
                    return _this.appService.api_end_point + 'userSearch/' + _this.auth.get_session_token() + "/&SearchFor=" + params.term;
                },
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {};
                },
                processResults: function (data, params) {
                    params.page = params.page || 1;
                    var users = [];
                    $.each(data.payload.Users, function (index, user) {
                        user.id = user.UserId;
                        users.push(user);
                    });
                    return {
                        //results: data.payload.Users,
                        results: users,
                        pagination: {
                            more: (params.page * 30) < data.total_count
                        }
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            minimumInputLength: 1,
            templateResult: function (repo) {
                return "<div class='select2-result-repository__title'>" + repo.FirstName + ' ' + repo.LastName + "</div>";
            },
            templateSelection: function (repo) {
                return repo.FirstName + ' ' + repo.LastName;
            } // omitted for brevity, see the source of this page
        });
        invite_users_multi_select.on("select2:select", function (e) {
            _this.selectedUsers.push(e.params.data.UserId);
        });
        invite_users_multi_select.on("select2:unselect", function (e) {
            var index = _this.selectedUsers.indexOf(e.params.data.UserId);
            if (index > -1) {
                _this.selectedUsers.splice(index, 1);
            }
        });
        this.route.data
            .subscribe(function (data) {
            if (data.log == null) {
                _this.router.navigate(['/manage-logs']);
            }
            _this.timeline = data.log;
        }, function (error) { });
    };
    InviteUsersComponent = __decorate([
        Component({
            selector: 'app-invite-users',
            templateUrl: './invite-users.component.html',
            styleUrls: ['./invite-users.component.css']
        }), 
        __metadata('design:paramtypes', [TimelineService, ActivatedRoute, Router, UsersService, AppService, AuthService])
    ], InviteUsersComponent);
    return InviteUsersComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/invite-users/invite-users.component.js.map