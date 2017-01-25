"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MediumToPasswordResetPromptService = (function () {
    function MediumToPasswordResetPromptService() {
        this.accessable = { current: false, default: false };
        this.email = { current: '', default: '' };
    }
    MediumToPasswordResetPromptService.prototype.setAccessable = function (accessable) {
        this.accessable.current = accessable;
    };
    ;
    /*
      returns the current accessable from the email object
      set current accessable with the default one.
      basically its like a flash message. which can only be used once.
     */
    MediumToPasswordResetPromptService.prototype.getAccessable = function () {
        var accessable = this.accessable.current;
        this.accessable.current = this.accessable.default;
        return accessable;
    };
    MediumToPasswordResetPromptService.prototype.setEmail = function (email) {
        this.email.current = email;
    };
    ;
    /*
      returns the current email from the email object
      set current email with the default one.
      basically its like a flash message. which can only be used once.
     */
    MediumToPasswordResetPromptService.prototype.getEmail = function () {
        var email = this.email.current;
        this.email.current = this.email.default;
        return email;
    };
    MediumToPasswordResetPromptService = __decorate([
        core_1.Injectable()
    ], MediumToPasswordResetPromptService);
    return MediumToPasswordResetPromptService;
}());
exports.MediumToPasswordResetPromptService = MediumToPasswordResetPromptService;
//# sourceMappingURL=medium-to-password-reset-prompt.service.js.map