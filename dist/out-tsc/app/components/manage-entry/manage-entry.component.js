var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { EntryService } from "../../services/entry.service";
import { MapsAPILoader } from "angular2-google-maps/core";
import { RightContentService } from "../../services/right-content.service";
import { MediumToManageEntryService } from "../../services/medium-to-manage-entry.service";
import { Router } from "@angular/router";
export var ManageEntryComponent = (function () {
    function ManageEntryComponent(auth, entryService, _loader, rightContentService, chRef, mediumToManageEntry, router) {
        this.auth = auth;
        this.entryService = entryService;
        this._loader = _loader;
        this.rightContentService = rightContentService;
        this.chRef = chRef;
        this.mediumToManageEntry = mediumToManageEntry;
        this.router = router;
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
        this.types = [
            { value: 'Place', img: 'icon-places-big.png', desc: 'Lorem ipsum dolor sit amet, maiorum ponderum consulatu ut has. Id phaedrum similique appellantur mel, ad dolorem accusamus eum, vim te graeco eruditi. Cu posse ornatus duo, qui quidam oportere ad. Agam sanctus eum id. Iisque complectitur est cu.' },
            { value: 'Learning', img: 'icon-learning-big.png', desc: 'Prompta habemus cu mel, pri an feugait laboramus consequuntur. At eum fugit lobortis scripserit. Graeco eligendi ne est, munere deseruisse mea te, ea eros phaedrum torquatos est. In vim mazim mentitum. Mei putent maiorum in, atomorum intellegebat mea an. Te ius homero nostro, ei mea nostro feugiat conceptam, ex vis euismod alienum expetendis.' },
            { value: 'Work', img: 'icon-work-big.png', desc: 'Luptatum platonem instr vivendo inciderint ad pro. Nobis feugait fierent cu pri. Ex eos vidisse scriptorem. Id ridens insolens moderatius has. Delicata dissentiet philosophia vis at, nec movet omnes prodesset ei.' },
            { value: 'Health', img: 'icon-health-big.png', desc: 'Conceptam abhorreant quas ipsum decore pro no. Te usu mandamus conceptam voluptatum, vim ei erat delenit volutpat. Ei per tollit dicant, per wisi mandamus salutatus ex. At persius delectus perpetua vel.' },
            { value: 'Fitness', img: 'icon-fitness-big.png', desc: 'Conceptam abhorreant pro no. Te usu mandamus conceptam voluptatum, vim ei erat delenit volutpat. Ei per tollit dicant, per wisi mandamus salutatus ex. At persius delectus perpetua vel.' },
            { value: 'Celebration', img: 'icon-celebration-big.png', desc: 'Tantas lucilius facete eirmod. Ad epicurei antiopam vim. Cibo errem dissentiet ius ea, ad sed ignota insolens.' },
            { value: 'Faves', img: 'icon-faves-big.png', desc: 'Luptatum platonem instructior id  ad pro. Nobis feugait fierent cu pri. Ex eos vidisse scriptorem. Id ridens insolens moderatius has. Delicata dissentiet philosophia vis at, nec movet omnes prodesset ei.' },
            { value: 'Purpose', img: 'icon-world-big.png', desc: 'Tantas lucilius no vis, cu aliquid nominavi eloquentiam duo. Clita timeam duo an. Te eam postea facete eirmod. Ad epicurei antiopam vim. Cibo errem dissentiet ius ea, ad sed ignota insolens.' },
            { value: 'People', img: 'icon-images-big.png', desc: 'Conceptam abhorreant est cu, possit reprehendunt sit at. Ius augue legimus in, sit cibo essent et, quas ipsum decore pro no. Te usu mandamus conceptam voluptatum, vim ei erat delenit volutpat. Ei per tollit dicant, per wisi mandamus salutatus ex. At persius delectus perpetua vel.' },
            { value: 'Bigs', img: 'logo.png', desc: 'Tantas lucilius no vis, cu aliquid nominavi eloquentiam duo. Clita timeam duo an. Te eam postea facete eirmod. Ad epicurei antiopam vim. Cibo errem dissentiet ius ea, ad sed ignota insolens.' },
            { value: 'Other', img: 'icon-growth-big.png', desc: 'Luptatum platonem instructior id nec, ea eam sale comprehensam, sit suas dicat eu. Ei mel sapientem constituto, cetero vivendo inciderint ad pro. Nobis feugait fierent cu pri. Ex eos vidisse scriptorem. Id ridens insolens moderatius has. Delicata dissentiet philosophia vis at, nec movet omnes prodesset ei.' }
        ];
        this.timelines = [];
        this.seletedTimelines = [];
        this.selectedTypes = [];
        this.selectedModes = [];
        this.showDefinitions = false;
        this.selectedFiles = [];
        this.selectedFilesSrc = [];
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
        this.timelines = this.auth.getUser().timelines;
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
        this.entryService.updateEntry(this.existingEntry.EntryId, { Delete: true }).subscribe(function (data) {
            alert('Post Deleted Successfully!');
            _this.rightContentService.aside_in = false;
            if (_this.auth.getUser().timelines.length > 0)
                _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
            else
                _this.router.navigate(['/manage-profile']);
        }, function (error) {
            alert(error.json().error_message);
        });
    };
    ManageEntryComponent.prototype.removeImage = function (index) {
        var tempFiles = [];
        for (var i = 0; i < this.selectedFiles.length; i++) {
            if (index != i) {
                tempFiles.push(this.selectedFiles[i]);
            }
        }
        this.selectedFiles = tempFiles;
        this.selectedFilesSrc.splice(index, 1);
    };
    ManageEntryComponent.prototype.filesSelected = function (event) {
        this.selectedFiles = event.target.files;
        var length = this.selectedFiles.length;
        this.selectedFilesSrc = [];
        var tempSrc = [];
        for (var i = 0; i < length; i++) {
            var reader = new FileReader();
            reader.onload = function (e) {
                tempSrc.push(e.target.result);
            };
            reader.readAsDataURL(this.selectedFiles[i]);
        }
        this.selectedFilesSrc = tempSrc;
    };
    ManageEntryComponent.prototype.create = function (form, event) {
        var _this = this;
        if (this.uploadingPost == true)
            return false;
        var data = form.value;
        if (data.Name == '') {
            alert('Post Title is required');
        }
        else if (this.seletedTimelines.length <= 0) {
            alert('please select atleast one timeline');
        }
        else if (this.selectedTypes.length <= 0) {
            alert('please select atleast one Type');
        }
        else if ($('#new-post-start-date').val() == '') {
            alert('please select Start Date');
        }
        else {
            this.uploadingPost = true;
            data.TimelineId = this.seletedTimelines.join(',');
            data.Mode = this.selectedModes.join(',');
            data.Type = this.selectedTypes.join(',');
            data.WhatTags = $('#what-tags-input').val();
            data.WhoTags = $('#who-tags-input').val();
            data.YouTags = $('#you-tags-input').val();
            data.Location = this.location;
            data.DateStart = $('#new-post-start-date').val();
            data.DateEnd = $('#new-post-end-date').val();
            var files_1 = new FormData();
            $.each(this.selectedFiles, function (key, value) {
                files_1.append('Image' + (key + 1), value);
            });
            if (this.existingEntry != null) {
                this.entryService.updateEntry(this.existingEntry.EntryId, data, files_1).subscribe(function (response) {
                    _this.uploadingPost = false;
                    _this.entryupdated.emit({ data: data });
                    alert('Post Updated Successfully!');
                    _this.rightContentService.aside_in = false;
                }, function (error) {
                    alert(error.json().error_message);
                });
            }
            else {
                this.entryService.addEntry(data, files_1).subscribe(function (data) {
                    _this.uploadingPost = false;
                    _this.entrycreated.emit({ data: _this.seletedTimelines });
                    alert('Post Created Successfully!');
                    _this.rightContentService.aside_in = false;
                }, function (error) {
                    _this.uploadingPost = false;
                });
            }
        }
    };
    ManageEntryComponent.prototype.modeChanged = function (data) {
        var parts = data.split(',');
        var alreadyExists = false;
        "";
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
            this.postDateEnd = this.existingEntry.DateEnd;
            this.postDateStart = this.existingEntry.DateStart;
            this.postLocation = this.existingEntry.Location;
            this.postWhatelse = this.existingEntry.WhatElse;
            if (this.existingEntry.Timelines != undefined) {
                for (var i = 0; i < this.existingEntry.Timelines.length; i++) {
                    this.seletedTimelines.push(this.existingEntry.Timelines[i].Id);
                }
            }
            this.selectedModes = this.existingEntry.Mode.split(',');
            this.whatTags = this.existingEntry.WhatTags.split(',');
            this.whoTags = this.existingEntry.WhoTags.split(',');
            this.youTags = this.existingEntry.YouTags.split(',');
        }
    };
    ManageEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //setting up existing entry if on edit mode
        this.setExistingPost(this.mediumToManageEntry.getPost());
        //this.seletedTimelines = this.seletedTimelines.concat(this.mediumToManageEntry.getTempPostTimelines());
        /*---------------------------------------------------*/
        var best_self_slider = document.getElementById('test_slider');
        noUiSlider.create(best_self_slider, {
            start: [this.postBestSelf],
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
        }).on('update', function (values, handle) {
            _this.BestSelfRating = values[handle];
        });
        /*------ ------ ----- ----- -----*/
        var close_to_others_slider = document.getElementById('close_to_others_slider');
        noUiSlider.create(close_to_others_slider, {
            start: [this.postCloseToOthers],
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
        }).on('update', function (values, handle) {
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
                alert('Please select atleast 1 content type.');
                return false;
            }
            if (this.seletedTimelines.length == 0) {
                alert('Please select atleast 1 timeline.');
                return false;
            }
        }
        else if (step == 2) {
            if (this.postName == '') {
                alert('Please enter a title for the post.');
                return false;
            }
            if ($("#new-post-start-date").val() == '') {
                alert('please select atleast start date');
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
    ManageEntryComponent.prototype.movedToNextSlide = function () {
        var _this = this;
        setTimeout(function () {
            _this.showmap = true;
        }, 500);
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
    ManageEntryComponent = __decorate([
        Component({
            selector: 'sa-manage-entry',
            templateUrl: './manage-entry.component.html',
            styleUrls: ['./manage-entry.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, EntryService, MapsAPILoader, RightContentService, ChangeDetectorRef, MediumToManageEntryService, Router])
    ], ManageEntryComponent);
    return ManageEntryComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/manage-entry/manage-entry.component.js.map