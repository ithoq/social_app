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
import { Observable } from "rxjs";
import { UploadedFile } from "../models/UploadedFile";
export var EntryService = (function () {
    function EntryService(http, appService, auth) {
        this.http = http;
        this.appService = appService;
        this.auth = auth;
    }
    EntryService.prototype.sortEntriesByDate = function (entries) {
        return entries.sort(function (firstObject, secondObject) {
            var keyA = new Date(firstObject.DateStart), keyB = new Date(secondObject.DateEnd);
            if (keyA < keyB)
                return 1;
            if (keyA > keyB)
                return -1;
            return 0;
        });
    };
    EntryService.prototype.addEntry = function (entry, files) {
        if (files === void 0) { files = {}; }
        var querystr = "";
        for (var propertyName in entry) {
            querystr += '&' + propertyName + '=' + entry[propertyName];
        }
        return this.http.post(this.appService.api_end_point + 'entryAdd/' + this.auth.get_session_token() + "/" + querystr, files);
    };
    EntryService.prototype.updateEntry = function (entry_id, entry, files) {
        if (files === void 0) { files = {}; }
        var querystr = "";
        for (var propertyName in entry) {
            querystr += '&' + propertyName + '=' + entry[propertyName];
        }
        return this.http.post(this.appService.api_end_point + 'entryUpdate/' + this.auth.get_session_token() + "/&EntryId=" + entry_id + querystr, files);
    };
    EntryService.prototype.uploadImages = function (files, progress) {
        var _this = this;
        if (files === void 0) { files = {}; }
        if (progress === void 0) { progress = null; }
        return new Observable(function (observable) {
            $.ajax({
                method: 'POST',
                url: 'http://api-social.apptazer.com/api/entryFileUpload/ses012617-02d0ceae14c66a181ef92dd099e3aadb',
                dataType: 'json',
                data: files,
                processData: false,
                contentType: false,
                success: function (data) {
                    var Files = [];
                    for (var _i = 0, _a = data.payload.Files; _i < _a.length; _i++) {
                        var file = _a[_i];
                        Files.push(_this.appService.map(file, new UploadedFile()));
                    }
                    observable.next(Files);
                },
                error: function (error) {
                    observable.next({ data: error });
                },
                xhr: function () {
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener("progress", progress, false);
                    return xhr;
                },
            });
        });
    };
    EntryService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AppService, AuthService])
    ], EntryService);
    return EntryService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/services/entry.service.js.map