"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_routes_module_1 = require('./modules/app-routes.module');
var auth_service_1 = require('./services/auth.service');
var medium_to_login_service_1 = require('./services/medium-to-login.service');
var app_component_1 = require('./app.component');
var home_component_1 = require('./components/home/home.component');
var login_component_1 = require('./components/login/login.component');
var app_service_1 = require('./app.service');
var register_component_1 = require('./components/register/register.component');
var forgotpass_component_1 = require('./components/forgotpass/forgotpass.component');
var password_reset_prompt_component_1 = require('./components/password-reset-prompt/password-reset-prompt.component');
var medium_to_password_reset_prompt_service_1 = require('./services/medium-to-password-reset-prompt.service');
var create_new_password_component_1 = require('./components/create-new-password/create-new-password.component');
var parent_component_1 = require('./components/parent/parent.component');
var users_service_1 = require("./services/users.service");
var auth_parent_component_1 = require('./components/auth-parent/auth-parent.component');
var anti_auth_parent_component_1 = require('./components/anti-auth-parent/anti-auth-parent.component');
var pick_color_component_1 = require('./components/manage-profiles/pick-color/pick-color.component');
var timeline_service_1 = require("./services/timeline.service");
var entry_service_1 = require("./services/entry.service");
var header_component_1 = require('./components/header/header.component');
var title_component_1 = require('./components/header/title/title.component');
var action_component_1 = require('./components/header/action/action.component');
var body_component_1 = require('./components/body/body.component');
var aside_component_1 = require('./components/body/aside/aside.component');
var body_content_component_1 = require('./components/body/body-content/body-content.component');
var body_right_content_component_1 = require('./components/body/body-right-content/body-right-content.component');
var manage_entry_component_1 = require('./components/manage-entry/manage-entry.component');
var footer_component_1 = require('./components/footer/footer.component');
var profile_management_service_1 = require("./services/profile-management.service");
var right_content_service_1 = require("./services/right-content.service");
var core_2 = require("angular2-google-maps/core");
var manage_logs_component_1 = require('./components/manage-logs/manage-logs.component');
var create_log_component_1 = require('./components/create-log/create-log.component');
var log_component_1 = require('./components/log/log.component');
var invite_users_component_1 = require('./components/invite-users/invite-users.component');
var add_content_btn_component_1 = require('./components/add-content-btn/add-content-btn.component');
var post_detail_component_1 = require('./components/post-detail/post-detail.component');
var medium_to_post_detail_service_1 = require("./services/medium-to-post-detail.service");
var medium_to_manage_entry_service_1 = require("./services/medium-to-manage-entry.service");
var create_custom_log_component_1 = require('./components/create-custom-log/create-custom-log.component');
var test_component_1 = require('./components/test/test.component');
var profile_component_1 = require('./components/profile/profile.component');
var view_profile_component_1 = require('./components/view-profile/view-profile.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                register_component_1.RegisterComponent,
                forgotpass_component_1.ForgotpassComponent,
                password_reset_prompt_component_1.PasswordResetPromptComponent,
                create_new_password_component_1.CreateNewPasswordComponent,
                parent_component_1.ParentComponent,
                auth_parent_component_1.AuthParentComponent,
                anti_auth_parent_component_1.AntiAuthParentComponent,
                CreateProfileComponent,
                pick_color_component_1.PickColorComponent,
                header_component_1.HeaderComponent,
                header_component_1.HeaderComponent,
                title_component_1.TitleComponent,
                action_component_1.ActionComponent,
                body_component_1.BodyComponent,
                aside_component_1.AsideComponent,
                body_content_component_1.BodyContentComponent,
                body_right_content_component_1.BodyRightContentComponent,
                manage_entry_component_1.ManageEntryComponent,
                footer_component_1.FooterComponent,
                manage_logs_component_1.ManageLogsComponent,
                create_log_component_1.CreateLogComponent,
                log_component_1.LogComponent,
                invite_users_component_1.InviteUsersComponent,
                add_content_btn_component_1.AddContentBtnComponent,
                post_detail_component_1.PostDetailComponent,
                create_custom_log_component_1.CreateCustomLogComponent,
                create_custom_log_component_1.CreateCustomLogComponent,
                test_component_1.TestComponent,
                profile_component_1.ProfileComponent,
                view_profile_component_1.ViewProfileComponent
            ],
            imports: [
                app_routes_module_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBC4QNkQKk6p37YYHjrxWcVZ7BSQ7UZvIQ',
                    libraries: ['places']
                })
            ],
            providers: [
                auth_service_1.AuthService,
                app_service_1.AppService,
                medium_to_login_service_1.MediumToLoginService,
                medium_to_password_reset_prompt_service_1.MediumToPasswordResetPromptService,
                medium_to_post_detail_service_1.MediumToPostDetailService,
                users_service_1.UsersService,
                timeline_service_1.TimelineService,
                entry_service_1.EntryService,
                profile_management_service_1.ProfileManagementService,
                right_content_service_1.RightContentService,
                medium_to_manage_entry_service_1.MediumToManageEntryService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map