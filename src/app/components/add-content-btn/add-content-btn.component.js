"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddContentBtnComponent = (function () {
    function AddContentBtnComponent(rightContent) {
        this.rightContent = rightContent;
        this.content = 'Add Content';
    }
    AddContentBtnComponent.prototype.asideToggle = function () {
        this.rightContent.aside_in = !this.rightContent.aside_in;
    };
    AddContentBtnComponent.prototype.ngOnInit = function () {
    };
    AddContentBtnComponent = __decorate([
        core_1.Component({
            selector: 'app-add-content-btn',
            templateUrl: './add-content-btn.component.html',
            styleUrls: ['./add-content-btn.component.css']
        })
    ], AddContentBtnComponent);
    return AddContentBtnComponent;
}());
exports.AddContentBtnComponent = AddContentBtnComponent;
//# sourceMappingURL=add-content-btn.component.js.map