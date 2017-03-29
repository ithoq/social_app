var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, ChangeDetectorRef, EventEmitter, Input, ViewChild } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { EntryService } from "../../services/entry.service";
import { MapsAPILoader } from "angular2-google-maps/core";
import { RightContentService } from "../../services/right-content.service";
import { MediumToManageEntryService } from "../../services/medium-to-manage-entry.service";
import { Router } from "@angular/router";
import { Post } from "../../models/Post";
import { AppService } from "../../app.service";
import * as _ from 'lodash';
import { TimelineService } from "../../services/timeline.service";
export var ManageEntryComponent = (function () {
    function ManageEntryComponent(auth, entryService, _loader, rightContentService, chRef, mediumToManageEntry, router, app, timelineService) {
        this.auth = auth;
        this.entryService = entryService;
        this._loader = _loader;
        this.rightContentService = rightContentService;
        this.chRef = chRef;
        this.mediumToManageEntry = mediumToManageEntry;
        this.router = router;
        this.app = app;
        this.timelineService = timelineService;
        // Events of the components
        this.entrycreated = new EventEmitter();
        this.entryupdated = new EventEmitter();
        /*****************/
        /* map api */
        this.showmap = false;
        this.title = 'My first angular2-google-maps project';
        this.lat = 45.523111;
        this.lng = -122.672970;
        /* ---- ---- ---- ---- ---- --- */
        this.whatTags = [];
        this.whoTags = [];
        this.youTags = [];
        this.modes = [];
        this.seletedTimelines = [];
        this.types = [];
        this.timelines = [];
        this.selectedTypes = [];
        this.selectedModes = [];
        this.showDefinitions = false;
        this.selectedFiles = [];
        this.existingFiles = [];
        this.uploadedFiles = [];
        this.uploadedFileIds = '';
        this.selectedFilesSrc = [];
        this.removedFileIds = '';
        this.existingEntry = null;
        this.postType = '';
        this.postName = '';
        this.postDateStart = '';
        this.postDateEnd = '';
        this.postLocation = '';
        this.postAbout = '';
        this.postWhatelse = '';
        this.postBestSelf = 0;
        this.postCloseToOthers = 0;
        this.uploadingPost = false;
        this.uploadingFiles = false;
        this.managedUsers = [];
        this.types = _.cloneDeep(this.app.entryContentCategories);
        this.modes = _.cloneDeep(this.app.entryContentModes);
        var userStuff = this.auth.getUser();
        this.timelines = userStuff.timelines;
        this.managedUsers = userStuff.managedUsers;
        this.selectedManagedUserId = this.auth.currentUser.UserId;
        this.noUiSlider = noUiSlider;
        this.wNumb = wNumb;
        this.$ = $;
    }
    ManageEntryComponent.prototype.autocomplete = function () {
        var _this = this;
        this._loader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocompleteInput"), {});
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                _this.location = place.formatted_address;
                _this.lat = place.geometry.location.lat();
                _this.lng = place.geometry.location.lng();
                _this.chRef.detectChanges();
            });
        });
    };
    ManageEntryComponent.prototype.isTimelineSelected = function (timeline) {
        var alreadyExists = false;
        for (var _i = 0, _a = this.seletedTimelines; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == timeline) {
                alreadyExists = true;
            }
        }
        return alreadyExists;
    };
    ManageEntryComponent.prototype.setSelectedTimelines = function (timelines) {
        this.seletedTimelines = timelines;
    };
    ManageEntryComponent.prototype.deletePost = function () {
        var _this = this;
        if (confirm('Are you sure you want to delete this post?')) {
            this.entryService.updateEntry(this.existingEntry.EntryId, { Delete: true }).subscribe(function (data) {
                _this.timelineService.removeEntriesFromTimelines(_this.app.property_to_array('Id', _this.auth.getUser().timelines), [_this.existingEntry.EntryId]);
                _this.app.show_success_popup('Post Deleted Successfully!');
                _this.rightContentService.aside_in = false;
                if (_this.auth.getUser().timelines.length > 0)
                    _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
                else
                    _this.router.navigate(['/create-profile']);
            }, function (error) {
                alert(error.json().error_message);
            });
        }
    };
    ManageEntryComponent.prototype.removeImage = function (image_id) {
        this.uploadedFiles = this.app.remove_obj_by_property('Id', image_id, this.uploadedFiles);
        this.uploadedFileIds = this.app.property_to_array('Id', this.uploadedFiles).join(',');
        this.existingFiles = this.app.remove_obj_by_property('Id', image_id, this.existingFiles);
        this.removedFileIds += image_id;
    };
    ManageEntryComponent.prototype.filesSelected = function (event) {
        var _this = this;
        if (event.target.files.length > 10) {
            this.app.show_error_popup('maximum 10 images are allowed in a post');
        }
        else {
            this.uploadingFiles = true;
            var files_1 = new FormData();
            // operation starts here.....
            $.each(event.target.files, function (key, value) {
                files_1.append('Image' + (key + 1), value);
            });
            this.entryService.uploadImages(files_1, function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = (evt.loaded / evt.total) * 100;
                }
            }).subscribe(function (files) {
                _this.uploadedFiles = _this.app.array_unique_merge(_this.uploadedFiles, files, 'Id');
                _this.uploadedFileIds = _this.app.property_to_array('Id', _this.uploadedFiles).join(',');
                _this.uploadingFiles = false;
            });
        }
    };
    ManageEntryComponent.prototype.mapUpdatedEntryData = function (data) {
        data = _.cloneDeep(data);
        var updatedPost = new Post();
        updatedPost.About = data.About;
        updatedPost.BestSelfRating = data.BestSelfRating;
        updatedPost.CloseToOthers = data.CloseToOthers;
        updatedPost.DateStart = data.DateStart;
        updatedPost.DateEnd = data.DateEnd;
        updatedPost.EntryId = data.EntryId;
        updatedPost.Files = data.Files;
        updatedPost.Lat = data.Lat;
        updatedPost.Lng = data.Lng;
        updatedPost.Location = data.Location;
        updatedPost.Mode = data.Mode;
        updatedPost.Name = data.Name;
        updatedPost.Tags = data.Tags.join(',');
        for (var _i = 0, _a = data.TimelineId.split(','); _i < _a.length; _i++) {
            var timelineId = _a[_i];
            var timelines = this.auth.getUser().timelines;
            for (var _b = 0, timelines_1 = timelines; _b < timelines_1.length; _b++) {
                var existingTimeline = timelines_1[_b];
                if (existingTimeline.Id == timelineId) {
                    updatedPost.Timelines.push(existingTimeline);
                }
            }
        }
        updatedPost.Type = data.Type;
        updatedPost.WhatElse = data.WhatElse;
        updatedPost.WhatTags = data.WhatTags;
        updatedPost.WhoTags = data.WhoTags;
        updatedPost.YouTags = data.YouTags;
        updatedPost.User = data.User;
        updatedPost.UserId = data.UserId;
        updatedPost.TempUserId = data.TempUserId;
        //TODO: Files are not being handeled yet.
        return updatedPost;
    };
    ManageEntryComponent.prototype.updateEntryInLocalStorage = function (updatedEntry) {
        this.timelineService.removeEntriesFromTimelines(this.app.property_to_array('Id', updatedEntry.Timelines), [updatedEntry.EntryId]);
        for (var _i = 0, _a = updatedEntry.Timelines; _i < _a.length; _i++) {
            var timeline = _a[_i];
            this.timelineService.pushEntryInTimeline(timeline.Id, updatedEntry);
        }
        return true;
    };
    ManageEntryComponent.prototype.submitForm = function () {
        this.create(this.manageEntryForm, null);
    };
    ManageEntryComponent.prototype.create = function (form, event) {
        var _this = this;
        if (this.uploadingPost)
            return false;
        if (this.uploadingFiles) {
            this.app.show_error_popup('please wait until your files are being uploaded.');
            return false;
        }
        var data = form.value;
        console.log(data);
        if (data.Name == '') {
            this.app.show_error_popup('Post Title is required');
        }
        else if (this.seletedTimelines.length <= 0) {
            this.app.show_error_popup('please select atleast one timeline');
        }
        else if (this.selectedTypes.length <= 0) {
            this.app.show_error_popup('please select atleast one Type');
        }
        else if ($('#new-post-start-date').val() == '') {
            this.app.show_error_popup('please select Start Date');
        }
        else {
            this.uploadingPost = true;
            data.TimelineId = this.seletedTimelines.join(',');
            data.Mode = this.selectedModes.join(',');
            data.Type = this.selectedTypes.join(',');
            data.WhatTags = $('#what-tags-input').val();
            data.WhoTags = $('#who-tags-input').val();
            data.YouTags = $('#you-tags-input').val();
            data.Location = (this.location == undefined) ? this.postLocation : this.location;
            data.DateStart = $('#new-post-start-date').val();
            data.DateEnd = $('#new-post-end-date').val();
            data.Lat = this.lat;
            data.Lng = this.lng;
            data.AddFileIds = this.uploadedFileIds;
            data.TempUserId = data.UserId;
            data.UserId = (data.UserId == this.auth.currentUser.UserId || data.UserId == null) ? '' : data.UserId;
            var selectedManagedUser_1 = (data.UserId == '') ? this.auth.currentUser : this.app.find_obj_by_prop('UserId', data.UserId, this.managedUsers);
            //TODO: add functionality to create a post for a managed user.
            if (this.existingEntry != null) {
                data.DeleteFileIds = this.removedFileIds;
                this.entryService.updateEntry(this.existingEntry.EntryId, data).subscribe(function (response) {
                    var uploadedEntry = _.cloneDeep(data);
                    uploadedEntry.EntryId = _this.existingEntry.EntryId;
                    uploadedEntry.User = selectedManagedUser_1.FirstName + ' ' + selectedManagedUser_1.LastName;
                    // uploadedEntry.UserId = this.auth.currentUser.UserId;
                    uploadedEntry.Files = _this.app.array_unique_merge(_this.existingFiles, _this.uploadedFiles, 'Id');
                    var updatedEntry = _this.mapUpdatedEntryData(uploadedEntry);
                    _this.updateEntryInLocalStorage(updatedEntry);
                    _this.uploadingPost = false;
                    _this.entryupdated.emit({ data: updatedEntry });
                    _this.app.show_success_popup('Post Updated Successfully!');
                    _this.rightContentService.aside_in = false;
                    $('#add-entry-form-wizard').bootstrapWizard('show', 0); //reset form
                }, function (error) {
                    alert(error.json().error_message);
                });
            }
            else {
                this.entryService.addEntry(data).subscribe(function (response) {
                    var uploadedEntry = _.cloneDeep(data);
                    uploadedEntry.EntryId = response.json().payload.EntryId;
                    uploadedEntry.User = selectedManagedUser_1.FirstName + ' ' + selectedManagedUser_1.LastName;
                    // uploadedEntry.UserId = this.auth.currentUser.UserId;
                    uploadedEntry.Files = _this.uploadedFiles;
                    var updatedEntry = _this.mapUpdatedEntryData(uploadedEntry);
                    _this.updateEntryInLocalStorage(updatedEntry);
                    _this.uploadingPost = false;
                    _this.entrycreated.emit({ data: _this.seletedTimelines });
                    _this.app.show_success_popup('Post Created Successfully!');
                    _this.rightContentService.aside_in = false;
                    $('#add-entry-form-wizard').bootstrapWizard('show', 0); //reset form
                    _this.resetForm(form); //reset form
                }, function (error) {
                    _this.uploadingPost = false;
                    _this.app.show_error_popup('some thing went wrong with the server. please try again.');
                });
            }
        }
    };
    ManageEntryComponent.prototype.resetForm = function (form) {
        form.resetForm();
        this.selectedTypes = [];
        this.selectedModes = [];
        this.selectedFiles = [];
        this.existingFiles = [];
        this.uploadedFiles = [];
        this.bestSelfSlider.set([0]);
        this.closeToOthersSlider.set([0]);
        this.youTags = [];
        this.whatTags = [];
        this.whoTags = [];
        $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput('removeAll');
    };
    ManageEntryComponent.prototype.managedUserSelected = function () {
        this.timelines = this.timelineService.findTimelinesOfManagedUser(this.selectedManagedUserId);
        if (this.selectedManagedUserId != this.auth.currentUser.UserId)
            this.timelines = this.app.remove_obj_by_property('Name', 'My Private Timeline', this.timelines);
        if (this.timelines.length > 0) {
            this.setSelectedTimelines(this.timelines[0].Id);
        }
    };
    ManageEntryComponent.prototype.modeChanged = function (data) {
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
    ManageEntryComponent.prototype.typeChanged = function (data) {
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
    ManageEntryComponent.prototype.timelinesChanged = function (data) {
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
    ManageEntryComponent.prototype.setExistingPost = function (post) {
        this.existingEntry = post;
        if (this.existingEntry != null) {
            if (this.existingEntry.BestSelfRating != '' && this.existingEntry.BestSelfRating != undefined) {
                this.postBestSelf = parseInt(this.existingEntry.BestSelfRating);
            }
            if (this.existingEntry.CloseToOthers != '' && this.existingEntry.BestSelfRating != undefined) {
                this.postCloseToOthers = parseInt(this.existingEntry.CloseToOthers);
            }
            this.selectedTypes = this.existingEntry.Type.split(',');
            this.postName = this.existingEntry.Name;
            this.postAbout = this.existingEntry.About;
            this.postDateEnd = this.existingEntry.DateEnd.split(' ')[0];
            this.postDateStart = this.existingEntry.DateStart.split(' ')[0];
            this.postLocation = (this.existingEntry.Location == "undefined") ? "" : this.existingEntry.Location;
            this.postWhatelse = this.existingEntry.WhatElse;
            this.lat = (this.existingEntry.Location == "undefined") ? 45.523111 : this.existingEntry.Lat;
            this.lng = (this.existingEntry.Location == "undefined") ? -122.672970 : this.existingEntry.Lng;
            if (this.existingEntry.Timelines != undefined) {
                for (var i = 0; i < this.existingEntry.Timelines.length; i++) {
                    this.seletedTimelines.push(this.existingEntry.Timelines[i].Id);
                }
            }
            this.selectedManagedUserId = this.existingEntry.UserId;
            this.selectedModes = (this.existingEntry.Mode == '') ? [] : this.existingEntry.Mode.split(',');
            this.whatTags = this.existingEntry.WhatTags.split(',');
            this.whoTags = this.existingEntry.WhoTags.split(',');
            this.youTags = this.existingEntry.YouTags.split(',');
            this.existingFiles = this.existingEntry.Files;
        }
    };
    ManageEntryComponent.prototype.create_ui_slider = function (target, start) {
        return noUiSlider.create(target, {
            start: [start],
            connect: 'lower',
            step: 1,
            range: {
                'min': [0],
                'max': [100]
            },
            format: wNumb({
                decimals: 0,
                thousand: '.',
            })
        });
    };
    ManageEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //setting up existing entry if on edit mode
        this.setExistingPost(this.mediumToManageEntry.getPost());
        //this.seletedTimelines = this.seletedTimelines.concat(this.mediumToManageEntry.getTempPostTimelines());
        /*---------------------------------------------------*/
        this.bestSelfSlider = this.create_ui_slider(document.getElementById('test_slider'), this.postBestSelf);
        this.closeToOthersSlider = this.create_ui_slider(document.getElementById('close_to_others_slider'), this.postCloseToOthers);
        this.bestSelfSlider.on('update', function (values, handle) {
            _this.BestSelfRating = values[handle];
        });
        this.closeToOthersSlider.on('update', function (values, handle) {
            _this.CloseToOthers = values[handle];
        });
    };
    ManageEntryComponent.prototype.isModeSelected = function (mode) {
        if (this.selectedModes.indexOf(mode) >= 0) {
            return true;
        }
        return false;
    };
    ManageEntryComponent.prototype.isTypeSelected = function (type) {
        if (this.selectedTypes.indexOf(type) >= 0) {
            return true;
        }
        return false;
    };
    ManageEntryComponent.prototype.changeTypeOrientation = function () {
        this.showDefinitions = !this.showDefinitions;
    };
    ManageEntryComponent.prototype.validateStep = function (step) {
        if (step == 1) {
            if (this.selectedTypes.length == 0) {
                this.app.show_error_popup('Please select atleast 1 content type.');
                return false;
            }
            if (this.seletedTimelines.length == 0) {
                this.app.show_error_popup('Please select atleast 1 timeline.');
                return false;
            }
        }
        else if (step == 2) {
            if (this.postName == '') {
                this.app.show_error_popup('Please enter a title for the post.');
                return false;
            }
            if ($("#new-post-start-date").val() == '') {
                this.app.show_error_popup('please select atleast start date');
                return false;
            }
        }
        return true;
    };
    ManageEntryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.autocomplete();
        $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
        var add_entry_form_wizard = '#add-entry-form-wizard';
        $(add_entry_form_wizard).bootstrapWizard({
            tabClass: 'wz-steps',
            nextSelector: '.next',
            previousSelector: '.previous',
            onTabClick: function (tab, navigation, index) {
                return false;
            },
            onInit: function () {
                $(add_entry_form_wizard).find('.finish').hide().prop('disabled', true);
            },
            onNext: function (tab, navigation, index) {
                return _this.validateStep(index);
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                var $percent = (index / $total) * 100;
                var wdt = 100 / $total;
                var lft = wdt * index;
                var margin = (100 / $total) / 2;
                $(add_entry_form_wizard).find('.progress-bar').css({ width: $percent + '%', 'margin': 0 + 'px ' + margin + '%' });
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $(add_entry_form_wizard).find('.next').hide();
                    $(add_entry_form_wizard).find('.finish').show();
                    $(add_entry_form_wizard).find('.finish').prop('disabled', false);
                }
                else {
                    $(add_entry_form_wizard).find('.next').show();
                    $(add_entry_form_wizard).find('.finish').hide().prop('disabled', true);
                }
            }
        });
        $('.datepicker').datepicker();
    };
    ManageEntryComponent.prototype.refreshMap = function () {
        var _this = this;
        this.showmap = false;
        setTimeout(function () {
            _this.showmap = true;
        }, 500);
    };
    ManageEntryComponent.prototype.movedToNextSlide = function () {
        this.refreshMap();
    };
    ManageEntryComponent.prototype.movedToPrevSlide = function () {
        this.refreshMap();
    };
    ManageEntryComponent.prototype.initMap = function () {
        var input = document.getElementById('pac-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
    };
    __decorate([
        Output('EntryCreated'), 
        __metadata('design:type', Object)
    ], ManageEntryComponent.prototype, "entrycreated", void 0);
    __decorate([
        Output('EntryUpdated'), 
        __metadata('design:type', Object)
    ], ManageEntryComponent.prototype, "entryupdated", void 0);
    __decorate([
        ViewChild('f'), 
        __metadata('design:type', Object)
    ], ManageEntryComponent.prototype, "manageEntryForm", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], ManageEntryComponent.prototype, "seletedTimelines", void 0);
    ManageEntryComponent = __decorate([
        Component({
            selector: 'sa-manage-entry',
            templateUrl: './manage-entry.component.html',
            styleUrls: ['./manage-entry.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, EntryService, MapsAPILoader, RightContentService, ChangeDetectorRef, MediumToManageEntryService, Router, AppService, TimelineService])
    ], ManageEntryComponent);
    return ManageEntryComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/manage-entry/manage-entry.component.js.map