var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { AppService } from "../../app.service";
export var CustomLogResolver = (function () {
    function CustomLogResolver(auth, app) {
        this.auth = auth;
        this.app = app;
    }
    CustomLogResolver.prototype.resolve = function (route, state) {
        return new Promise(function (resolve, reject) {
            var customLogString = localStorage.getItem('custom_log');
            if (customLogString != null) {
                resolve(JSON.parse(LZString.decompress(customLogString)));
            }
            else {
                resolve(null);
            }
        });
    };
    CustomLogResolver = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AuthService, AppService])
    ], CustomLogResolver);
    return CustomLogResolver;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/view-log/custom-log.resolver.js.map