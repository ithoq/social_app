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
import * as _ from 'lodash';
import { EntryCategory } from "./models/EntryCategory";
export var AppService = (function () {
    function AppService() {
        this.api_end_point = 'http://api-social.apptazer.com/api/';
        this.domain = 'http://dev1-social.apptazer.com/';
        this.default_user_profile_pic = '';
        this.entryContentCategories = [];
        this.default_user_profile_pic = this.domain + '/assets/img/profile-photos/profile-default.png';
        this.setDefaultEntryCategories();
    }
    AppService.prototype.setDefaultEntryCategories = function () {
        this.entryContentCategories = [
            new EntryCategory('Place', 'icon-places-big.png', 'Lorem ipsum dolor sit amet'),
            new EntryCategory('Learning', 'icon-learning-big.png', 'Lorem ipsum dolor sit amet'),
            new EntryCategory('Health', 'icon-health-big.png', 'Lorem ipsum dolor sit amet'),
            new EntryCategory('Fitness', 'icon-fitness-big.png', 'Lorem ipsum dolor sit amet'),
            new EntryCategory('Celebration', 'icon-celebration-big.png', 'Lorem ipsum dolor sit amet'),
            new EntryCategory('Faves', 'icon-faves-big.png', 'Lorem ipsum dolor sit amet'),
            new EntryCategory('Purpose', 'icon-world-big.png', 'Lorem ipsum dolor sit amet'),
            new EntryCategory('People', 'icon-images-big.png', 'Lorem ipsum dolor sit amet'),
            new EntryCategory('Bigs', 'logo.png', 'Lorem ipsum dolor sit amet'),
            new EntryCategory('Other', 'icon-growth-big.png', 'Lorem ipsum dolor sit amet'),
        ];
    };
    //generate a random hashed string
    AppService.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    AppService.prototype.unique_id = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    //TODO: replace all manual mapings in the project by this function.
    AppService.prototype.map = function (object, target) {
        object = _.cloneDeep(object);
        target = _.cloneDeep(target);
        for (var property in object) {
            target[property] = object[property];
        }
        return target;
    };
    AppService.prototype.mapCollection = function (collection, target) {
        var mapedCollection = [];
        for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
            var object = collection_1[_i];
            mapedCollection.push(this.map(object, target));
        }
        return mapedCollection;
    };
    AppService.prototype.in_array = function (key, stack) {
        stack = _.cloneDeep(stack);
        for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
            var stackItem = stack_1[_i];
            if (stackItem == key)
                return true;
        }
        return false;
    };
    AppService.prototype.property_to_array = function (property, stack) {
        stack = _.cloneDeep(stack);
        var arr = [];
        for (var _i = 0, stack_2 = stack; _i < stack_2.length; _i++) {
            var stackItem = stack_2[_i];
            arr.push(stackItem[property]);
        }
        return arr;
    };
    AppService.prototype.property_in_array = function (property, value, stack) {
        stack = _.cloneDeep(stack);
        for (var _i = 0, stack_3 = stack; _i < stack_3.length; _i++) {
            var stackItem = stack_3[_i];
            if (stackItem[property] == value)
                return true;
        }
        return false;
    };
    AppService.prototype.find_obj_by_prop = function (property, value, stack) {
        stack = _.cloneDeep(stack);
        for (var _i = 0, stack_4 = stack; _i < stack_4.length; _i++) {
            var stackItem = stack_4[_i];
            if (stackItem[property] == value)
                return stackItem;
        }
        return null;
    };
    AppService.prototype.remove_obj_by_property = function (property, value, stack) {
        stack = _.cloneDeep(stack);
        var updatedStack = [];
        for (var _i = 0, stack_5 = stack; _i < stack_5.length; _i++) {
            var stackItem = stack_5[_i];
            if (stackItem[property] != value)
                updatedStack.push(stackItem);
        }
        return updatedStack;
    };
    AppService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/app.service.js.map