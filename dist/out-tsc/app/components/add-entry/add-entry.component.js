var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { EntryService } from "../../services/entry.service";
import { MapsAPILoader } from "angular2-google-maps/core";
import { RightContentService } from "../../services/right-content.service";
export var AddEntryComponent = (function () {
    function AddEntryComponent(auth, entryService, _loader, rightContentService, chRef) {
        this.auth = auth;
        this.entryService = entryService;
        this._loader = _loader;
        this.rightContentService = rightContentService;
        this.chRef = chRef;
        /*****************/
        /* map api */
        this.showmap = false;
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        /* ----------------------- */
        this.tags = ['a'];
        this.modes = [
            { value: 'Angry', img: 'emoji-angry.png' },
            { value: 'Blah', img: 'emoji-blah.png' },
            { value: 'Brilliant', img: 'emoji-brilliant.png' },
            { value: 'Calm', img: 'emoji-calm.png' },
            { value: 'Confident', img: 'emoji-confident.png' },
            { value: 'Confused', img: 'emoji-confused.png' },
            { value: 'Cool', img: 'emoji-cool.png' },
            { value: 'Down', img: 'emoji-down.png' },
            { value: 'Embarrassed', img: 'emoji-embarrassed.png' }
        ];
        this.types = [
            { value: 'Place', img: 'icon-places-big.png', desc: 'description' },
            { value: 'Learning', img: 'icon-learning-big.png', desc: 'description' },
            { value: 'Work', img: 'icon-work-big.png', desc: 'description' },
            { value: 'Health', img: 'icon-health-big.png', desc: 'description' },
            { value: 'Fitness', img: 'icon-fitness-big.png', desc: 'description' },
            { value: 'Celebration', img: 'icon-celebration-big.png', desc: 'description' },
            { value: 'Faves', img: 'icon-faves-big.png', desc: 'description' },
            { value: 'Purpose', img: 'icon-world-big.png', desc: 'description' },
            { value: 'People', img: 'icon-images-big.png', desc: 'description' },
            { value: 'Bigs', img: 'logo.png', desc: 'description' },
            { value: 'Other', img: 'add.png', desc: 'description' }
        ];
        this.timelines = [];
        this.seletedTimelines = [];
        this.selectedTypes = [];
        this.selectedModes = [];
        this.showDefinitions = false;
        this.timelines = this.auth.getUser().timelines;
        this.noUiSlider = noUiSlider;
        this.wNumb = wNumb;
        this.$ = $;
    }
    AddEntryComponent.prototype.autocomplete = function () {
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
    AddEntryComponent.prototype.isTimelineSelected = function (timeline) {
        var alreadyExists = false;
        for (var _i = 0, _a = this.seletedTimelines; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == timeline) {
                alreadyExists = true;
            }
        }
        return alreadyExists;
    };
    AddEntryComponent.prototype.create = function (form) {
        var _this = this;
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
        else if (data.DateStart <= 0) {
            alert('please select Start Date');
        }
        else {
            data.TimelineId = this.seletedTimelines.join(',');
            data.Mode = this.selectedModes.join(',');
            data.Type = this.selectedTypes[0];
            data.Tags = $('#what-tags-input').val();
            data.Location = this.location;
            console.log(data);
            this.entryService.addEntry(data).subscribe(function (data) {
                alert('Post Created Successfully!');
                _this.rightContentService.aside_in = false;
            }, function (error) {
                alert(error.json().error_message);
            });
        }
    };
    AddEntryComponent.prototype.modeChanged = function (data) {
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
    AddEntryComponent.prototype.typeChanged = function (data) {
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
    AddEntryComponent.prototype.timelinesChanged = function (data) {
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
    AddEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var best_self_slider = document.getElementById('test_slider');
        noUiSlider.create(best_self_slider, {
            start: [0],
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
        /*   ------    ------      ----- ----- -----*/
        var close_to_others_slider = document.getElementById('close_to_others_slider');
        noUiSlider.create(close_to_others_slider, {
            start: [0],
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
    AddEntryComponent.prototype.isModeSelected = function (mode) {
        if (this.selectedModes.indexOf(mode) >= 0) {
            return true;
        }
        return false;
    };
    AddEntryComponent.prototype.isTypeSelected = function (type) {
        if (this.selectedTypes.indexOf(type) >= 0) {
            return true;
        }
        return false;
    };
    AddEntryComponent.prototype.changeTypeOrientation = function () {
        this.showDefinitions = !this.showDefinitions;
    };
    AddEntryComponent.prototype.ngAfterViewInit = function () {
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
    };
    AddEntryComponent.prototype.movedToNextSlide = function () {
        var _this = this;
        setTimeout(function () {
            _this.showmap = true;
        }, 500);
    };
    AddEntryComponent.prototype.initMap = function () {
        var input = document.getElementById('pac-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
    };
    AddEntryComponent = __decorate([
        Component({
            selector: 'sa-add-entry',
            templateUrl: './add-entry.component.html',
            styleUrls: ['./add-entry.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, EntryService, MapsAPILoader, RightContentService, ChangeDetectorRef])
    ], AddEntryComponent);
    return AddEntryComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/add-entry/add-entry.component.js.map