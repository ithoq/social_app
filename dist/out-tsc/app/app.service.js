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
import { EntryMode } from "./models/EntryMode";
export var AppService = (function () {
    function AppService() {
        this.api_end_point = 'http://api-social.apptazer.com/api/';
        this.domain = 'http://dev1-social.apptazer.com/';
        this.default_user_profile_pic = '';
        this.entryContentCategories = [];
        this.entryContentModes = [];
        this.default_user_profile_pic = this.domain + '/assets/img/profile-photos/profile-default.png';
        this.setDefaultEntryCategories();
        this.setDefaultEntryModes();
    }
    AppService.prototype.setDefaultEntryCategories = function () {
        this.entryContentCategories = [
            new EntryCategory('Place', 'icon-places-big.png', 'A place that is important to you, where you live or have lived, where you’ve gone, a place that matters a lot to you.'),
            new EntryCategory('Learning', 'icon-learning-big.png', 'Your school(s), for sure, but also a class that you’ve loved, a camp, a project, your subjects, a skill, a trade. Important teachers, inspiring ideas, and anything else that would go into a portfolio of your brain and your abilities can be included here!'),
            new EntryCategory('Health', 'icon-health-big.png', 'Anything that would go in your health file. Next time you need to remember when you had your last tetanus shot, you’ll have it right here! When did you break your arm or have your appendix removed? If you got a diagnosis or started a new medicine, add it. But also here’s a great place to note health solutions - what practices, tools, medicines, and life-changes you’ve tried so you can track them and see how they’ve worked for you over time.'),
            new EntryCategory('Fitness', 'icon-fitness-big.png', 'Your history of physical fitness. You can include a sport, a sporting event (a race, an award, a game), exercise - whatever has helped you stay active and fit. Also include orgs and people that are part of your fitness - a club, a coach, etc. Here’s also a great place to track any changes you’ve made that have (or not) helped you take care of your body as well as any other changes that have impacted your physical fitness.'),
            new EntryCategory('Celebration', 'icon-celebration-big.png', 'Celebrations, holidays, rituals, vacations and trips, special events, and anything else that belongs in your personal and family history.'),
            new EntryCategory('Faves', 'icon-faves-big.png', 'Your favorites. Include what you like, what you’ve seen or done or counted or found - songs, books, movies, blogs, restaurants, hiking trails, artists, zoos, baseball teams, butterflies…'),
            new EntryCategory('Purpose', 'icon-world-big.png', 'Community, state, country or world change that matters to you. Track one thing that inspires you or bugs you in your community or the world and how that informs your sense of purpose in your life. Identify a cause - local or global - that you care about and track the problems and solutions you see happening as well as your own involvement in it. Here’s a place to make connections between your passions and your purpose.'),
            new EntryCategory('People', 'icon-images-big.png', 'Your family, close friends, mentors, and other people (or pets!) who’ve been important to you.'),
            new EntryCategory('Bigs', 'logo.png', 'The “big” memories, experiences, decisions, and moments that, if you were to write your life story, need to be told.'),
            new EntryCategory('Other', 'icon-growth-big.png', ''),
        ];
    };
    AppService.prototype.setDefaultEntryModes = function () {
        this.entryContentModes = [
            new EntryMode('angry', 'emoji-angry.png'),
            new EntryMode('blah', 'emoji-blah.png'),
            new EntryMode('brilliant', 'emoji-brilliant.png'),
            new EntryMode('calm', 'emoji-calm.png'),
            new EntryMode('confident', 'emoji-confident.png'),
            new EntryMode('confused', 'emoji-confused.png'),
            new EntryMode('cool', 'emoji-cool.png'),
            new EntryMode('down', 'emoji-down.png'),
            new EntryMode('excited', 'emoji-excited.png'),
            new EntryMode('fantastic', 'emoji-fantastic.png'),
            new EntryMode('grateful', 'emoji-grateful.png'),
            new EntryMode('happy', 'emoji-happy.png'),
            new EntryMode('loved', 'emoji-loved.png'),
            new EntryMode('quiet', 'emoji-quiet.png'),
            new EntryMode('sad', 'emoji-sad.png'),
            new EntryMode('sassy', 'emoji-sassy.png'),
            new EntryMode('scared', 'emoji-scared.png'),
            new EntryMode('sick', 'emoji-sick.png'),
            new EntryMode('sorry', 'emoji-sorry.png'),
            new EntryMode('stressed', 'emoji-stressed.png'),
            new EntryMode('surprised', 'emoji-surprised.png'),
            new EntryMode('tired', 'emoji-tired.png'),
            new EntryMode('worried', 'emoji-worried.png')
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
    AppService.prototype.find_objs_by_prop = function (property, value, stack) {
        var found_objs = [];
        stack = _.cloneDeep(stack);
        for (var _i = 0, stack_5 = stack; _i < stack_5.length; _i++) {
            var stackItem = stack_5[_i];
            if (stackItem[property] == value)
                found_objs.push(stackItem);
        }
        return found_objs;
    };
    AppService.prototype.remove_obj_by_property = function (property, value, stack) {
        stack = _.cloneDeep(stack);
        var updatedStack = [];
        for (var _i = 0, stack_6 = stack; _i < stack_6.length; _i++) {
            var stackItem = stack_6[_i];
            if (stackItem[property] != value)
                updatedStack.push(stackItem);
        }
        return updatedStack;
    };
    AppService.prototype.array_unique_merge = function (array1, array2, unique_property) {
        var merged = array1.concat(array2);
        //return merged;
        var unique_array = [];
        for (var _i = 0, merged_1 = merged; _i < merged_1.length; _i++) {
            var obj = merged_1[_i];
            unique_array = this.remove_obj_by_property(unique_property, obj[unique_property], unique_array);
            unique_array.push(obj);
        }
        return unique_array;
    };
    AppService.prototype.show_error_popup = function (error_message) {
        if (error_message === void 0) { error_message = 'Something went wrong!'; }
        $('#global_error_popup').modal('show');
        $('#global_error_popup_text').text(error_message);
    };
    AppService.prototype.show_success_popup = function (success_message) {
        if (success_message === void 0) { success_message = 'Done!'; }
        $('#global_success_popup').modal('show');
        $('#global_success_popup_text').text(success_message);
    };
    AppService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/app.service.js.map