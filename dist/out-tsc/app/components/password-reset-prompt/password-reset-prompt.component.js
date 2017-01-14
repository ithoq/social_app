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
import { MediumToPasswordResetPromptService } from '../../services/medium-to-password-reset-prompt.service';
export var PasswordResetPromptComponent = (function () {
    function PasswordResetPromptComponent(mediumToPasswordResetPromptService) {
        this.mediumToPasswordResetPromptService = mediumToPasswordResetPromptService;
        this.email = mediumToPasswordResetPromptService.getEmail();
    }
    PasswordResetPromptComponent.prototype.ngOnInit = function () {
    };
    PasswordResetPromptComponent = __decorate([
        Component({
            selector: 'sa-password-reset-prompt',
            templateUrl: './password-reset-prompt.component.html',
            styleUrls: ['./password-reset-prompt.component.css']
        }), 
        __metadata('design:paramtypes', [MediumToPasswordResetPromptService])
    ], PasswordResetPromptComponent);
    return PasswordResetPromptComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/password-reset-prompt/password-reset-prompt.component.js.map