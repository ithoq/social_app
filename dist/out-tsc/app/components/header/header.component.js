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
export var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = '';
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var toggleBtn = $('.mainnav-toggle');
        //alert(toggleBtn);
        //  $(document).on('click', '.mainnav-toggle', function(e){
        toggleBtn.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var niftyContainer = $('#container');
            var niftyWindow = $(window);
            var widnowwidth = niftyWindow.width();
            if (widnowwidth > 767) {
                niftyContainer.toggleClass('mainnav-lg mainnav-sm');
            }
            else {
                niftyContainer.toggleClass('mainnav-sm mainnav-in');
            }
        });
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'sa-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/header/header.component.js.map