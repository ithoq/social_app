"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AntiAuthParentComponent = (function () {
    function AntiAuthParentComponent() {
    }
    AntiAuthParentComponent.prototype.ngOnInit = function () {
    };
    AntiAuthParentComponent = __decorate([
        core_1.Component({
            selector: 'sa-anti-auth-parent',
            templateUrl: './anti-auth-parent.component.html',
            styleUrls: ['./anti-auth-parent.component.css']
        })
    ], AntiAuthParentComponent);
    return AntiAuthParentComponent;
}());
exports.AntiAuthParentComponent = AntiAuthParentComponent;
//# sourceMappingURL=anti-auth-parent.component.js.map