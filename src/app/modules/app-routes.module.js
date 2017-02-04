"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var home_component_1 = require('../components/home/home.component');
var login_component_1 = require('../components/login/login.component');
var register_component_1 = require('../components/register/register.component');
var auth_guard_service_1 = require('../services/auth-guard.service');
var forgotpass_component_1 = require('../components/forgotpass/forgotpass.component');
var anti_auth_guard_service_1 = require('../services/anti-auth-guard.service');
var password_reset_prompt_guard_service_1 = require('../services/password-reset-prompt-guard.service');
var create_new_password_component_1 = require('../components/create-new-password/create-new-password.component');
var password_reset_prompt_component_1 = require('../components/password-reset-prompt/password-reset-prompt.component');
var parent_component_1 = require('../components/parent/parent.component');
var tokens_resolver_1 = require("../components/parent/tokens.resolver");
var auth_parent_component_1 = require("../components/auth-parent/auth-parent.component");
var anti_auth_parent_component_1 = require("../components/anti-auth-parent/anti-auth-parent.component");
var create_profile_component_1 = require("../components/create-profile/create-profile.component");
var pick_color_component_1 = require("../components/create-profile/pick-color/pick-color.component");
var profile_management_service_1 = require("../services/profile-management.service");
var profile_created_guard_service_1 = require("../services/profile-created-guard.service");
var manage_logs_component_1 = require("../components/manage-logs/manage-logs.component");
var create_log_component_1 = require("../components/create-log/create-log.component");
var log_component_1 = require("../components/log/log.component");
var log_resolver_1 = require("../components/log/log.resolver");
var logs_resolver_1 = require("../components/manage-logs/logs.resolver");
var invite_users_component_1 = require("../components/invite-users/invite-users.component");
var post_detail_component_1 = require("../components/post-detail/post-detail.component");
var post_resolver_1 = require("../components/post-detail/post.resolver");
var post_detail_guard_service_1 = require("../services/post-detail-guard.service");
var appRoutes = [
    {
        path: '',
        component: parent_component_1.ParentComponent,
        resolve: {
            tokens: tokens_resolver_1.TokensResolver
        },
        children: [
            { path: "", component: auth_parent_component_1.AuthParentComponent, canActivate: [auth_guard_service_1.AuthGuardService], children: [
                    { path: "home", component: home_component_1.HomeComponent, canActivate: [profile_created_guard_service_1.ProfileCreatedGuardService] },
                    { path: 'log/:id', resolve: { log: log_resolver_1.LogResolver }, component: log_component_1.LogComponent },
                    { path: 'log/:id/invite-users', resolve: { log: log_resolver_1.LogResolver }, component: invite_users_component_1.InviteUsersComponent },
                    { path: "manage-profile", component: create_profile_component_1.CreateProfileComponent },
                    { path: "manage-logs", resolve: { logs: logs_resolver_1.LogsResolver }, component: manage_logs_component_1.ManageLogsComponent, canActivate: [profile_created_guard_service_1.ProfileCreatedGuardService] },
                    { path: "create-log", component: create_log_component_1.CreateLogComponent, canActivate: [profile_created_guard_service_1.ProfileCreatedGuardService] },
                    { path: "pick-color", component: pick_color_component_1.PickColorComponent, canActivate: [profile_management_service_1.ProfileManagementService] },
                    { path: "post/:id", resolve: { post: post_resolver_1.PostResolver }, component: post_detail_component_1.PostDetailComponent, canActivate: [post_detail_guard_service_1.PostDetailGuardService] },
                    { path: '', redirectTo: "/home", pathMatch: "full" }
                ] },
            { path: "", component: anti_auth_parent_component_1.AntiAuthParentComponent, canActivate: [anti_auth_guard_service_1.AntiAuthGuardService], children: [
                    { path: "login", component: login_component_1.LoginComponent },
                    { path: "register", component: register_component_1.RegisterComponent },
                    { path: "forgotpass", component: forgotpass_component_1.ForgotpassComponent },
                    { path: "pass-reset", component: password_reset_prompt_component_1.PasswordResetPromptComponent, canActivate: [password_reset_prompt_guard_service_1.PasswordResetPromptGuardService] },
                    { path: "create-new-password", component: create_new_password_component_1.CreateNewPasswordComponent },
                    { path: '', redirectTo: "/login", pathMatch: "full" }
                ] }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [
                auth_guard_service_1.AuthGuardService,
                anti_auth_guard_service_1.AntiAuthGuardService,
                logs_resolver_1.LogsResolver,
                password_reset_prompt_guard_service_1.PasswordResetPromptGuardService,
                log_resolver_1.LogResolver,
                tokens_resolver_1.TokensResolver,
                post_resolver_1.PostResolver,
                profile_created_guard_service_1.ProfileCreatedGuardService,
                post_detail_guard_service_1.PostDetailGuardService
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routes.module.js.map