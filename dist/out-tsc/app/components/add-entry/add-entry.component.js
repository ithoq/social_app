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
import { EntryService } from "../../services/entry.service";
export var AddEntryComponent = (function () {
    function AddEntryComponent(auth, entryService) {
        this.auth = auth;
        this.entryService = entryService;
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
        this.seletedTimelines.push(this.timelines[0].Id);
        this.noUiSlider = noUiSlider;
        this.wNumb = wNumb;
    }
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
        var data = form.value;
        //validation form
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
            console.log(this.seletedTimelines.join(','));
            data.TimelineId = this.seletedTimelines.join(',');
            data.Mode = this.selectedModes.join(',');
            data.Type = this.selectedTypes[0];
            this.entryService.addEntry(data).subscribe(function (data) {
                alert('Post Created Successfully!');
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
        console.log(this.selectedModes);
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
        console.log(this.selectedTypes);
    };
    AddEntryComponent.prototype.foo = function (data) {
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
        var rs_step = document.getElementById('test_slider');
        noUiSlider.create(rs_step, {
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
            console.log(values[handle]);
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
        document.getElementById('location');
    };
    AddEntryComponent = __decorate([
        Component({
            selector: 'sa-add-entry',
            templateUrl: './add-entry.component.html',
            styleUrls: ['./add-entry.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, EntryService])
    ], AddEntryComponent);
    return AddEntryComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev2/src/app/components/add-entry/add-entry.component.js.map