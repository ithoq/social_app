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
import { Timeline } from "../../models/Timeline";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { TimelineService } from "../../services/timeline.service";
import { EntryService } from "../../services/entry.service";
export var CreateCustomLogComponent = (function () {
    function CreateCustomLogComponent(auth, app, route, location, router, timelineService, entryService) {
        this.auth = auth;
        this.app = app;
        this.route = route;
        this.location = location;
        this.router = router;
        this.timelineService = timelineService;
        this.entryService = entryService;
        this.timelines = [];
        this.entries = [];
        this.settings = null;
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
    CreateCustomLogComponent.prototype.passedThroughTimelinesFilter = function (settingsTimelines, entryTimelines) {
        var passed = false;
        for (var _i = 0, settingsTimelines_1 = settingsTimelines; _i < settingsTimelines_1.length; _i++) {
            var t_id = settingsTimelines_1[_i];
            if (this.app.property_in_array('Id', t_id, entryTimelines)) {
                passed = true;
            }
        }
        return passed;
    };
    CreateCustomLogComponent.prototype.passedThroughTypesFilter = function (settingsTypes, entryTypes) {
        var passed = false;
        var entryTypesArr = entryTypes.split(',');
        for (var _i = 0, settingsTypes_1 = settingsTypes; _i < settingsTypes_1.length; _i++) {
            var t_id = settingsTypes_1[_i];
            if (this.app.in_array(t_id, entryTypesArr)) {
                passed = true;
            }
        }
        return passed;
    };
    CreateCustomLogComponent.prototype.passedThroughModesFilter = function (settingsModes, entryModes) {
        var passed = false;
        var entryModesArr = entryModes.split(',');
        for (var _i = 0, settingsModes_1 = settingsModes; _i < settingsModes_1.length; _i++) {
            var t_id = settingsModes_1[_i];
            if (this.app.in_array(t_id, entryModesArr)) {
                passed = true;
            }
        }
        return passed;
    };
    CreateCustomLogComponent.prototype.passedThroughDatesFilter = function (fromDate, toDate, entry) {
        var from = (fromDate != '') ? new Date(fromDate) : new Date('01/01/1971');
        var entryFrom = new Date(entry.DateStart);
        if (toDate == '')
            return (entryFrom >= from);
        else {
            var to = new Date(toDate);
            return (entryFrom >= from && entryFrom <= to);
        }
    };
    CreateCustomLogComponent.prototype.filterThroughEntries = function (entries, settings) {
        var filteredEntries = [];
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            var filtrationTestPassed = false;
            if (((settings.timelines.length > 0 ? this.passedThroughTimelinesFilter(settings.timelines, entry.Timelines) : true))
                && this.passedThroughDatesFilter(settings.fromDate, settings.toDate, entry)
                && ((settings.types.length > 0 ? this.passedThroughTypesFilter(settings.types, entry.Type) : true))
                && ((settings.modes.length > 0 ? this.passedThroughModesFilter(settings.modes, entry.Mode) : true))) {
                filtrationTestPassed = true;
            }
            if (filtrationTestPassed) {
                filteredEntries.push(entry);
            }
        }
        return filteredEntries; //TODO: apply filteres here.
    };
    CreateCustomLogComponent.prototype.getUniquePosts = function (entries) {
        var uniquePosts = [];
        for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
            var entry = entries_2[_i];
            if (!this.app.property_in_array('EntryId', entry.EntryId, uniquePosts)) {
                uniquePosts.push(entry);
            }
        }
        return uniquePosts; //TODO: niquie these posts.
    };
    CreateCustomLogComponent.prototype.getFinalizedEntries = function () {
        var timelines = this.timelineService.getAllTimelinesWithEntries();
        var entries = [];
        for (var _i = 0, timelines_1 = timelines; _i < timelines_1.length; _i++) {
            var timeline = timelines_1[_i];
            var filteredEntries = this.filterThroughEntries(timeline.Entries, this.settings);
            for (var _a = 0, filteredEntries_1 = filteredEntries; _a < filteredEntries_1.length; _a++) {
                var entry = filteredEntries_1[_a];
                entries.push(entry);
            }
        }
        return this.entryService.sortEntriesByDate(this.getUniquePosts(entries));
    };
    CreateCustomLogComponent.prototype.createCustomTimeline = function () {
        var timeline = new Timeline();
        timeline.CreatedByUser = this.auth.currentUser.FirstName + ' ' + this.auth.currentUser.LastName;
        timeline.CreatedByUserId = this.auth.currentUser.UserId;
        timeline.Name = 'Custom Log';
        timeline.Entries = this.getFinalizedEntries();
        return timeline;
    };
    CreateCustomLogComponent.prototype.viewCustomLog = function ($event) {
        var customTimeline = this.createCustomTimeline();
        localStorage.setItem('custom_log', LZString.compress(JSON.stringify(customTimeline)));
        this.router.navigate(['/log/custom']);
    };
    CreateCustomLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.entries = data.entries;
            _this.timelines = _this.auth.getUser().timelines;
            _this.settings = JSON.parse(localStorage.getItem('custom_log_settings'));
            if (_this.settings != null) {
                _this.selectedModes = _this.settings.modes;
                _this.selectedTypes = _this.settings.types;
                _this.selectedTags = _this.settings.tags;
                _this.seletedTimelines = _this.settings.timelines;
                $('#from-date').val(_this.settings.fromDate);
                $('#to-date').val(_this.settings.toDate);
            }
        }, function (error) { });
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
        __metadata('design:paramtypes', [AuthService, AppService, ActivatedRoute, Location, Router, TimelineService, EntryService])
    ], CreateCustomLogComponent);
    return CreateCustomLogComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/create-custom-log/create-custom-log.component.js.map