var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { AppService } from "../app.service";
import { AuthService } from "./auth.service";
export var EntryService = (function () {
    function EntryService(http, appService, auth) {
        this.http = http;
        this.appService = appService;
        this.auth = auth;
    }
    EntryService.prototype.addEntry = function (entry, files) {
        if (files === void 0) { files = {}; }
        var querystr = "";
        for (var propertyName in entry) {
            querystr += '&' + propertyName + '=' + entry[propertyName];
        }
        return this.http.post(this.appService.api_end_point + 'entryAdd/' + this.auth.get_session_token() + "/" + querystr, files);
    };
    EntryService.prototype.updateEntry = function (entry_id, entry) {
        var querystr = "";
        for (var propertyName in entry) {
            querystr += '&' + propertyName + '=' + entry[propertyName];
        }
        return this.http.get(this.appService.api_end_point + 'entryUpdate/' + this.auth.get_session_token() + "/&EntryId=" + entry_id + querystr);
    };
    EntryService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AppService, AuthService])
    ], EntryService);
    return EntryService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/services/entry.service.js.map