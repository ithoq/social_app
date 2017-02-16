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
import { AuthService } from "../../services/auth.service";
import { AppService } from "../../app.service";
export var CreateCustomLogComponent = (function () {
    function CreateCustomLogComponent(auth, app) {
        this.auth = auth;
        this.app = app;
        this.timelines = [];
        this.modes = [
            { value: 'angry', img: 'emoji-angry.png' },
            { value: 'blah', img: 'emoji-blah.png' },
            { value: 'brilliant', img: 'emoji-brilliant.png' },
            { value: 'calm', img: 'emoji-calm.png' },
            { value: 'confident', img: 'emoji-confident.png' },
            { value: 'confused', img: 'emoji-confused.png' },
            { value: 'cool', img: 'emoji-cool.png' },
            { value: 'down', img: 'emoji-down.png' },
            { value: 'embarrassed', img: 'emoji-embarrassed.png' }
        ];
        this.types = [];
        this.tags = [
            'angry', 'blah', 'brilliant', 'calm'
        ];
        this.selectedModes = ['blah'];
        this.seletedTimelines = [];
        this.selectedTypes = [];
        this.selectedTags = ['blah'];
        this.types = this.app.entryContentCategories;
    }
    CreateCustomLogComponent.prototype.isModeSelected = function (mode) {
        if (this.selectedModes.indexOf(mode) >= 0) {
            return true;
        }
        return false;
    };
    CreateCustomLogComponent.prototype.isTimelineSelected = function (timeline) {
        var alreadyExists = false;
        for (var _i = 0, _a = this.seletedTimelines; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == timeline) {
                alreadyExists = true;
            }
        }
        return alreadyExists;
    };
    CreateCustomLogComponent.prototype.isTagSelected = function (tag) {
        var alreadyExists = false;
        for (var _i = 0, _a = this.selectedTags; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == tag) {
                alreadyExists = true;
            }
        }
        return alreadyExists;
    };
    CreateCustomLogComponent.prototype.isTypeSelected = function (type) {
        if (this.selectedTypes.indexOf(type) >= 0) {
            return true;
        }
        return false;
    };
    CreateCustomLogComponent.prototype.typeChanged = function (data) {
        var parts = data.split(',');
        var alreadyExists = false;
        for (var _i = 0, _a = this.selectedTypes; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == parts[1]) {
                alreadyExists = true;
            }
        }
        if (parts[0] == 'false') {
            if (alreadyExists) {
                var index = this.selectedTypes.indexOf(parts[1]);
                if (index > -1) {
                    this.selectedTypes.splice(index, 1);
                }
            }
        }
        else {
            if (!alreadyExists) {
                this.selectedTypes.push(parts[1]);
            }
        }
    };
    CreateCustomLogComponent.prototype.modeChanged = function (data) {
        var parts = data.split(',');
        var alreadyExists = false;
        for (var _i = 0, _a = this.selectedModes; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == parts[1]) {
                alreadyExists = true;
            }
        }
        if (parts[0] == 'false') {
            if (alreadyExists) {
                var index = this.selectedModes.indexOf(parts[1]);
                if (index > -1) {
                    this.selectedModes.splice(index, 1);
                }
            }
        }
        else {
            if (!alreadyExists) {
                this.selectedModes.push(parts[1]);
            }
        }
    };
    CreateCustomLogComponent.prototype.tagChanged = function (data) {
        var parts = data.split(',');
        var alreadyExists = false;
        for (var _i = 0, _a = this.selectedTags; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == parts[1]) {
                alreadyExists = true;
            }
        }
        if (parts[0] == 'false') {
            if (alreadyExists) {
                var index = this.selectedTags.indexOf(parts[1]);
                if (index > -1) {
                    this.selectedTags.splice(index, 1);
                }
            }
        }
        else {
            if (!alreadyExists) {
                this.selectedTags.push(parts[1]);
            }
        }
    };
    CreateCustomLogComponent.prototype.timelinesChanged = function (data) {
        var parts = data.split(',');
        var alreadyExists = false;
        for (var _i = 0, _a = this.seletedTimelines; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == parts[1]) {
                alreadyExists = true;
            }
        }
        if (parts[0] == 'false') {
            if (alreadyExists) {
                var index = this.seletedTimelines.indexOf(parts[1]);
                if (index > -1) {
                    this.seletedTimelines.splice(index, 1);
                }
            }
        }
        else {
            if (!alreadyExists) {
                this.seletedTimelines.push(parts[1]);
            }
        }
    };
    CreateCustomLogComponent.prototype.selectAllTypes = function () {
        this.selectedTypes = [];
        for (var i = 0; i < this.types.length; i++) {
            this.selectedTypes.push(this.types[i].value);
        }
    };
    CreateCustomLogComponent.prototype.unselectAllTypes = function () {
        this.selectedTypes = [];
    };
    CreateCustomLogComponent.prototype.selectAllTags = function () {
        this.selectedTags = [];
        for (var i = 0; i < this.tags.length; i++) {
            this.selectedTags.push(this.tags[i]);
        }
    };
    CreateCustomLogComponent.prototype.unselectAllTags = function () {
        this.selectedTags = [];
    };
    CreateCustomLogComponent.prototype.selectAllTimelines = function () {
        this.seletedTimelines = [];
        for (var i = 0; i < this.timelines.length; i++) {
            this.seletedTimelines.push(this.timelines[i].Id);
        }
    };
    CreateCustomLogComponent.prototype.unselectAllTimelines = function () {
        this.seletedTimelines = [];
    };
    CreateCustomLogComponent.prototype.selectAllMoods = function () {
        this.selectedModes = [];
        for (var i = 0; i < this.modes.length; i++) {
            this.selectedModes.push(this.modes[i].value);
        }
    };
    CreateCustomLogComponent.prototype.unselectAllMoods = function () {
        this.selectedModes = [];
    };
    CreateCustomLogComponent.prototype.viewCustomLog = function ($event) {
        console.log(JSON.parse(localStorage.getItem('custom_log_settings')));
    };
    CreateCustomLogComponent.prototype.ngOnInit = function () {
        this.timelines = this.auth.getUser().timelines;
        /* settings up pre selected data */
        var settings = JSON.parse(localStorage.getItem('custom_log_settings'));
        if (settings != null) {
            this.selectedModes = settings.modes;
            this.selectedTypes = settings.types;
            this.selectedTags = settings.tags;
            this.seletedTimelines = settings.timelines;
        }
        /*---------------------------------*/
    };
    CreateCustomLogComponent.prototype.ngAfterViewInit = function () {
        $('.datepicker').datepicker();
    };
    CreateCustomLogComponent.prototype.ngDoCheck = function () {
        var settings = {
            modes: this.selectedModes,
            tags: this.selectedTags,
            types: this.selectedTypes,
            timelines: this.seletedTimelines,
            fromDate: $('#from-date').val(),
            toDate: $('#to-date').val()
        };
        localStorage.setItem('custom_log_settings', JSON.stringify(settings));
    };
    CreateCustomLogComponent = __decorate([
        Component({
            selector: 'app-create-custom-log',
            templateUrl: './create-custom-log.component.html',
            styleUrls: ['./create-custom-log.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, AppService])
    ], CreateCustomLogComponent);
    return CreateCustomLogComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/create-custom-log/create-custom-log.component.js.map