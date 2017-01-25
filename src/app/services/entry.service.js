"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var EntryService = (function () {
    function EntryService(http, appService, auth) {
        this.http = http;
        this.appService = appService;
        this.auth = auth;
    }
    EntryService.prototype.addEntry = function (entry) {
        var querystr = "";
        for (var propertyName in entry) {
            querystr += '&' + propertyName + '=' + entry[propertyName];
        }
        return this.http.get(this.appService.api_end_point + 'entryAdd/' + this.auth.get_session_token() + "/" + querystr);
    };
    EntryService = __decorate([
        core_1.Injectable()
    ], EntryService);
    return EntryService;
}());
exports.EntryService = EntryService;
//# sourceMappingURL=entry.service.js.map