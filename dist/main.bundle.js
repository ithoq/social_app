webpackJsonp([0,3],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_UploadedFile__ = __webpack_require__(624);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EntryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EntryService = (function () {
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
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"](function (observable) {
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
                        Files.push(_this.appService.map(file, new __WEBPACK_IMPORTED_MODULE_5__models_UploadedFile__["a" /* UploadedFile */]()));
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], EntryService);
    return EntryService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/entry.service.js.map

/***/ },

/***/ 1130:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(486);


/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
/**
 * Created by officeaccount on 02/02/2017.
 */
var User = (function () {
    function User() {
        this.Nickname = '';
        this.address = '';
        this.FirstName = '';
        this.LastName = "";
        this.Email = "";
        this.UserId = "";
        this.Color = "";
        this.DateBirthDay = "";
        this.ImageURL = "";
        this.ThumbURL = "";
        this.ManagedByUserId = "";
        this.ManagedByUserName = "";
        this.ManagedByUserNickName = "";
    }
    return User;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/User.js.map

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_EntryCategory__ = __webpack_require__(623);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
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
            new __WEBPACK_IMPORTED_MODULE_2__models_EntryCategory__["a" /* EntryCategory */]('Place', 'icon-places-big.png', 'Lorem ipsum dolor sit amet'),
            new __WEBPACK_IMPORTED_MODULE_2__models_EntryCategory__["a" /* EntryCategory */]('Learning', 'icon-learning-big.png', 'Lorem ipsum dolor sit amet'),
            new __WEBPACK_IMPORTED_MODULE_2__models_EntryCategory__["a" /* EntryCategory */]('Health', 'icon-health-big.png', 'Lorem ipsum dolor sit amet'),
            new __WEBPACK_IMPORTED_MODULE_2__models_EntryCategory__["a" /* EntryCategory */]('Fitness', 'icon-fitness-big.png', 'Lorem ipsum dolor sit amet'),
            new __WEBPACK_IMPORTED_MODULE_2__models_EntryCategory__["a" /* EntryCategory */]('Celebration', 'icon-celebration-big.png', 'Lorem ipsum dolor sit amet'),
            new __WEBPACK_IMPORTED_MODULE_2__models_EntryCategory__["a" /* EntryCategory */]('Faves', 'icon-faves-big.png', 'Lorem ipsum dolor sit amet'),
            new __WEBPACK_IMPORTED_MODULE_2__models_EntryCategory__["a" /* EntryCategory */]('Purpose', 'icon-world-big.png', 'Lorem ipsum dolor sit amet'),
            new __WEBPACK_IMPORTED_MODULE_2__models_EntryCategory__["a" /* EntryCategory */]('People', 'icon-images-big.png', 'Lorem ipsum dolor sit amet'),
            new __WEBPACK_IMPORTED_MODULE_2__models_EntryCategory__["a" /* EntryCategory */]('Bigs', 'logo.png', 'Lorem ipsum dolor sit amet'),
            new __WEBPACK_IMPORTED_MODULE_2__models_EntryCategory__["a" /* EntryCategory */]('Other', 'icon-growth-big.png', 'Lorem ipsum dolor sit amet'),
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
        object = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](object);
        target = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](target);
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
        stack = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](stack);
        for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
            var stackItem = stack_1[_i];
            if (stackItem == key)
                return true;
        }
        return false;
    };
    AppService.prototype.property_to_array = function (property, stack) {
        stack = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](stack);
        var arr = [];
        for (var _i = 0, stack_2 = stack; _i < stack_2.length; _i++) {
            var stackItem = stack_2[_i];
            arr.push(stackItem[property]);
        }
        return arr;
    };
    AppService.prototype.property_in_array = function (property, value, stack) {
        stack = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](stack);
        for (var _i = 0, stack_3 = stack; _i < stack_3.length; _i++) {
            var stackItem = stack_3[_i];
            if (stackItem[property] == value)
                return true;
        }
        return false;
    };
    AppService.prototype.find_obj_by_prop = function (property, value, stack) {
        stack = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](stack);
        for (var _i = 0, stack_4 = stack; _i < stack_4.length; _i++) {
            var stackItem = stack_4[_i];
            if (stackItem[property] == value)
                return stackItem;
        }
        return null;
    };
    AppService.prototype.remove_obj_by_property = function (property, value, stack) {
        stack = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](stack);
        var updatedStack = [];
        for (var _i = 0, stack_5 = stack; _i < stack_5.length; _i++) {
            var stackItem = stack_5[_i];
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
    AppService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app.service.js.map

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileManagementService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileManagementService = (function () {
    function ProfileManagementService(router) {
        this.router = router;
        this.allowColorChooser = {
            current: false,
            default: false
        };
        this.color = {
            current: null,
            default: null
        };
        this.profileData = {
            current: null,
            default: null
        };
    }
    ProfileManagementService.prototype.setAllowColorChooser = function (value) {
        this.allowColorChooser.current = value;
    };
    ;
    /*
     returns the current title from the title object
     set current title with the default one.
     basically its like a flash message. which can only be used once.
     */
    ProfileManagementService.prototype.getAllowColorChooser = function () {
        var value = this.allowColorChooser.current;
        this.allowColorChooser.current = this.allowColorChooser.default;
        return value;
    };
    ProfileManagementService.prototype.setColor = function (value) {
        this.color.current = value;
    };
    ;
    /*
     returns the current title from the title object
     set current title with the default one.
     basically its like a flash message. which can only be used once.
     */
    ProfileManagementService.prototype.getColor = function () {
        var value = this.color.current;
        this.color.current = this.color.default;
        return value;
    };
    ProfileManagementService.prototype.setProfileData = function (value) {
        this.profileData.current = value;
    };
    ;
    /*
     returns the current title from the title object
     set current title with the default one.
     basically its like a flash message. which can only be used once.
     */
    ProfileManagementService.prototype.getProfileData = function () {
        var value = this.profileData.current;
        this.profileData.current = this.profileData.default;
        return value;
    };
    ProfileManagementService.prototype.canActivate = function () {
        if (!this.getAllowColorChooser()) {
            this.router.navigate(['create-profile']);
        }
        else {
            return true;
        }
    };
    ProfileManagementService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], ProfileManagementService);
    return ProfileManagementService;
    var _a;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/profile-management.service.js.map

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RightContentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightContentService = (function () {
    function RightContentService() {
        this.aside_in = false;
    }
    RightContentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], RightContentService);
    return RightContentService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/right-content.service.js.map

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entry_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TimelineService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimelineService = (function () {
    function TimelineService(http, appService, auth, entryService) {
        this.http = http;
        this.appService = appService;
        this.auth = auth;
        this.entryService = entryService;
        this.userTimelines = [];
        var loggedInUser = this.auth.getUser();
        if (loggedInUser != null) {
            this.setUserTimelines(this.auth.getUser().timelines);
        }
    }
    TimelineService.prototype.create = function (data) {
        var querystr = "";
        for (var propertyName in data) {
            querystr += '&' + propertyName + '=' + data[propertyName];
        }
        return this.http.get(this.appService.api_end_point + 'timelineCreate/' + this.auth.get_session_token() + "/" + querystr);
    };
    TimelineService.prototype.get = function (timeline_id, user_id) {
        if (user_id === void 0) { user_id = ''; }
        return this.http.get(this.appService.api_end_point + 'userTimeline/' + this.auth.get_session_token() + "/&TimelineId=" + timeline_id);
    };
    TimelineService.prototype.getUserTimelines = function () {
        return this.http.get(this.appService.api_end_point + 'timelineDetails/' + this.auth.get_session_token() + "/");
    };
    TimelineService.prototype.setUserTimelines = function (timelines) {
        this.userTimelines = timelines;
    };
    TimelineService.prototype.inviteUsers = function (timelineId, users, emails) {
        return this.http.get(this.appService.api_end_point + 'timelineInviteUsers/' + this.auth.get_session_token() + "/&TimelineId=" + timelineId + "&InviteUsers=" + users + "&InviteEmails=" + emails);
    };
    TimelineService.prototype.removeUsers = function (timelineId, users) {
        return this.http.get(this.appService.api_end_point + 'timelineInviteUsers/' + this.auth.get_session_token() + "/&TimelineId=" + timelineId + "&RemoveUsers=" + users);
    };
    TimelineService.prototype.update = function (timelineId, data) {
        var querystr = "";
        for (var propertyName in data) {
            querystr += '&' + propertyName + '=' + data[propertyName];
        }
        return this.http.get(this.appService.api_end_point + 'timelineUpdate/' + this.auth.get_session_token() + "/&TimelineId=" + timelineId + querystr);
    };
    TimelineService.prototype.getAllTimelinesWithEntries = function () {
        var timelinesString = localStorage.getItem('allTimelinesWithEntries');
        if (timelinesString != null) {
            var timelines = JSON.parse(LZString.decompress(localStorage.getItem('allTimelinesWithEntries')));
            return (timelines == null) ? [] : timelines;
        }
        return [];
    };
    TimelineService.prototype.flushAllTimelinesFromLocalStorage = function () {
        return localStorage.removeItem('allTimelinesWithEntries');
    };
    TimelineService.prototype.pushTimelineWithEntires = function (timeline) {
        var existingTimelines = this.getAllTimelinesWithEntries();
        existingTimelines = this.appService.remove_obj_by_property('Id', timeline.Id, existingTimelines);
        existingTimelines.push(timeline);
        localStorage.setItem('allTimelinesWithEntries', LZString.compress(JSON.stringify(existingTimelines)));
        return existingTimelines;
    };
    TimelineService.prototype.pushEntryInTimeline = function (timelineId, entry) {
        var timeline = this.appService.find_obj_by_prop('Id', timelineId, this.getAllTimelinesWithEntries());
        if (timeline != null) {
            var entries = timeline.Entries;
            entries = this.appService.remove_obj_by_property('EntryId', entry.EntryId, timeline.Entries);
            entries.push(entry);
            timeline.Entries = this.entryService.sortEntriesByDate(entries);
            this.pushTimelineWithEntires(timeline);
        }
        return this.getAllTimelinesWithEntries();
    };
    TimelineService.prototype.removeEntriesFromTimelines = function (timlines, givenEntries) {
        var timelines = this.getAllTimelinesWithEntries();
        var updatedTimelines = [];
        for (var _i = 0, timelines_1 = timelines; _i < timelines_1.length; _i++) {
            var timeline = timelines_1[_i];
            var entries = [];
            for (var _a = 0, _b = timeline.Entries; _a < _b.length; _a++) {
                var timelineEntry = _b[_a];
                for (var _c = 0, givenEntries_1 = givenEntries; _c < givenEntries_1.length; _c++) {
                    var givenEntry = givenEntries_1[_c];
                    if (timelineEntry.EntryId != givenEntry) {
                        entries.push(timelineEntry);
                    }
                }
            }
            timeline.Entries = entries;
            updatedTimelines.push(timeline);
        }
        localStorage.setItem('allTimelinesWithEntries', LZString.compress(JSON.stringify(updatedTimelines)));
        return updatedTimelines;
    };
    TimelineService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__entry_service__["a" /* EntryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__entry_service__["a" /* EntryService */]) === 'function' && _d) || Object])
    ], TimelineService);
    return TimelineService;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/timeline.service.js.map

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Timeline; });
/**
 * Created by officeaccount on 13/02/2017.
 */
var Timeline = (function () {
    function Timeline() {
        this.CreatedByUser = '';
        this.CreatedByUserId = '';
        this.DateCreated = '';
        this.Id = '';
        this.Name = '';
        this.Entries = [];
        this.Users = [];
    }
    return Timeline;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/Timeline.js.map

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MediumToManageEntryService; });
//this service is used to transfer data from any component to login component
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediumToManageEntryService = (function () {
    function MediumToManageEntryService() {
        this.post = {
            current: null,
            default: null
        };
        this.tempPostTimelines = {
            current: null,
            default: null
        };
    }
    MediumToManageEntryService.prototype.setPost = function (post) {
        this.post.current = post;
    };
    ;
    /*
     returns the current title from the post object
     set current post with the default one.
     basically its like a flash message. which can only be used once.
     */
    MediumToManageEntryService.prototype.getPost = function () {
        var post = this.post.current;
        this.post.current = this.post.default;
        return post;
    };
    MediumToManageEntryService.prototype.setTempPostTimelines = function (post) {
        this.tempPostTimelines.current = post;
    };
    ;
    /*
     returns the current title from the post object
     set current post with the default one.
     basically its like a flash message. which can only be used once.
     */
    MediumToManageEntryService.prototype.getTempPostTimelines = function () {
        var tempPostTimelines = this.tempPostTimelines.current;
        this.tempPostTimelines.current = this.tempPostTimelines.default;
        return tempPostTimelines;
    };
    MediumToManageEntryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], MediumToManageEntryService);
    return MediumToManageEntryService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/medium-to-manage-entry.service.js.map

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MediumToPasswordResetPromptService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediumToPasswordResetPromptService = (function () {
    function MediumToPasswordResetPromptService() {
        this.accessable = { current: false, default: false };
        this.email = { current: '', default: '' };
    }
    MediumToPasswordResetPromptService.prototype.setAccessable = function (accessable) {
        this.accessable.current = accessable;
    };
    ;
    /*
      returns the current accessable from the email object
      set current accessable with the default one.
      basically its like a flash message. which can only be used once.
     */
    MediumToPasswordResetPromptService.prototype.getAccessable = function () {
        var accessable = this.accessable.current;
        this.accessable.current = this.accessable.default;
        return accessable;
    };
    MediumToPasswordResetPromptService.prototype.setEmail = function (email) {
        this.email.current = email;
    };
    ;
    /*
      returns the current email from the email object
      set current email with the default one.
      basically its like a flash message. which can only be used once.
     */
    MediumToPasswordResetPromptService.prototype.getEmail = function () {
        var email = this.email.current;
        this.email.current = this.email.default;
        return email;
    };
    MediumToPasswordResetPromptService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], MediumToPasswordResetPromptService);
    return MediumToPasswordResetPromptService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/medium-to-password-reset-prompt.service.js.map

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MediumToPostDetailService; });
//this service is used to transfer data from any component to login component
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediumToPostDetailService = (function () {
    function MediumToPostDetailService() {
        this.post = {
            current: null,
            default: null
        };
    }
    MediumToPostDetailService.prototype.setPost = function (post) {
        this.post.current = post;
    };
    ;
    /*
      returns the current title from the post object
      set current post with the default one.
      basically its like a flash message. which can only be used once.
     */
    MediumToPostDetailService.prototype.getPost = function () {
        var post = this.post.current;
        this.post.current = this.post.default;
        return post;
    };
    MediumToPostDetailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], MediumToPostDetailService);
    return MediumToPostDetailService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/medium-to-post-detail.service.js.map

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var toggleBtn = $('.mainnav-toggle');
        //alert(toggleBtn);
        //  $(document).on('click', '.mainnav-toggle', function(e){
        toggleBtn.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var niftyContainer = $('#container');
            var niftyWindow = $(window);
            var widnowwidth = niftyWindow.width();
            if (widnowwidth > 767) {
                niftyContainer.toggleClass('mainnav-lg mainnav-sm');
            }
            else {
                niftyContainer.toggleClass('mainnav-sm mainnav-in');
            }
        });
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-header',
            template: __webpack_require__(844),
            styles: [__webpack_require__(807)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/header.component.js.map

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MediumToLoginService; });
//this service is used to transfer data from any component to login component
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediumToLoginService = (function () {
    function MediumToLoginService() {
        this.title = {
            current: 'Riza Login',
            default: 'Riza Login'
        };
    }
    MediumToLoginService.prototype.setTitle = function (title) {
        this.title.current = title;
    };
    ;
    /*
      returns the current title from the title object
      set current title with the default one.
      basically its like a flash message. which can only be used once.
     */
    MediumToLoginService.prototype.getTitle = function () {
        var title = this.title.current;
        this.title.current = this.title.default;
        return title;
    };
    MediumToLoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], MediumToLoginService);
    return MediumToLoginService;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/medium-to-login.service.js.map

/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_right_content_service__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddContentBtnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddContentBtnComponent = (function () {
    function AddContentBtnComponent(rightContent) {
        this.rightContent = rightContent;
        this.content = 'Add Content';
    }
    AddContentBtnComponent.prototype.asideToggle = function () {
        this.rightContent.aside_in = !this.rightContent.aside_in;
    };
    AddContentBtnComponent.prototype.ngOnInit = function () {
    };
    AddContentBtnComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-content-btn',
            template: __webpack_require__(828),
            styles: [__webpack_require__(791)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_right_content_service__["a" /* RightContentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_right_content_service__["a" /* RightContentService */]) === 'function' && _a) || Object])
    ], AddContentBtnComponent);
    return AddContentBtnComponent;
    var _a;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/add-content-btn.component.js.map

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AntiAuthParentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AntiAuthParentComponent = (function () {
    function AntiAuthParentComponent() {
    }
    AntiAuthParentComponent.prototype.ngOnInit = function () {
    };
    AntiAuthParentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-anti-auth-parent',
            template: __webpack_require__(829),
            styles: [__webpack_require__(792)]
        }), 
        __metadata('design:paramtypes', [])
    ], AntiAuthParentComponent);
    return AntiAuthParentComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/anti-auth-parent.component.js.map

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthParentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthParentComponent = (function () {
    function AuthParentComponent() {
    }
    AuthParentComponent.prototype.ngOnInit = function () {
    };
    AuthParentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-auth-parent',
            template: __webpack_require__(830),
            styles: [__webpack_require__(793)]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthParentComponent);
    return AuthParentComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/auth-parent.component.js.map

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Timeline__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_timeline_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_entry_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateCustomLogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateCustomLogComponent = (function () {
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
        var timeline = new __WEBPACK_IMPORTED_MODULE_3__models_Timeline__["a" /* Timeline */]();
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-custom-log',
            template: __webpack_require__(835),
            styles: [__webpack_require__(798)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* Location */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_timeline_service__["a" /* TimelineService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_entry_service__["a" /* EntryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_entry_service__["a" /* EntryService */]) === 'function' && _g) || Object])
    ], CreateCustomLogComponent);
    return CreateCustomLogComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/create-custom-log.component.js.map

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_UserStuff__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateManagedUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateManagedUserComponent = (function () {
    function CreateManagedUserComponent(router, auth, usersService) {
        this.router = router;
        this.auth = auth;
        this.usersService = usersService;
        this.title = 'Create Managed Profile';
        this.formBusy = false;
    }
    CreateManagedUserComponent.prototype.ngOnInit = function () {
    };
    CreateManagedUserComponent.prototype.profileCreated = function (event) {
        var _this = this;
        this.usersService.getUserTimelinesAndStuff().subscribe(function (data) {
            var mapedData = data.json().payload;
            var userStuff = new __WEBPACK_IMPORTED_MODULE_4__models_UserStuff__["a" /* UserStuff */](mapedData.User, mapedData.Timelines, mapedData.ManagedUsers);
            _this.auth.setUser(JSON.stringify(userStuff));
            alert('Managed profile created successfully');
            _this.formBusy = false;
            _this.router.navigate(['/manage-profiles']);
        });
    };
    CreateManagedUserComponent.prototype.profileCreating = function (event) {
        this.formBusy = true;
    };
    CreateManagedUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-managed-user',
            template: __webpack_require__(837),
            styles: [__webpack_require__(800)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === 'function' && _c) || Object])
    ], CreateManagedUserComponent);
    return CreateManagedUserComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/create-managed-user.component.js.map

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_medium_to_login_service__ = __webpack_require__(262);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateNewPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateNewPasswordComponent = (function () {
    function CreateNewPasswordComponent(http, router, mediumToLogin) {
        this.http = http;
        this.router = router;
        this.mediumToLogin = mediumToLogin;
    }
    CreateNewPasswordComponent.prototype.createNewPassword = function (form) {
        this.mediumToLogin.setTitle('Your Riza password has been reset.');
        this.router.navigate(['login']);
    };
    CreateNewPasswordComponent.prototype.ngOnInit = function () { };
    CreateNewPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-create-new-password',
            template: __webpack_require__(838),
            styles: [__webpack_require__(801)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_medium_to_login_service__["a" /* MediumToLoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_medium_to_login_service__["a" /* MediumToLoginService */]) === 'function' && _c) || Object])
    ], CreateNewPasswordComponent);
    return CreateNewPasswordComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/create-new-password.component.js.map

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_entry_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_profile_management_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_Post__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CreateProfileComponent = (function () {
    function CreateProfileComponent(userService, timelineService, entrySerice, auth, router, profileManagementService, http, appService) {
        this.userService = userService;
        this.timelineService = timelineService;
        this.entrySerice = entrySerice;
        this.auth = auth;
        this.router = router;
        this.profileManagementService = profileManagementService;
        this.http = http;
        this.appService = appService;
        this.editMode = true;
        this.formBusy = false;
    }
    CreateProfileComponent.prototype.profileUpdating = function (event) {
        this.formBusy = true;
    };
    CreateProfileComponent.prototype.profileUpdated = function (event) {
        var _this = this;
        var inputData = event.user;
        var userStuff = this.auth.getUser();
        userStuff.profile = event.user;
        this.auth.setUser(JSON.stringify(userStuff));
        if (this.auth.getUser().timelines.length == 0) {
            this.timelineService.create({ Name: 'My Private Timeline' }).subscribe(function (data) {
                var user = _this.auth.getUser();
                user.timelines = [{ Id: data.json().payload.TimelineId, Name: 'My Private Timeline' }];
                _this.auth.setUser(JSON.stringify(user));
                var entry = new __WEBPACK_IMPORTED_MODULE_9__models_Post__["a" /* Post */]();
                entry.DateStart = inputData.DateBirthDay;
                entry.Type = 'Celebration';
                entry.Name = 'Birthday';
                entry['TimelineId'] = data.json().payload.TimelineId;
                //adding the first entry
                var querystr = "";
                for (var propertyName in entry) {
                    querystr += '&' + propertyName + '=' + entry[propertyName];
                }
                _this.http.get(_this.appService.api_end_point + 'entryAdd/' + _this.auth.get_session_token() + "/" + querystr).subscribe(function (data) {
                    _this.formBusy = false;
                    _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
                });
            }, function (error) {
                _this.formBusy = false;
            });
        }
        else {
            this.formBusy = false;
            alert('something went wrong');
        }
    };
    CreateProfileComponent.prototype.someThingWentWrong = function (event) {
        alert(event.error.msg);
        this.formBusy = false;
    };
    CreateProfileComponent.prototype.ngOnInit = function () {
    };
    CreateProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-profile',
            template: __webpack_require__(839),
            styles: [__webpack_require__(802)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_entry_service__["a" /* EntryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_entry_service__["a" /* EntryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_profile_management_service__["a" /* ProfileManagementService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_profile_management_service__["a" /* ProfileManagementService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */]) === 'function' && _h) || Object])
    ], CreateProfileComponent);
    return CreateProfileComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/create-profile.component.js.map

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EditProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfileComponent = (function () {
    function EditProfileComponent(route, location) {
        this.route = route;
        this.location = location;
        this.user = null;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            if (data.user == null) {
                alert('no user found');
                _this.location.back();
            }
            _this.user = data.user;
        }, function (error) { });
    };
    EditProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(840),
            styles: [__webpack_require__(803)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === 'function' && _b) || Object])
    ], EditProfileComponent);
    return EditProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/edit-profile.component.js.map

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_medium_to_password_reset_prompt_service__ = __webpack_require__(185);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ForgotpassComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotpassComponent = (function () {
    function ForgotpassComponent(auth, appService, http, router, route, mediumToPasswordResetPromptService) {
        this.auth = auth;
        this.appService = appService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.mediumToPasswordResetPromptService = mediumToPasswordResetPromptService;
    }
    ;
    ForgotpassComponent.prototype.sendPasswordResetLink = function (form) {
        var _this = this;
        this.http.get(this.appService.api_end_point + 'userPassReset/' + this.auth.get_session_token() + '/&Email=' + form.value.email).subscribe(function (data) {
            /*
             giving the permissions to user so that
             he can access password reset prompt message
             */
            _this.mediumToPasswordResetPromptService.setAccessable(true);
            _this.mediumToPasswordResetPromptService.setEmail(form.value.email);
            _this.router.navigate(['pass-reset']);
        }, function (e) {
            _this.errors = e.json()['error_message'];
        });
    };
    ;
    ForgotpassComponent.prototype.ngOnInit = function () { };
    ;
    ForgotpassComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-forgotpass',
            template: __webpack_require__(842),
            styles: [__webpack_require__(805)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_medium_to_password_reset_prompt_service__["a" /* MediumToPasswordResetPromptService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_medium_to_password_reset_prompt_service__["a" /* MediumToPasswordResetPromptService */]) === 'function' && _f) || Object])
    ], ForgotpassComponent);
    return ForgotpassComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/forgotpass.component.js.map

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_right_content_service__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    /* ----------------------- */
    function HomeComponent(auth, appRouter, rightContent) {
        this.auth = auth;
        this.appRouter = appRouter;
        this.rightContent = rightContent;
        /* map api */
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.showmap = false;
    }
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (response) {
            _this.appRouter.navigate(['login']);
        }, function (error) { });
    };
    HomeComponent.prototype.asideToggle = function () {
        this.rightContent.aside_in = !this.rightContent.aside_in;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showMap = function () {
        this.showmap = !this.showmap;
    };
    HomeComponent.prototype.profileUpdating = function (event) {
        console.log(event);
    };
    HomeComponent.prototype.profileUpdated = function (event) {
        console.log(event);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-home',
            template: __webpack_require__(846),
            styles: [__webpack_require__(809)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_right_content_service__["a" /* RightContentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_right_content_service__["a" /* RightContentService */]) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/home.component.js.map

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_UserStuff__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InviteManagedUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InviteManagedUserComponent = (function () {
    function InviteManagedUserComponent(router, auth, usersService, timelineService, activatedRoute) {
        this.router = router;
        this.auth = auth;
        this.usersService = usersService;
        this.timelineService = timelineService;
        this.activatedRoute = activatedRoute;
        this.timelineId = '';
        this.title = 'Invite Managed Profile';
        this.formBusy = false;
    }
    InviteManagedUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .map(function (params) { return params['id']; })
            .subscribe(function (timelineId) {
            _this.timelineId = timelineId;
        });
    };
    InviteManagedUserComponent.prototype.profileCreated = function (event) {
        var _this = this;
        this.usersService.getUserTimelinesAndStuff().subscribe(function (data) {
            var mapedData = data.json().payload;
            var userStuff = new __WEBPACK_IMPORTED_MODULE_4__models_UserStuff__["a" /* UserStuff */](mapedData.User, mapedData.Timelines, mapedData.ManagedUsers);
            _this.auth.setUser(JSON.stringify(userStuff));
            _this.timelineService.inviteUsers(_this.timelineId, event.user.UserId, "").subscribe(function (data) {
                alert('Managed user invited successfully');
                _this.formBusy = false;
                _this.router.navigate(['/manage-logs']);
            });
        });
    };
    InviteManagedUserComponent.prototype.profileCreating = function (event) {
        this.formBusy = true;
    };
    InviteManagedUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invite-managed-user',
            template: __webpack_require__(847),
            styles: [__webpack_require__(810)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__["a" /* TimelineService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], InviteManagedUserComponent);
    return InviteManagedUserComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/invite-managed-user.component.js.map

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InviteUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InviteUsersComponent = (function () {
    function InviteUsersComponent(timelineService, route, router, users, appService, auth) {
        this.timelineService = timelineService;
        this.route = route;
        this.router = router;
        this.users = users;
        this.appService = appService;
        this.auth = auth;
        this.searchedUsers = [];
        this.timeline = null;
        this.email = '';
        this.selectedUsers = [];
    }
    InviteUsersComponent.prototype.invite = function (form) {
        var _this = this;
        var users = this.selectedUsers.join(',');
        var emails = form.value.email;
        this.timelineService.inviteUsers(this.timeline.Id, users, emails).subscribe(function (data) {
            alert('invitation sent successfully');
            _this.router.navigate(['/manage-logs']);
        });
    };
    InviteUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var invite_users_multi_select = $('.invite-users-multi-select');
        invite_users_multi_select.select2({
            ajax: {
                url: function (params) {
                    return _this.appService.api_end_point + 'userSearch/' + _this.auth.get_session_token() + "/&SearchFor=" + params.term;
                },
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {};
                },
                processResults: function (data, params) {
                    params.page = params.page || 1;
                    var users = [];
                    $.each(data.payload.Users, function (index, user) {
                        user.id = user.UserId;
                        users.push(user);
                    });
                    return {
                        //results: data.payload.Users,
                        results: users,
                        pagination: {
                            more: (params.page * 30) < data.total_count
                        }
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            minimumInputLength: 1,
            templateResult: function (repo) {
                return "<div class='select2-result-repository__title'>" + repo.FirstName + ' ' + repo.LastName + "</div>";
            },
            templateSelection: function (repo) {
                return repo.FirstName + ' ' + repo.LastName;
            } // omitted for brevity, see the source of this page
        });
        invite_users_multi_select.on("select2:select", function (e) {
            _this.selectedUsers.push(e.params.data.UserId);
        });
        invite_users_multi_select.on("select2:unselect", function (e) {
            var index = _this.selectedUsers.indexOf(e.params.data.UserId);
            if (index > -1) {
                _this.selectedUsers.splice(index, 1);
            }
        });
        this.route.data
            .subscribe(function (data) {
            if (data.log == null) {
                _this.router.navigate(['/manage-logs']);
            }
            _this.timeline = data.log;
        }, function (error) { });
    };
    InviteUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invite-users',
            template: __webpack_require__(848),
            styles: [__webpack_require__(811)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__["a" /* TimelineService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object])
    ], InviteUsersComponent);
    return InviteUsersComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/invite-users.component.js.map

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_medium_to_login_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_UserStuff__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_timeline_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    function LoginComponent(authenticator, rootService, httpService, appRouter, route, mediumToLogin, timelineService) {
        this.authenticator = authenticator;
        this.rootService = rootService;
        this.httpService = httpService;
        this.route = route;
        this.mediumToLogin = mediumToLogin;
        this.timelineService = timelineService;
        this.auth = authenticator;
        this.appService = rootService;
        this.http = httpService;
        this.router = appRouter;
        this.title = this.mediumToLogin.getTitle();
    }
    LoginComponent.prototype.attempt = function (form) {
        var _this = this;
        this.auth.attempt(form.value).subscribe(function (data) {
            console.log(data); //TODO: please map this data te prevent issues if timeline is null
            /*
             saving the authenticated user in the localStorage
             */
            var mapedData = data.json().payload;
            console.log(mapedData);
            var userStuff = new __WEBPACK_IMPORTED_MODULE_6__models_UserStuff__["a" /* UserStuff */](mapedData.User, mapedData.Timelines, mapedData.ManagedUsers);
            _this.auth.setUser(JSON.stringify(userStuff));
            _this.timelineService.flushAllTimelinesFromLocalStorage();
            if (_this.auth.getUser().timelines.length > 0) {
                _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
            }
            else
                _this.router.navigate(['create-profile']);
        }, function (e) {
            _this.errors = (e.json()['error_message'] != undefined) ? e.json()['error_message'] : 'Something went wrong with the server or may be you internet connection is lost. please try a few moments later.';
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        //this.contact = this.route.snapshot.data['contact'];
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-login',
            template: __webpack_require__(850),
            styles: [__webpack_require__(813)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_medium_to_login_service__["a" /* MediumToLoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_medium_to_login_service__["a" /* MediumToLoginService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_timeline_service__["a" /* TimelineService */]) === 'function' && _g) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/login.component.js.map

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_entry_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_right_content_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_medium_to_manage_entry_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_Post__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_timeline_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ManageEntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ManageEntryComponent = (function () {
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
        this.entrycreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.entryupdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        this.types = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](this.app.entryContentCategories);
        var userStuff = this.auth.getUser();
        this.timelines = userStuff.timelines;
        this.managedUsers = userStuff.managedUsers;
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
            _this.timelineService.removeEntriesFromTimelines(_this.app.property_to_array('Id', _this.auth.getUser().timelines), [_this.existingEntry.EntryId]);
            alert('Post Deleted Successfully!');
            _this.rightContentService.aside_in = false;
            if (_this.auth.getUser().timelines.length > 0)
                _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
            else
                _this.router.navigate(['/create-profile']);
        }, function (error) {
            console.log(error.json().error_message);
        });
    };
    ManageEntryComponent.prototype.removeImage = function (image_id) {
        this.uploadedFiles = this.app.remove_obj_by_property('Id', image_id, this.uploadedFiles);
        this.uploadedFileIds = this.app.property_to_array('Id', this.uploadedFiles).join(',');
        this.existingFiles = this.app.remove_obj_by_property('Id', image_id, this.existingFiles);
        this.removedFileIds += image_id;
    };
    ManageEntryComponent.prototype.filesSelected = function (event) {
        var _this = this;
        this.uploadingFiles = true;
        var files = new FormData();
        // operation starts here.....
        $.each(event.target.files, function (key, value) {
            files.append('Image' + (key + 1), value);
        });
        this.entryService.uploadImages(files, function (evt) {
            if (evt.lengthComputable) {
                var percentComplete = (evt.loaded / evt.total) * 100;
                console.log(percentComplete);
            }
        }).subscribe(function (files) {
            _this.uploadedFiles = files;
            _this.uploadedFileIds = _this.app.property_to_array('Id', files).join(',');
            //this.selectedFiles = this.app.array_unique_merge(this.existingFiles, this.uploadedFiles, 'Id');
            _this.uploadingFiles = false;
        });
    };
    ManageEntryComponent.prototype.mapUpdatedEntryData = function (data) {
        data = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](data);
        var updatedPost = new __WEBPACK_IMPORTED_MODULE_7__models_Post__["a" /* Post */]();
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
    ManageEntryComponent.prototype.create = function (form, event) {
        var _this = this;
        if (this.uploadingPost)
            return false;
        if (this.uploadingFiles) {
            alert('please wait until your files are being uploaded.');
            return false;
        }
        var data = form.value;
        console.log(data);
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
            data.Lat = this.lat;
            data.Lng = this.lng;
            data.AddFileIds = this.uploadedFileIds;
            //TODO: add functionality to create a post for a managed user.
            if (this.existingEntry != null) {
                data.DeleteFileIds = this.removedFileIds;
                this.entryService.updateEntry(this.existingEntry.EntryId, data).subscribe(function (response) {
                    var uploadedEntry = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](data);
                    uploadedEntry.EntryId = _this.existingEntry.EntryId;
                    uploadedEntry.User = _this.auth.currentUser.FirstName + ' ' + _this.auth.currentUser.LastName;
                    uploadedEntry.UserId = _this.auth.currentUser.UserId;
                    uploadedEntry.Files = _this.app.array_unique_merge(_this.existingFiles, _this.uploadedFiles, 'Id');
                    var updatedEntry = _this.mapUpdatedEntryData(uploadedEntry);
                    _this.updateEntryInLocalStorage(updatedEntry);
                    _this.uploadingPost = false;
                    _this.entryupdated.emit({ data: updatedEntry });
                    alert('Post Updated Successfully!');
                    _this.rightContentService.aside_in = false;
                    $('#add-entry-form-wizard').bootstrapWizard('show', 0); //reset form
                }, function (error) {
                    alert(error.json().error_message);
                });
            }
            else {
                this.entryService.addEntry(data).subscribe(function (response) {
                    var uploadedEntry = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](data);
                    uploadedEntry.EntryId = response.json().payload.EntryId;
                    uploadedEntry.User = _this.auth.currentUser.FirstName + ' ' + _this.auth.currentUser.LastName;
                    uploadedEntry.UserId = _this.auth.currentUser.UserId;
                    uploadedEntry.Files = _this.uploadedFiles;
                    var updatedEntry = _this.mapUpdatedEntryData(uploadedEntry);
                    _this.updateEntryInLocalStorage(updatedEntry);
                    _this.uploadingPost = false;
                    _this.entrycreated.emit({ data: _this.seletedTimelines });
                    alert('Post Created Successfully!');
                    _this.rightContentService.aside_in = false;
                    $('#add-entry-form-wizard').bootstrapWizard('show', 0); //reset form
                    form.resetForm(); //reset form
                }, function (error) {
                    _this.uploadingPost = false;
                    alert('some thing went wrong with the server. please try again.');
                });
            }
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
        console.log(this.selectedModes);
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
            this.selectedModes = (this.existingEntry.Mode == '') ? [] : this.existingEntry.Mode.split(',');
            this.whatTags = this.existingEntry.WhatTags.split(',');
            this.whoTags = this.existingEntry.WhoTags.split(',');
            this.youTags = this.existingEntry.YouTags.split(',');
            this.existingFiles = this.existingEntry.Files;
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('EntryCreated'), 
        __metadata('design:type', Object)
    ], ManageEntryComponent.prototype, "entrycreated", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('EntryUpdated'), 
        __metadata('design:type', Object)
    ], ManageEntryComponent.prototype, "entryupdated", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ManageEntryComponent.prototype, "seletedTimelines", void 0);
    ManageEntryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-manage-entry',
            template: __webpack_require__(851),
            styles: [__webpack_require__(814)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_entry_service__["a" /* EntryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_entry_service__["a" /* EntryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__["MapsAPILoader"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__["MapsAPILoader"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_right_content_service__["a" /* RightContentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_right_content_service__["a" /* RightContentService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_medium_to_manage_entry_service__["a" /* MediumToManageEntryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_medium_to_manage_entry_service__["a" /* MediumToManageEntryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__services_timeline_service__["a" /* TimelineService */]) === 'function' && _j) || Object])
    ], ManageEntryComponent);
    return ManageEntryComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/manage-entry.component.js.map

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_TimelineDetail__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ManageLogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManageLogsComponent = (function () {
    function ManageLogsComponent(auth, route, app, timelineService, router) {
        this.auth = auth;
        this.route = route;
        this.app = app;
        this.timelineService = timelineService;
        this.router = router;
        this.timelines = [];
        this.create_log_modal_id = '';
        //this.timelines = this.auth.getUser().timelines;
        this.user = this.auth.getUser().profile;
    }
    ManageLogsComponent.prototype.createLog = function (form) {
        var _this = this;
        this.timelineService.create({ Name: form.value.Name }).subscribe(function (data) {
            var timelineDetails = new __WEBPACK_IMPORTED_MODULE_6__models_TimelineDetail__["a" /* TimelineDetail */]();
            timelineDetails.CreatedByUser = _this.auth.currentUser.FirstName + ' ' + _this.auth.currentUser.LastName;
            timelineDetails.CreatedByUserId = _this.auth.currentUser.UserId;
            timelineDetails.Id = data.json().payload.TimelineId;
            timelineDetails.Name = form.value.Name;
            timelineDetails.Users = [_this.auth.currentUser];
            var currentUser = __WEBPACK_IMPORTED_MODULE_5_lodash__["cloneDeep"](_this.auth.getUser());
            currentUser.timelines.push({ Id: timelineDetails.Id, Name: timelineDetails.Name });
            _this.timelineService.setUserTimelines(currentUser.timelines);
            _this.auth.setUser(JSON.stringify(currentUser));
            _this.timelines.push(timelineDetails);
            $('#' + _this.create_log_modal_id).modal('hide');
        });
    };
    ManageLogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.create_log_modal_id = 'edit-log-' + this.app.unique_id();
        this.route.data
            .subscribe(function (data) {
            _this.timelines = data.logs.json().payload;
        }, function (error) { });
    };
    ManageLogsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-logs',
            template: __webpack_require__(852),
            styles: [__webpack_require__(815)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _e) || Object])
    ], ManageLogsComponent);
    return ManageLogsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/manage-logs.component.js.map

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_UserStuff__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ManageProfilesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageProfilesComponent = (function () {
    function ManageProfilesComponent(auth, appService) {
        this.auth = auth;
        this.appService = appService;
        this.user = null;
        this.selectedImage = null;
        this.selectedThumbnail = '';
        this.formBusy = false;
        this.editMode = false;
        this.managedUsers = [];
    }
    ManageProfilesComponent.prototype.profileUpdated = function (event) {
        var oldUserStuff = this.auth.getUser();
        var userStuff = new __WEBPACK_IMPORTED_MODULE_4__models_UserStuff__["a" /* UserStuff */](event.user, oldUserStuff.timelines, oldUserStuff.managedUsers);
        this.auth.setUser(JSON.stringify(userStuff));
        this.managedUsers = userStuff.managedUsers;
    };
    ManageProfilesComponent.prototype.managedUserProfileUpdated = function (event) {
        var user = this.auth.getUser();
        var userStuff = new __WEBPACK_IMPORTED_MODULE_4__models_UserStuff__["a" /* UserStuff */](user.profile, user.timelines, user.managedUsers);
        this.auth.setUser(JSON.stringify(userStuff.updateManagedUser(event.user)));
    };
    ManageProfilesComponent.prototype.ngOnInit = function () {
        this.managedUsers = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.auth.getUser().managedUsers);
    };
    ManageProfilesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-create-profile',
            template: __webpack_require__(853),
            styles: [__webpack_require__(816)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object])
    ], ManageProfilesComponent);
    return ManageProfilesComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/manage-profiles.component.js.map

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_profile_management_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PickColorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PickColorComponent = (function () {
    function PickColorComponent(profileService, router, _location) {
        this.profileService = profileService;
        this.router = router;
        this._location = _location;
        this.colors = [
            'aquamarine',
            'beachblue',
            'bloodred',
            'brownbear',
            'chai',
            'cream',
            'creamsicleorange',
            'pinkrose',
            'plum',
            'bloodred',
            'brownbear',
            'cream'
        ];
    }
    PickColorComponent.prototype.clicked = function (color) {
        this.profileService.setColor(color);
        this._location.back();
    };
    PickColorComponent.prototype.ngOnInit = function () { };
    PickColorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-pick-color',
            template: __webpack_require__(854),
            styles: [__webpack_require__(817)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_profile_management_service__["a" /* ProfileManagementService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_profile_management_service__["a" /* ProfileManagementService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* Location */]) === 'function' && _c) || Object])
    ], PickColorComponent);
    return PickColorComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/pick-color.component.js.map

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ParentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentComponent = (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-parent',
            template: __webpack_require__(855),
            styles: [__webpack_require__(818)]
        }), 
        __metadata('design:paramtypes', [])
    ], ParentComponent);
    return ParentComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/parent.component.js.map

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_medium_to_password_reset_prompt_service__ = __webpack_require__(185);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PasswordResetPromptComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordResetPromptComponent = (function () {
    function PasswordResetPromptComponent(mediumToPasswordResetPromptService) {
        this.mediumToPasswordResetPromptService = mediumToPasswordResetPromptService;
        this.email = mediumToPasswordResetPromptService.getEmail();
    }
    PasswordResetPromptComponent.prototype.ngOnInit = function () {
    };
    PasswordResetPromptComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-password-reset-prompt',
            template: __webpack_require__(856),
            styles: [__webpack_require__(819)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_medium_to_password_reset_prompt_service__["a" /* MediumToPasswordResetPromptService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_medium_to_password_reset_prompt_service__["a" /* MediumToPasswordResetPromptService */]) === 'function' && _a) || Object])
    ], PasswordResetPromptComponent);
    return PasswordResetPromptComponent;
    var _a;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/password-reset-prompt.component.js.map

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_medium_to_manage_entry_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_content_btn_add_content_btn_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostDetailComponent = (function () {
    function PostDetailComponent(route, router, auth, mediumToManageEntry) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.mediumToManageEntry = mediumToManageEntry;
        this.bestSelfRating = 0;
        this.user = this.auth.getUser().profile;
    }
    PostDetailComponent.prototype.updatePost = function (event) {
        var post = event.data;
        localStorage.setItem('post', JSON.stringify(post));
        this.post = post;
    };
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            if (data.post == null) {
                _this.router.navigate(['/log/custom']);
            }
            else {
                _this.post = data.post;
                console.log(_this.post);
                var title = _this.post.DateStart.split(' ')[0] +
                    ' ' + _this.post.DateEnd.split(' ')[0];
                _this.headerComponent.title = title;
                if (_this.auth.currentUser.UserId == _this.post.UserId) {
                    _this.addContentBtnComponent.content = 'Edit Post';
                    _this.mediumToManageEntry.setPost(data.post);
                }
            }
        }, function (error) { });
    };
    PostDetailComponent.prototype.ngAfterViewInit = function () {
        //$(document).trigger('ready');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__add_content_btn_add_content_btn_component__["a" /* AddContentBtnComponent */]), 
        __metadata('design:type', Object)
    ], PostDetailComponent.prototype, "addContentBtnComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */]), 
        __metadata('design:type', Object)
    ], PostDetailComponent.prototype, "headerComponent", void 0);
    PostDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-detail',
            template: __webpack_require__(857),
            styles: [__webpack_require__(820)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_medium_to_manage_entry_service__["a" /* MediumToManageEntryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_medium_to_manage_entry_service__["a" /* MediumToManageEntryService */]) === 'function' && _d) || Object])
    ], PostDetailComponent);
    return PostDetailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/post-detail.component.js.map

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_User__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_UserStuff__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_timeline_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterComponent = (function () {
    function RegisterComponent(authenticator, rootService, httpService, appRouter, route, users, timelineService) {
        this.authenticator = authenticator;
        this.rootService = rootService;
        this.httpService = httpService;
        this.route = route;
        this.users = users;
        this.timelineService = timelineService;
        //default values
        this.email = '';
        this.pass = '';
        this.passagain = '';
        this.auth = authenticator;
        this.appService = rootService;
        this.http = httpService;
        this.router = appRouter;
        this.user = {
            email: '',
            password: ''
        };
        // if(localStorage.getItem('user_num') == null){
        //     localStorage.setItem('user_num', '5');
        // }
        // localStorage.setItem('user_num',(parseInt(localStorage.getItem('user_num'))+1)+'');
        // this.email = 'newuser'+localStorage.getItem('user_num')+'@gmail.com';
        // this.username = 'newuser'+localStorage.getItem('user_num');
    }
    RegisterComponent.prototype.registerUser = function (form) {
        var _this = this;
        if (!this.validate(form.value)) {
            return false;
        }
        this.users.register(form.value).subscribe(function (data) {
            _this.auth.attempt({ Email: form.value.email, Password: form.value.password }).subscribe(function (data) {
                /*
                 saving the authenticated user in the localStorage
                 */
                var user = new __WEBPACK_IMPORTED_MODULE_6__models_User__["a" /* User */]();
                var updatedUser = data.json().payload.User;
                for (var property in updatedUser) {
                    user[property] = updatedUser[property];
                }
                var userTimelines = (data.json().payload.Timelines == null) ? [] : data.json().payload.Timelines;
                var userStuff = new __WEBPACK_IMPORTED_MODULE_7__models_UserStuff__["a" /* UserStuff */](user, userTimelines, data.json().ManagedUsers);
                _this.auth.setUser(JSON.stringify(userStuff));
                _this.timelineService.flushAllTimelinesFromLocalStorage();
                if (_this.auth.getUser().timelines.length > 0)
                    _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
                else
                    _this.router.navigate(['create-profile']);
            }, function (e) {
                _this.errors = (e.json()['error_message'] != undefined) ? e.json()['error_message'] : 'Something went wrong with the server or may be you internet connection is lost. please try a few moments later.';
            });
        }, function (e) {
            _this.errors = e.json()['error_message'];
        });
    };
    RegisterComponent.prototype.validate = function (user) {
        if (user.password != user.confirmpass) {
            this.errors = "Password did not match!";
            return false;
        }
        return true;
    };
    RegisterComponent.prototype.ngOnInit = function () {
        //this.contact = this.route.snapshot.data['contact'];
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-register',
            template: __webpack_require__(859),
            styles: [__webpack_require__(822)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_timeline_service__["a" /* TimelineService */]) === 'function' && _g) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/register.component.js.map

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_entry_manage_entry_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Timeline__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_timeline_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewLogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewLogComponent = (function () {
    function ViewLogComponent(route, router, app, auth, timelineService) {
        this.route = route;
        this.router = router;
        this.app = app;
        this.auth = auth;
        this.timelineService = timelineService;
        this.timeline = null;
        this.timeline = new __WEBPACK_IMPORTED_MODULE_6__models_Timeline__["a" /* Timeline */]();
    }
    ViewLogComponent.prototype.timelineUpdated = function (event) {
        this.timeline = this.app.find_obj_by_prop('Id', this.timeline.Id, this.timelineService.getAllTimelinesWithEntries());
    };
    ViewLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            if (data.log == null) {
                _this.router.navigate(['/log/' + _this.auth.getUser().timelines[0].Id]);
            }
            else {
                //TODO: users array is not returned by the api yet.
                _this.timeline = data.log;
                console.log(_this.timeline);
                _this.headerComponent.title = _this.timeline.Name;
            }
        }, function (error) { });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__manage_entry_manage_entry_component__["a" /* ManageEntryComponent */]), 
        __metadata('design:type', Object)
    ], ViewLogComponent.prototype, "manageEntryComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */]), 
        __metadata('design:type', Object)
    ], ViewLogComponent.prototype, "headerComponent", void 0);
    ViewLogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-log',
            template: __webpack_require__(862),
            styles: [__webpack_require__(825)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_timeline_service__["a" /* TimelineService */]) === 'function' && _e) || Object])
    ], ViewLogComponent);
    return ViewLogComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/view-log.component.js.map

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewProfileComponent = (function () {
    function ViewProfileComponent(route, location) {
        this.route = route;
        this.location = location;
        this.user = null;
    }
    ViewProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            if (data.user == null) {
                alert('no user found');
                _this.location.back();
            }
            _this.user = data.user;
        }, function (error) { });
    };
    ViewProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-profile',
            template: __webpack_require__(863),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === 'function' && _b) || Object])
    ], ViewProfileComponent);
    return ViewProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/view-profile.component.js.map

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Post; });
/**
 * Created by officeaccount on 02/02/2017.
 */
var Post = (function () {
    function Post() {
        this.About = '';
        this.BestSelfRating = 0;
        this.CloseToOthers = 0;
        this.DateCreated = "";
        this.DateEnd = "";
        this.DateStart = "";
        this.Desc = "";
        this.EntryId = "";
        this.Files = [];
        this.Location = "";
        this.Lat = '';
        this.Lng = '';
        this.Mode = "";
        this.Name = "";
        this.Tags = "";
        this.Timelines = [];
        this.Type = "";
        this.WhatElse = "";
        this.WhatTags = "";
        this.WhoTags = "";
        this.YouTags = "";
        this.images = "";
        this.User = "";
        this.UserId = "";
    }
    return Post;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/Post.js.map

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TimelineDetail; });
/**
 * Created by officeaccount on 02/02/2017.
 */
var TimelineDetail = (function () {
    function TimelineDetail() {
        this.CreatedByUser = '';
        this.CreatedByUserId = '';
        this.DateCreated = '';
        this.Id = '';
        this.Name = '';
        this.Users = [];
    }
    return TimelineDetail;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/TimelineDetail.js.map

/***/ },

/***/ 485:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 485;


/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(603);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/main.js.map

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function () {
    function UsersService(http, appService, auth) {
        this.http = http;
        this.appService = appService;
        this.auth = auth;
    }
    UsersService.prototype.register = function (user) {
        return this.http.get(this.appService.api_end_point + 'userRegister/' + this.auth.get_session_token() + '/&Email=' + user.email + '&Pass=' + user.password + '');
    };
    UsersService.prototype.createManagedUser = function (user, managedById) {
        var querystr = "";
        for (var propertyName in user) {
            querystr += '&' + propertyName + '=' + user[propertyName];
        }
        return this.http.get(this.appService.api_end_point + 'userRegister/' + this.auth.get_session_token() + "/&ManagedById=" + managedById + querystr);
    };
    UsersService.prototype.updateSettings = function (managedProfile, userId, settings, image) {
        if (image === void 0) { image = null; }
        var querystr = "";
        for (var propertyName in settings) {
            querystr += '&' + propertyName + '=' + settings[propertyName];
        }
        return this.http.post(this.appService.api_end_point + 'userSettings/' + this.auth.get_session_token() + "/&" + ((managedProfile) ? "ManageUserId" : 'UserId') + "=" + userId + '' + querystr, image);
    };
    UsersService.prototype.searchByKeyword = function (keyword) {
        if (keyword === void 0) { keyword = ""; }
        return this.http.get(this.appService.api_end_point + 'userSearch/' + this.auth.get_session_token() + "/&SearchFor=" + keyword);
    };
    UsersService.prototype.getUserTimelinesAndStuff = function () {
        return this.http.get(this.appService.api_end_point + 'userSignin/' + this.auth.get_session_token());
    };
    UsersService.prototype.findMangedUserById = function (userId) {
        if (userId == this.auth.getUser().profile.UserId) {
            return this.auth.getUser().profile;
        }
        for (var _i = 0, _a = this.auth.getUser().managedUsers; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.UserId == userId) {
                return user;
            }
        }
        return null;
    };
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], UsersService);
    return UsersService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/users.service.js.map

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_User__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, appService) {
        this.http = http;
        this.appService = appService;
        this.app_token = '';
        this.session_token = '';
        this.user = null;
        this.currentUser = null;
        this.currentUser = (this.getUser() == null) ? new __WEBPACK_IMPORTED_MODULE_4__models_User__["a" /* User */]() : this.getUser().profile;
    }
    AuthService.prototype.getUser = function () {
        return (localStorage.getItem('user') != null) ? JSON.parse(localStorage.getItem('user')) : null;
    };
    AuthService.prototype.grab_app_key = function () {
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observable) {
            observable.next("WebClient"); //Todo: put it in the config file.
        });
    };
    AuthService.prototype.grab_session_token = function (app_key) {
        return this.http.post(this.appService.api_end_point + "getSession/&AppKey=" + app_key, {});
    };
    AuthService.prototype.get_app_token = function () {
        return localStorage.getItem('app_token');
    };
    ;
    AuthService.prototype.set_app_token = function (token) {
        localStorage.setItem('app_token', token);
        this.app_token = token;
    };
    ;
    AuthService.prototype.get_session_token = function () {
        return localStorage.getItem('session_token');
    };
    ;
    AuthService.prototype.set_session_token = function (token) {
        localStorage.setItem('session_token', token);
        this.session_token = token;
    };
    ;
    AuthService.prototype.authenticated = function () {
        return (this.getUser() != null);
    };
    //sets the authenticated user in the localStorage
    AuthService.prototype.setUser = function (user) {
        localStorage.setItem('user', user);
        this.user = user;
        this.currentUser = JSON.parse(user).profile;
    };
    AuthService.prototype.attempt = function (credentials) {
        return this.http.get(this.appService.api_end_point + 'userSignin/' + this.get_session_token() + '/&Email=' + credentials.Email + '&Pass=' + credentials.Password);
    };
    //removes the user from the localStorage
    AuthService.prototype.logout = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observable) {
            localStorage.removeItem('user');
            _this.user = null;
            observable.next({ success: "true" });
        });
    };
    ;
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/auth.service.js.map

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_right_content_service__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(auth, router, rightc) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.rightc = rightc;
        this.rightContent = rightc;
        router.events.forEach(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationStart */]) {
                _this.rightContent.aside_in = false;
                jQuery(document).ready(function () {
                    var niftyContainer = $('#container');
                    var niftyWindow = $(window);
                    var widnowwidth = niftyWindow.width();
                    if (widnowwidth <= 767) {
                        niftyContainer.removeClass('mainnav-in');
                        niftyContainer.addClass('mainnav-sm');
                    }
                });
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-root',
            template: __webpack_require__(827),
            styles: [__webpack_require__(790)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_right_content_service__["a" /* RightContentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_right_content_service__["a" /* RightContentService */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app.component.js.map

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_app_routes_module__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_medium_to_login_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_forgotpass_forgotpass_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_password_reset_prompt_password_reset_prompt_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_medium_to_password_reset_prompt_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_create_new_password_create_new_password_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_parent_parent_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_users_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_auth_parent_auth_parent_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_anti_auth_parent_anti_auth_parent_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_manage_profiles_manage_profiles_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_manage_profiles_pick_color_pick_color_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_timeline_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_entry_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_header_header_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_header_title_title_component__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_header_action_action_component__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_body_body_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_body_aside_aside_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_body_body_content_body_content_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_body_body_right_content_body_right_content_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_manage_entry_manage_entry_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_footer_footer_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_profile_management_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_right_content_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular2_google_maps_core__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_manage_logs_manage_logs_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_create_log_create_log_component__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_log_log_component__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_invite_users_invite_users_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_add_content_btn_add_content_btn_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_post_detail_post_detail_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_medium_to_post_detail_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_medium_to_manage_entry_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_create_custom_log_create_custom_log_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_test_test_component__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_profile_profile_component__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_view_profile_view_profile_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_create_profile_create_profile_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_timeline_detail_timeline_detail_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_edit_profile_edit_profile_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_create_managed_user_create_managed_user_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_invite_managed_user_invite_managed_user_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_view_log_view_log_component__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_forgotpass_forgotpass_component__["a" /* ForgotpassComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_password_reset_prompt_password_reset_prompt_component__["a" /* PasswordResetPromptComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_create_new_password_create_new_password_component__["a" /* CreateNewPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_parent_parent_component__["a" /* ParentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_auth_parent_auth_parent_component__["a" /* AuthParentComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_anti_auth_parent_anti_auth_parent_component__["a" /* AntiAuthParentComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_manage_profiles_manage_profiles_component__["a" /* ManageProfilesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_manage_profiles_pick_color_pick_color_component__["a" /* PickColorComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_header_title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_header_action_action_component__["a" /* ActionComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_body_aside_aside_component__["a" /* AsideComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_body_body_content_body_content_component__["a" /* BodyContentComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_body_body_right_content_body_right_content_component__["a" /* BodyRightContentComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_manage_entry_manage_entry_component__["a" /* ManageEntryComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_manage_logs_manage_logs_component__["a" /* ManageLogsComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_create_log_create_log_component__["a" /* CreateLogComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_log_log_component__["a" /* LogComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_invite_users_invite_users_component__["a" /* InviteUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_add_content_btn_add_content_btn_component__["a" /* AddContentBtnComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_post_detail_post_detail_component__["a" /* PostDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_create_custom_log_create_custom_log_component__["a" /* CreateCustomLogComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_create_custom_log_create_custom_log_component__["a" /* CreateCustomLogComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_view_profile_view_profile_component__["a" /* ViewProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_create_profile_create_profile_component__["a" /* CreateProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_timeline_detail_timeline_detail_component__["a" /* TimelineDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_50__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_create_managed_user_create_managed_user_component__["a" /* CreateManagedUserComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_invite_managed_user_invite_managed_user_component__["a" /* InviteManagedUserComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_view_log_view_log_component__["a" /* ViewLogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__modules_app_routes_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_35_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBC4QNkQKk6p37YYHjrxWcVZ7BSQ7UZvIQ',
                    libraries: ['places']
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_6__services_medium_to_login_service__["a" /* MediumToLoginService */],
                __WEBPACK_IMPORTED_MODULE_14__services_medium_to_password_reset_prompt_service__["a" /* MediumToPasswordResetPromptService */],
                __WEBPACK_IMPORTED_MODULE_42__services_medium_to_post_detail_service__["a" /* MediumToPostDetailService */],
                __WEBPACK_IMPORTED_MODULE_17__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_22__services_timeline_service__["a" /* TimelineService */],
                __WEBPACK_IMPORTED_MODULE_23__services_entry_service__["a" /* EntryService */],
                __WEBPACK_IMPORTED_MODULE_33__services_profile_management_service__["a" /* ProfileManagementService */],
                __WEBPACK_IMPORTED_MODULE_34__services_right_content_service__["a" /* RightContentService */],
                __WEBPACK_IMPORTED_MODULE_43__services_medium_to_manage_entry_service__["a" /* MediumToManageEntryService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app.module.js.map

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_UserStuff__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AsideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AsideComponent = (function () {
    function AsideComponent(auth, appRouter, timelineService, app, usersService) {
        this.auth = auth;
        this.appRouter = appRouter;
        this.timelineService = timelineService;
        this.app = app;
        this.usersService = usersService;
    }
    AsideComponent.prototype.ngOnInit = function () {
        this.timelineService.setUserTimelines(this.auth.getUser().timelines);
    };
    AsideComponent.prototype.refreshTimelines = function () {
        var _this = this;
        this.loadingUserStuff = true;
        this.usersService.getUserTimelinesAndStuff().subscribe(function (data) {
            var mapedData = data.json().payload;
            var userStuff = new __WEBPACK_IMPORTED_MODULE_6__models_UserStuff__["a" /* UserStuff */](mapedData.User, mapedData.Timelines, mapedData.ManagedUsers);
            _this.timelineService.setUserTimelines(userStuff.timelines);
            _this.auth.setUser(JSON.stringify(userStuff));
            _this.loadingUserStuff = false;
        });
    };
    AsideComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (response) {
            _this.appRouter.navigate(['login']);
        }, function (error) { });
    };
    AsideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-aside',
            template: __webpack_require__(831),
            styles: [__webpack_require__(794)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */]) === 'function' && _e) || Object])
    ], AsideComponent);
    return AsideComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/aside.component.js.map

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BodyContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyContentComponent = (function () {
    function BodyContentComponent() {
    }
    BodyContentComponent.prototype.ngOnInit = function () {
    };
    BodyContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-body-content',
            template: __webpack_require__(832),
            styles: [__webpack_require__(795)]
        }), 
        __metadata('design:paramtypes', [])
    ], BodyContentComponent);
    return BodyContentComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/body-content.component.js.map

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BodyRightContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyRightContentComponent = (function () {
    function BodyRightContentComponent() {
    }
    BodyRightContentComponent.prototype.ngOnInit = function () {
    };
    BodyRightContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-body-right-content',
            template: __webpack_require__(833),
            styles: [__webpack_require__(796)]
        }), 
        __metadata('design:paramtypes', [])
    ], BodyRightContentComponent);
    return BodyRightContentComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/body-right-content.component.js.map

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-body',
            template: __webpack_require__(834),
            styles: [__webpack_require__(797)]
        }), 
        __metadata('design:paramtypes', [])
    ], BodyComponent);
    return BodyComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/body.component.js.map

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_timeline_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateCustomLogResolver; });
/**
 * Created by officeaccount on 17/02/2017.
 */
/**
 * Created by officeaccount on 09/02/2017.
 */
/**
 * Created by officeaccount on 11/01/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateCustomLogResolver = (function () {
    function CreateCustomLogResolver(auth, timelineService) {
        this.auth = auth;
        this.timelineService = timelineService;
    }
    CreateCustomLogResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.timelineService.getAllTimelinesWithEntries());
        });
    };
    CreateCustomLogResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_timeline_service__["a" /* TimelineService */]) === 'function' && _b) || Object])
    ], CreateCustomLogResolver);
    return CreateCustomLogResolver;
    var _a, _b;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/create-custom-log.resolver.js.map

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_timeline_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateLogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateLogComponent = (function () {
    function CreateLogComponent(timelineService, router, auth) {
        this.timelineService = timelineService;
        this.router = router;
        this.auth = auth;
    }
    CreateLogComponent.prototype.create = function (form) {
        var _this = this;
        this.timelineService.create({ Name: form.value.Name }).subscribe(function (data) {
            var user = _this.auth.getUser();
            user.timelines.push({ Id: data.json().payload.TimelineId, Name: form.value.Name });
            _this.timelineService.setUserTimelines(user.timelines);
            _this.auth.setUser(JSON.stringify(user));
            _this.router.navigate(['manage-logs']);
        });
    };
    CreateLogComponent.prototype.ngOnInit = function () {
    };
    CreateLogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-log',
            template: __webpack_require__(836),
            styles: [__webpack_require__(799)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_timeline_service__["a" /* TimelineService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], CreateLogComponent);
    return CreateLogComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/create-log.component.js.map

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-footer',
            template: __webpack_require__(841),
            styles: [__webpack_require__(804)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/footer.component.js.map

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ActionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionComponent = (function () {
    function ActionComponent() {
    }
    ActionComponent.prototype.ngOnInit = function () {
    };
    ActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-action',
            template: __webpack_require__(843),
            styles: [__webpack_require__(806)]
        }), 
        __metadata('design:paramtypes', [])
    ], ActionComponent);
    return ActionComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/action.component.js.map

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-title',
            template: __webpack_require__(845),
            styles: [__webpack_require__(808)]
        }), 
        __metadata('design:paramtypes', [])
    ], TitleComponent);
    return TitleComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/title.component.js.map

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_medium_to_post_detail_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_medium_to_manage_entry_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Timeline__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LogComponent = (function () {
    function LogComponent(route, router, mediumToPostDetail, mediumToManageEntry, auth, app, timelineService) {
        this.route = route;
        this.router = router;
        this.mediumToPostDetail = mediumToPostDetail;
        this.mediumToManageEntry = mediumToManageEntry;
        this.auth = auth;
        this.app = app;
        this.timelineService = timelineService;
        this.timeline = null;
        this.user = null;
        this.timeline = new __WEBPACK_IMPORTED_MODULE_8__models_Timeline__["a" /* Timeline */]();
    }
    LogComponent.prototype.showDetail = function (entry) {
        localStorage.setItem('post', JSON.stringify(entry));
        this.router.navigate(['/post/' + entry.EntryId]);
    };
    LogComponent.prototype.modifiedDate = function (date) {
        return date.split(' ')[0];
    };
    LogComponent.prototype.timelineUpdated = function (event) {
        this.refreshLog();
    };
    LogComponent.prototype.pullToRefresh = function (event) {
        this.refreshLog().then(function () { }, function (error) {
            alert('something went wrong! please try again.');
        });
    };
    LogComponent.prototype.refreshLog = function () {
        var _this = this;
        var auth = this.auth;
        var timelineService = this.timelineService;
        var timelineId = this.timeline.Id;
        return new Promise(function (resolve, reject) {
            timelineService.get(timelineId, auth.getUser().profile.UserId).subscribe(function (data) {
                _this.timeline = _this.app.map(data.json().payload, new __WEBPACK_IMPORTED_MODULE_8__models_Timeline__["a" /* Timeline */]());
                _this.timelineService.pushTimelineWithEntires(_this.timeline);
                resolve(_this.timeline);
            }, function (error) {
                reject(false);
            });
        });
    };
    LogComponent.prototype.getEntryTypes = function (givenTypes) {
        var foundTypes = [];
        for (var _i = 0, _a = givenTypes.split(','); _i < _a.length; _i++) {
            var givenType = _a[_i];
            var givenTypeObj = this.app.find_obj_by_prop('value', givenType, this.app.entryContentCategories);
            if (givenTypeObj != null) {
                foundTypes.push(givenTypeObj);
            }
        }
        return foundTypes;
    };
    LogComponent.prototype.findUserByIdInTimelineUsers = function (userId) {
        if (userId == this.auth.getUser().profile.UserId) {
            return this.auth.getUser().profile;
        }
        for (var _i = 0, _a = this.timeline.Users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.UserId == userId) {
                return user;
            }
        }
        return null;
    };
    LogComponent.prototype.showUserProfile = function (UserId) {
        var user = this.findUserByIdInTimelineUsers(UserId);
        if (user != null) {
            var clonedUser = __WEBPACK_IMPORTED_MODULE_7_lodash__["cloneDeep"](user); //TODO: search the actual user. (may be api is not available yet)
            clonedUser.UserId = UserId;
            localStorage.setItem('viewUserProfile', JSON.stringify(clonedUser));
            this.router.navigate(['/profile/' + UserId]);
        }
        else {
            alert('user not found.');
        }
    };
    LogComponent.prototype.ngOnInit = function () {
        this.user = this.auth.getUser().profile;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__models_Timeline__["a" /* Timeline */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__models_Timeline__["a" /* Timeline */]) === 'function' && _a) || Object)
    ], LogComponent.prototype, "timeline", void 0);
    LogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log',
            template: __webpack_require__(849),
            styles: [__webpack_require__(812)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_medium_to_post_detail_service__["a" /* MediumToPostDetailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_medium_to_post_detail_service__["a" /* MediumToPostDetailService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_medium_to_manage_entry_service__["a" /* MediumToManageEntryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_medium_to_manage_entry_service__["a" /* MediumToManageEntryService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__["a" /* TimelineService */]) === 'function' && _h) || Object])
    ], LogComponent);
    return LogComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/log.component.js.map

/***/ },

/***/ 614:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Timeline__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LogResolver; });
/**
 * Created by officeaccount on 11/01/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogResolver = (function () {
    function LogResolver(auth, timelineService, route, router, app) {
        this.auth = auth;
        this.timelineService = timelineService;
        this.route = route;
        this.router = router;
        this.app = app;
    }
    LogResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var auth = this.auth;
        var timelineService = this.timelineService;
        var router = this.router;
        return new Promise(function (resolve, reject) {
            var params = route.params;
            var existingTimelines = _this.timelineService.getAllTimelinesWithEntries();
            var foundTimeline = _this.app.find_obj_by_prop('Id', params.id, existingTimelines);
            if (foundTimeline != null) {
                resolve(foundTimeline);
            }
            else {
                timelineService.get(params.id).subscribe(function (data) {
                    var mapedTimeline = _this.app.map(data.json().payload, new __WEBPACK_IMPORTED_MODULE_5__models_Timeline__["a" /* Timeline */]());
                    mapedTimeline.Entries = (mapedTimeline.Entries == null) ? [] : mapedTimeline.Entries;
                    _this.timelineService.pushTimelineWithEntires(mapedTimeline);
                    resolve(mapedTimeline);
                }, function (error) {
                    resolve(null);
                });
            }
        });
    };
    LogResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === 'function' && _e) || Object])
    ], LogResolver);
    return LogResolver;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/log.resolver.js.map

/***/ },

/***/ 615:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LogsResolver; });
/**
 * Created by officeaccount on 11/01/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogsResolver = (function () {
    function LogsResolver(auth, timelineService, route, router) {
        this.auth = auth;
        this.timelineService = timelineService;
        this.route = route;
        this.router = router;
    }
    LogsResolver.prototype.resolve = function (route, state) {
        var timelineService = this.timelineService;
        return new Promise(function (resolve, reject) {
            timelineService.getUserTimelines().subscribe(function (data) {
                resolve(data);
            });
        });
    };
    LogsResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], LogsResolver);
    return LogsResolver;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/logs.resolver.js.map

/***/ },

/***/ 616:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TokensResolver; });
/**
 * Created by officeaccount on 11/01/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokensResolver = (function () {
    function TokensResolver(auth) {
        this.auth = auth;
    }
    TokensResolver.prototype.resolve = function (route, state) {
        var auth = this.auth;
        var set_app_token = new Promise(function (resolve, reject) {
            if (auth.get_app_token() == null) {
                auth.grab_app_key().subscribe(function (app_key) {
                    auth.set_app_token(app_key);
                    resolve(app_key);
                }, function (error) { reject(error); });
            }
            else {
                resolve(auth.get_app_token());
            }
        });
        return set_app_token.then(function (app_key) {
            return new Promise(function (resolve, reject) {
                if (auth.get_session_token() == null) {
                    auth.grab_session_token(auth.get_app_token()).subscribe(//fetching the session token from api
                    function (data) {
                        var session_token = data.json().payload.SessionToken;
                        auth.set_session_token(session_token);
                        resolve(session_token);
                    }, function (error) {
                        reject(error);
                    });
                }
                else {
                    resolve(auth.get_session_token());
                }
            });
        }, function (error) {
            return error;
        });
    };
    TokensResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], TokensResolver);
    return TokensResolver;
    var _a;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/tokens.resolver.js.map

/***/ },

/***/ 617:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_medium_to_post_detail_service__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostResolver; });
/**
 * Created by officeaccount on 11/01/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostResolver = (function () {
    function PostResolver(appService, auth, timelineService, route, router, mediumToPostDetail) {
        this.appService = appService;
        this.auth = auth;
        this.timelineService = timelineService;
        this.route = route;
        this.router = router;
        this.mediumToPostDetail = mediumToPostDetail;
    }
    PostResolver.prototype.resolve = function (route, state) {
        var mediumToPostDetail = this.mediumToPostDetail;
        return new Promise(function (resolve, reject) {
            var params = route.params;
            var post = JSON.parse(localStorage.getItem('post'));
            if (post != null && post.EntryId == params.id) {
                resolve(post);
            }
            else {
                resolve(null);
            }
        });
    };
    PostResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_medium_to_post_detail_service__["a" /* MediumToPostDetailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_medium_to_post_detail_service__["a" /* MediumToPostDetailService */]) === 'function' && _f) || Object])
    ], PostResolver);
    return PostResolver;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/post.resolver.js.map

/***/ },

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_entry_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_profile_management_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfileComponent = (function () {
    function ProfileComponent(userService, timelineService, entrySerice, auth, router, profileManagementService, http, appService, users) {
        this.userService = userService;
        this.timelineService = timelineService;
        this.entrySerice = entrySerice;
        this.auth = auth;
        this.router = router;
        this.profileManagementService = profileManagementService;
        this.http = http;
        this.appService = appService;
        this.users = users;
        this.profileUpdating = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.profileUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.enteringEditingMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.exitingEditingMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.someThingWentWrong = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.colors = [
            'aquamarine', 'beachblue', 'bloodred', 'brownbear', 'chai',
            'cream', 'creamsicleorange', 'pinkrose', 'plum', 'bloodred', 'brownbear',
            'cream'
        ];
        this.selectedImage = null;
        this.selectedThumbnail = '';
        this.newUser = { email: '', password: '' };
        this.color_picker_modal_id = '';
        this.photo_chooser_id = '';
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */]();
        this.editMode = false;
        this.manualControls = false;
        this.formBusy = false;
        this.newAccount = false;
        this.title = 'Profile';
        this.managedProfile = false;
    }
    ProfileComponent.prototype.getTitle = function () {
        return this.title;
    };
    ProfileComponent.prototype.getAction = function () {
        return 'Save';
    };
    ProfileComponent.prototype.enterEditMode = function () {
        this.editMode = true;
    };
    ProfileComponent.prototype.exitEditMode = function () {
        this.editMode = false;
    };
    ProfileComponent.prototype.createProfile = function (form) {
        var _this = this;
        var inputData = form.value;
        var profileData = {
            FirstName: inputData.FirstName,
            LastName: inputData.LastName,
            NickName: inputData.NickName,
            DateBirthDay: $('.datepicker').val(),
            address: inputData.address,
            Color: inputData.Color,
            ManagedByUserId: this.auth.currentUser.UserId,
            ManagedByUserName: ((this.getUser().UserId == this.auth.currentUser.UserId) ?
                inputData.FirstName + ' ' + inputData.LastName :
                this.auth.currentUser.FirstName + ' ' + this.auth.currentUser.LastName),
            ManagedByUserNickName: ((this.getUser().UserId == this.auth.currentUser.UserId) ?
                inputData.NickName :
                this.auth.currentUser.Nickname),
        };
        var newAcountData = {
            Email: inputData.email,
            Pass: inputData.password,
            Username: ''
        };
        var createProfile = new Promise(function (resolve, reject) {
            if (_this.newAccount) {
                _this.users.createManagedUser(newAcountData, _this.auth.currentUser.UserId).subscribe(function (data) {
                    _this.user.UserId = data.json().payload.UserId;
                    resolve(true);
                }, function (e) {
                    var error = (e.json()['error_message'] != undefined) ? e.json()['error_message'] : 'Something went wrong with the server or may be you internet connection is lost. please try a few moments later.';
                    reject(error);
                });
            }
            else {
                resolve(true);
            }
        });
        createProfile.then(function (_promise_data) {
            var image = null;
            if (_this.selectedImage != null) {
                image = new FormData();
                image.append('Image', _this.selectedImage);
            }
            if (!_this.manualControls)
                _this.formBusy = true;
            _this.profileUpdating.emit({
                data: form.value
            });
            _this.userService.updateSettings(_this.managedProfile, _this.getUser().UserId, profileData, image).subscribe(function (data) {
                if (!_this.manualControls) {
                    _this.formBusy = false;
                    _this.exitEditMode();
                }
                var updatedUser = data.json().payload.User;
                if (_this.selectedImage == null) {
                    updatedUser.ImageURL = _this.getUser().ImageURL;
                    updatedUser.ThumbURL = _this.getUser().ThumbURL;
                }
                _this.setUser(_this.appService.map(updatedUser, new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */]()));
                _this.profileUpdated.emit({
                    user: _this.getUser()
                });
            }, function (error) {
                _this.someThingWentWrong.emit({
                    error: { msg: 'some thing went wrong with the server' }
                });
                if (!_this.manualControls) {
                    _this.formBusy = false;
                    alert('some thing went wrong with the server please try again.');
                }
            });
        }, function (error) {
            alert(error);
        });
    };
    ProfileComponent.prototype.loggedInUsrCanEdit = function () {
        return (this.auth.currentUser.UserId == this.getUser().UserId || this.newAccount || this.auth.currentUser.UserId == this.getUser().ManagedByUserId);
    };
    ProfileComponent.prototype.filesSelected = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            this.selectedImage = event.target.files[0];
            if (this.selectedImage.type == 'image/jpeg') {
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.selectedThumbnail = e.target.result;
                };
                reader.readAsDataURL(this.selectedImage);
            }
            else {
                alert('only jpeg images are allowed');
            }
        }
    };
    ProfileComponent.prototype.chooseFile = function (event) {
        jQuery('#' + this.photo_chooser_id).click();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.color_picker_modal_id = 'color-picker-' + this.appService.unique_id();
        this.photo_chooser_id = 'profile-img-chooser-' + this.appService.unique_id();
        this.user = __WEBPACK_IMPORTED_MODULE_10_lodash__["cloneDeep"](this.user);
        if (this.newAccount) {
            this.managedProfile = true;
        }
        var managedUsers = __WEBPACK_IMPORTED_MODULE_10_lodash__["cloneDeep"](this.auth.getUser().managedUsers);
        for (var _i = 0, managedUsers_1 = managedUsers; _i < managedUsers_1.length; _i++) {
            var managedUser = managedUsers_1[_i];
            if (managedUser.UserId == this.getUser().UserId) {
                this.managedProfile = true;
            }
        }
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        $('.datepicker').datepicker();
    };
    ProfileComponent.prototype.setUser = function (user) {
        this.user = user;
    };
    ProfileComponent.prototype.getUser = function () {
        return this.user;
    };
    ProfileComponent.prototype.colorPicked = function (event) {
        $('#' + this.color_picker_modal_id).modal('hide');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "profileUpdating", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "profileUpdated", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "enteringEditingMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "exitingEditingMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "someThingWentWrong", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */]) === 'function' && _a) || Object)
    ], ProfileComponent.prototype, "user", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], ProfileComponent.prototype, "editMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], ProfileComponent.prototype, "manualControls", void 0);
    __decorate([
        //used to control loaders etc by parent component
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], ProfileComponent.prototype, "formBusy", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], ProfileComponent.prototype, "newAccount", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ProfileComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], ProfileComponent.prototype, "managedProfile", void 0);
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(858),
            styles: [__webpack_require__(821)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_entry_service__["a" /* EntryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_entry_service__["a" /* EntryService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_profile_management_service__["a" /* ProfileManagementService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_profile_management_service__["a" /* ProfileManagementService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === 'function' && _k) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/profile.component.js.map

/***/ },

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(860),
            styles: [__webpack_require__(823)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/test.component.js.map

/***/ },

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_TimelineDetail__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_users_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TimelineDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TimelineDetailComponent = (function () {
    function TimelineDetailComponent(app, auth, timelineService, router, usersService) {
        this.app = app;
        this.auth = auth;
        this.timelineService = timelineService;
        this.router = router;
        this.usersService = usersService;
        this.edit_log_modal_id = '';
        this.timeline = new __WEBPACK_IMPORTED_MODULE_1__models_TimelineDetail__["a" /* TimelineDetail */]();
    }
    TimelineDetailComponent.prototype.currentUserCanEditThis = function (user) {
        return (this.usersService.findMangedUserById(user.UserId) != null ||
            user.UserId == this.auth.getUser().profile.UserId);
    };
    TimelineDetailComponent.prototype.currentUserCanDeleteThis = function (user) {
        return ((this.usersService.findMangedUserById(user.UserId) != null ||
            this.timeline.CreatedByUserId == this.auth.getUser().profile.UserId) &&
            (user.UserId != this.auth.getUser().profile.UserId));
    };
    TimelineDetailComponent.prototype.updateLog = function (form) {
        var _this = this;
        this.timelineService.update(this.timeline.Id, form.value).subscribe(function (data) {
            _this.timeline.Name = form.value.Name;
            $('#' + _this.edit_log_modal_id).modal('hide');
        }, function (error) {
            alert('some thing went wrong');
            $('#' + _this.edit_log_modal_id).modal('hide');
        });
    };
    TimelineDetailComponent.prototype.editUser = function (user) {
        var userfound = this.usersService.findMangedUserById(user.UserId);
        var actualUser = new __WEBPACK_IMPORTED_MODULE_3__models_User__["a" /* User */]();
        for (var property in userfound) {
            actualUser[property] = userfound[property];
        }
        //*****************************//
        localStorage.setItem('viewUserProfile', JSON.stringify(actualUser));
        this.router.navigate(['/profile/' + userfound.UserId + '/edit']);
    };
    TimelineDetailComponent.prototype.removeUser = function (userId) {
        var _this = this;
        if (userId == this.auth.currentUser.UserId) {
            alert('Can not remove yourself');
        }
        else if (confirm("are you sure you want to delete this user?")) {
            //TODO: Couldn't test it at the time for some reason.
            this.timelineService.removeUsers(this.timeline.Id, userId).subscribe(function (data) {
                var updatedUsers = [];
                var existingUsers = __WEBPACK_IMPORTED_MODULE_7_lodash__["cloneDeep"](_this.timeline.Users);
                for (var _i = 0, existingUsers_1 = existingUsers; _i < existingUsers_1.length; _i++) {
                    var user = existingUsers_1[_i];
                    if (user.UserId != userId)
                        updatedUsers.push(user);
                }
                _this.timeline.Users = updatedUsers;
                alert('user deleted');
            }, function (error) {
                alert('some thing went wrong the server');
            });
        }
    };
    TimelineDetailComponent.prototype.ngOnInit = function () {
        this.edit_log_modal_id = 'edit-log-' + this.app.unique_id();
        console.log(this.timeline.Users);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_TimelineDetail__["a" /* TimelineDetail */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_TimelineDetail__["a" /* TimelineDetail */]) === 'function' && _a) || Object)
    ], TimelineDetailComponent.prototype, "timeline", void 0);
    TimelineDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timeline-detail',
            template: __webpack_require__(861),
            styles: [__webpack_require__(824)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__["a" /* TimelineService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_users_service__["a" /* UsersService */]) === 'function' && _f) || Object])
    ], TimelineDetailComponent);
    return TimelineDetailComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/timeline-detail.component.js.map

/***/ },

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CustomLogResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomLogResolver = (function () {
    function CustomLogResolver(auth, app) {
        this.auth = auth;
        this.app = app;
    }
    CustomLogResolver.prototype.resolve = function (route, state) {
        return new Promise(function (resolve, reject) {
            var customLogString = localStorage.getItem('custom_log');
            if (customLogString != null) {
                resolve(JSON.parse(LZString.decompress(customLogString)));
            }
            else {
                resolve(null);
            }
        });
    };
    CustomLogResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object])
    ], CustomLogResolver);
    return CustomLogResolver;
    var _a, _b;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/custom-log.resolver.js.map

/***/ },

/***/ 622:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewProfileResolver; });
/**
 * Created by officeaccount on 09/02/2017.
 */
/**
 * Created by officeaccount on 11/01/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewProfileResolver = (function () {
    function ViewProfileResolver(auth, timelineService, route, router) {
        this.auth = auth;
        this.timelineService = timelineService;
        this.route = route;
        this.router = router;
    }
    ViewProfileResolver.prototype.resolve = function (route, state) {
        var auth = this.auth;
        var timelineService = this.timelineService;
        var router = this.router;
        return new Promise(function (resolve, reject) {
            var params = route.params;
            var user = JSON.parse(localStorage.getItem('viewUserProfile'));
            if (user != null && user.UserId == params.id)
                resolve(user);
            resolve(null);
        });
    };
    ViewProfileResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_timeline_service__["a" /* TimelineService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], ViewProfileResolver);
    return ViewProfileResolver;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/view-profile.resolver.js.map

/***/ },

/***/ 623:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EntryCategory; });
/**
 * Created by officeaccount on 15/02/2017.
 */
var EntryCategory = (function () {
    function EntryCategory(value, img, desc) {
        if (value === void 0) { value = ''; }
        if (img === void 0) { img = ''; }
        if (desc === void 0) { desc = ''; }
        this.value = '';
        this.img = '';
        this.desc = '';
        this.value = value;
        this.img = img;
        this.desc = desc;
    }
    return EntryCategory;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/EntryCategory.js.map

/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UploadedFile; });
/**
 * Created by officeaccount on 20/02/2017.
 */
var UploadedFile = (function () {
    function UploadedFile() {
        this.Id = '';
        this.FileURL = '';
        this.ThumbURL = '';
    }
    return UploadedFile;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/UploadedFile.js.map

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_forgotpass_forgotpass_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_anti_auth_guard_service__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_password_reset_prompt_guard_service__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_create_new_password_create_new_password_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_password_reset_prompt_password_reset_prompt_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_parent_parent_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_parent_tokens_resolver__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_auth_parent_auth_parent_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_anti_auth_parent_anti_auth_parent_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_manage_profiles_pick_color_pick_color_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_profile_management_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_manage_logs_manage_logs_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_log_log_resolver__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_manage_logs_logs_resolver__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_invite_users_invite_users_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_post_detail_post_detail_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_post_detail_post_resolver__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_post_detail_guard_service__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_create_custom_log_create_custom_log_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_view_profile_view_profile_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_view_profile_view_profile_resolver__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_manage_profiles_manage_profiles_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_create_profile_create_profile_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_anti_profile_created_guard_service__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_edit_profile_edit_profile_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_create_managed_user_create_managed_user_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_invite_managed_user_invite_managed_user_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_view_log_view_log_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_create_custom_log_create_custom_log_resolver__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_view_log_custom_log_resolver__ = __webpack_require__(621);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





































var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_11__components_parent_parent_component__["a" /* ParentComponent */],
        resolve: {
            tokens: __WEBPACK_IMPORTED_MODULE_12__components_parent_tokens_resolver__["a" /* TokensResolver */]
        },
        children: [
            { path: "", component: __WEBPACK_IMPORTED_MODULE_13__components_auth_parent_auth_parent_component__["a" /* AuthParentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */]], children: [
                    { path: "home", component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: "profile/:id", resolve: { user: __WEBPACK_IMPORTED_MODULE_27__components_view_profile_view_profile_resolver__["a" /* ViewProfileResolver */] }, component: __WEBPACK_IMPORTED_MODULE_26__components_view_profile_view_profile_component__["a" /* ViewProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: "profile/:id/edit", resolve: { user: __WEBPACK_IMPORTED_MODULE_27__components_view_profile_view_profile_resolver__["a" /* ViewProfileResolver */] }, component: __WEBPACK_IMPORTED_MODULE_31__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: 'log/custom', resolve: { log: __WEBPACK_IMPORTED_MODULE_36__components_view_log_custom_log_resolver__["a" /* CustomLogResolver */] }, component: __WEBPACK_IMPORTED_MODULE_34__components_view_log_view_log_component__["a" /* ViewLogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: 'log/:id', resolve: { log: __WEBPACK_IMPORTED_MODULE_19__components_log_log_resolver__["a" /* LogResolver */] }, component: __WEBPACK_IMPORTED_MODULE_34__components_view_log_view_log_component__["a" /* ViewLogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: 'log/:id/invite-users', resolve: { log: __WEBPACK_IMPORTED_MODULE_19__components_log_log_resolver__["a" /* LogResolver */] }, component: __WEBPACK_IMPORTED_MODULE_21__components_invite_users_invite_users_component__["a" /* InviteUsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: 'log/:id/invite-users/managed', component: __WEBPACK_IMPORTED_MODULE_33__components_invite_managed_user_invite_managed_user_component__["a" /* InviteManagedUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: "manage-profiles", component: __WEBPACK_IMPORTED_MODULE_28__components_manage_profiles_manage_profiles_component__["a" /* ManageProfilesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: "create-profile", component: __WEBPACK_IMPORTED_MODULE_29__components_create_profile_create_profile_component__["a" /* CreateProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_anti_profile_created_guard_service__["a" /* AntiProfileCreatedGuardService */]] },
                    { path: "create-managed-profile", component: __WEBPACK_IMPORTED_MODULE_32__components_create_managed_user_create_managed_user_component__["a" /* CreateManagedUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: "manage-logs", resolve: { logs: __WEBPACK_IMPORTED_MODULE_20__components_manage_logs_logs_resolver__["a" /* LogsResolver */] }, component: __WEBPACK_IMPORTED_MODULE_18__components_manage_logs_manage_logs_component__["a" /* ManageLogsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: "create-custom-log", resolve: { entries: __WEBPACK_IMPORTED_MODULE_35__components_create_custom_log_create_custom_log_resolver__["a" /* CreateCustomLogResolver */] }, component: __WEBPACK_IMPORTED_MODULE_25__components_create_custom_log_create_custom_log_component__["a" /* CreateCustomLogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: "pick-color", component: __WEBPACK_IMPORTED_MODULE_15__components_manage_profiles_pick_color_pick_color_component__["a" /* PickColorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_profile_management_service__["a" /* ProfileManagementService */]] },
                    { path: "post/:id", resolve: { post: __WEBPACK_IMPORTED_MODULE_23__components_post_detail_post_resolver__["a" /* PostResolver */] }, component: __WEBPACK_IMPORTED_MODULE_22__components_post_detail_post_detail_component__["a" /* PostDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */]] },
                    { path: '', redirectTo: "/log/custom", pathMatch: "full" }
                ] },
            { path: "", component: __WEBPACK_IMPORTED_MODULE_14__components_anti_auth_parent_anti_auth_parent_component__["a" /* AntiAuthParentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_anti_auth_guard_service__["a" /* AntiAuthGuardService */]], children: [
                    { path: "login", component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
                    { path: "register", component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */] },
                    { path: "forgotpass", component: __WEBPACK_IMPORTED_MODULE_6__components_forgotpass_forgotpass_component__["a" /* ForgotpassComponent */] },
                    { path: "pass-reset", component: __WEBPACK_IMPORTED_MODULE_10__components_password_reset_prompt_password_reset_prompt_component__["a" /* PasswordResetPromptComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_password_reset_prompt_guard_service__["a" /* PasswordResetPromptGuardService */]] },
                    { path: "create-new-password", component: __WEBPACK_IMPORTED_MODULE_9__components_create_new_password_create_new_password_component__["a" /* CreateNewPasswordComponent */] },
                    { path: '', redirectTo: "/login", pathMatch: "full" }
                ] }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_7__services_anti_auth_guard_service__["a" /* AntiAuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_20__components_manage_logs_logs_resolver__["a" /* LogsResolver */],
                __WEBPACK_IMPORTED_MODULE_8__services_password_reset_prompt_guard_service__["a" /* PasswordResetPromptGuardService */],
                __WEBPACK_IMPORTED_MODULE_19__components_log_log_resolver__["a" /* LogResolver */],
                __WEBPACK_IMPORTED_MODULE_12__components_parent_tokens_resolver__["a" /* TokensResolver */],
                __WEBPACK_IMPORTED_MODULE_23__components_post_detail_post_resolver__["a" /* PostResolver */],
                __WEBPACK_IMPORTED_MODULE_17__services_profile_created_guard_service__["a" /* ProfileCreatedGuardService */],
                __WEBPACK_IMPORTED_MODULE_24__services_post_detail_guard_service__["a" /* PostDetailGuardService */],
                __WEBPACK_IMPORTED_MODULE_36__components_view_log_custom_log_resolver__["a" /* CustomLogResolver */],
                __WEBPACK_IMPORTED_MODULE_27__components_view_profile_view_profile_resolver__["a" /* ViewProfileResolver */],
                __WEBPACK_IMPORTED_MODULE_30__services_anti_profile_created_guard_service__["a" /* AntiProfileCreatedGuardService */],
                __WEBPACK_IMPORTED_MODULE_35__components_create_custom_log_create_custom_log_resolver__["a" /* CreateCustomLogResolver */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app-routes.module.js.map

/***/ },

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AntiAuthGuardService; });
// this service is a guard which protect routes from authenticated users.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AntiAuthGuardService = (function () {
    function AntiAuthGuardService(authService, appRouter, activatedRoute) {
        this.authService = authService;
        this.appRouter = appRouter;
        this.activatedRoute = activatedRoute;
        this.auth = authService;
        this.router = appRouter;
        this.currentRoute = activatedRoute;
    }
    AntiAuthGuardService.prototype.canActivate = function () {
        if (!this.auth.authenticated()) {
            return true;
        }
        this.router.navigate(['home']);
        return false;
    };
    AntiAuthGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], AntiAuthGuardService);
    return AntiAuthGuardService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/anti-auth-guard.service.js.map

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AntiProfileCreatedGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AntiProfileCreatedGuardService = (function () {
    function AntiProfileCreatedGuardService(authService, appRouter, activatedRoute) {
        this.authService = authService;
        this.appRouter = appRouter;
        this.activatedRoute = activatedRoute;
        this.auth = authService;
        this.router = appRouter;
        this.currentRoute = activatedRoute;
    }
    AntiProfileCreatedGuardService.prototype.canActivate = function () {
        if (this.auth.getUser().timelines.length > 0) {
            this.router.navigate(['manage-profiles']);
            return false;
        }
        return true;
    };
    AntiProfileCreatedGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], AntiProfileCreatedGuardService);
    return AntiProfileCreatedGuardService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/anti-profile-created-guard.service.js.map

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuardService; });
// this service is a guard which protect routes from unauthenticated users.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, appRouter, activatedRoute) {
        this.authService = authService;
        this.appRouter = appRouter;
        this.activatedRoute = activatedRoute;
        this.auth = authService;
        this.router = appRouter;
        this.currentRoute = activatedRoute;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.authenticated()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    AuthGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], AuthGuardService);
    return AuthGuardService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/auth-guard.service.js.map

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medium_to_password_reset_prompt_service__ = __webpack_require__(185);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PasswordResetPromptGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordResetPromptGuardService = (function () {
    function PasswordResetPromptGuardService(router, activatedRoute, mediumToPasswordResetPromptService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mediumToPasswordResetPromptService = mediumToPasswordResetPromptService;
    }
    PasswordResetPromptGuardService.prototype.canActivate = function () {
        if (this.mediumToPasswordResetPromptService.getAccessable()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    PasswordResetPromptGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__medium_to_password_reset_prompt_service__["a" /* MediumToPasswordResetPromptService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__medium_to_password_reset_prompt_service__["a" /* MediumToPasswordResetPromptService */]) === 'function' && _c) || Object])
    ], PasswordResetPromptGuardService);
    return PasswordResetPromptGuardService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/password-reset-prompt-guard.service.js.map

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medium_to_post_detail_service__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostDetailGuardService; });
// this service is a guard which protect routes from unauthenticated users.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostDetailGuardService = (function () {
    function PostDetailGuardService(authService, appRouter, activatedRoute, mediumToPostDetailService) {
        this.authService = authService;
        this.appRouter = appRouter;
        this.activatedRoute = activatedRoute;
        this.mediumToPostDetailService = mediumToPostDetailService;
        this.auth = authService;
        this.router = appRouter;
        this.currentRoute = activatedRoute;
    }
    PostDetailGuardService.prototype.canActivate = function () {
        var post = this.mediumToPostDetailService.getPost();
        if (post == null) {
            if (this.auth.getUser().timelines.length > 0)
                this.router.navigate(['/log/' + this.auth.getUser().timelines[0].Id]);
            else
                this.router.navigate(['/create-profile']);
        }
        else {
            this.mediumToPostDetailService.setPost(post);
            return true;
        }
    };
    PostDetailGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__medium_to_post_detail_service__["a" /* MediumToPostDetailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__medium_to_post_detail_service__["a" /* MediumToPostDetailService */]) === 'function' && _d) || Object])
    ], PostDetailGuardService);
    return PostDetailGuardService;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/post-detail-guard.service.js.map

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileCreatedGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileCreatedGuardService = (function () {
    function ProfileCreatedGuardService(authService, appRouter, activatedRoute) {
        this.authService = authService;
        this.appRouter = appRouter;
        this.activatedRoute = activatedRoute;
        this.auth = authService;
        this.router = appRouter;
        this.currentRoute = activatedRoute;
    }
    ProfileCreatedGuardService.prototype.canActivate = function () {
        if (this.auth.getUser().timelines.length == 0) {
            this.router.navigate(['create-profile']);
            return false;
        }
        return true;
    };
    ProfileCreatedGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ProfileCreatedGuardService);
    return ProfileCreatedGuardService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/profile-created-guard.service.js.map

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/environment.js.map

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/polyfills.js.map

/***/ },

/***/ 790:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 791:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 792:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 793:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 794:
/***/ function(module, exports) {

module.exports = "@media(max-width:1200px) {\n    #mainnav-container,\n    .brand-title{\n        transition: .5s;\n        -webkit-transition: .5s;\n        -moz-transition: .5s;\n    }\n    .brand-title{\n        width:67px;\n    }\n}\n\n#mainnav-container{\n    position: fixed;\n}\n\n.pull-to-refresh{\n    float: right;\n}\n#mainnav-menu i {\n    padding: 0;\n}"

/***/ },

/***/ 795:
/***/ function(module, exports) {

module.exports = "@media (min-width: 769px){\n    #content-container {\n        padding-left: 220px;\n        left:0px !important;\n    }\n}\n@media(max-width:1200px){\n    #content-container{\n        transition: .5s;\n        -webkit-transition: .5s;\n        -moz-transition: .5s;\n        left:0px;\n    }\n}"

/***/ },

/***/ 796:
/***/ function(module, exports) {

module.exports = "/*#aside{*/\n    /*padding-top: 80px;*/\n/*}*/\n\n"

/***/ },

/***/ 797:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 798:
/***/ function(module, exports) {

module.exports = ".category-images{\n    width:50px;\n    height: auto;\n}\n\n.post-type-panel,\n.mood-type-panel,\n.cate-widget{\n    overflow: hidden;\n}\n.btn.active {\n    border:none;\n}\n.post-type-panel label,\n.mood-type-panel label,\n.cate-widget label,\n.tags-widget label{\n    float: left;\n    width: 33.3%;\n    padding: 15px;\n    text-align: center;\n    cursor: pointer;\n    margin-bottom: 0px;\n    border: 2px solid #ffffff;\n}\n\n.cate-widget label,\n.tags-widget label{\n    padding:15px 5px;\n}\n\n.post-type-panel label input,\n.mood-type-panel label input,\n.cate-widget label input,\n.tags-widget label input{\n    visibility: hidden;\n    position: absolute;\n    left:0px;\n    top:0px;\n}\n\n.post-type-panel label img{\n    width: 50px;\n}\n\n.mood-type-panel label img{\n    width: 30px;\n    margin-bottom: 4px;\n}\n\n.post-type-panel label span,\n.mood-type-panel label span,\n.tags-widget label span,\n.cate-widget label span{\n    display: block;\n    font-size: 12px;\n    color: #888;\n}\n\n.post-type-panel label:hover span,\n.post-type-panel label.active span,\n.mood-type-panel label:hover span,\n.mood-type-panel label.active span,\n.cate-widget label.active span,\n.cate-widget label:hover span,\n.tags-widget label:hover span,\n.tags-widget label.active span{\n    color: #000;\n}\n\n.post-type-panel label.active,\n.mood-type-panel label.active,\n.cate-widget label.active,\n.tags-widget label.active{\n    background: #F2F2F2;\n}\n\n.widget-tabs-contr{\n    overflow: hidden;\n}\n\n.post-type-panel .type-definitions{\n    display: none;\n}\n\n.show_definitions label{\n    display: table;\n    width: 100%;\n    text-align: left;\n}\n\n.show_definitions .type-left{\n    text-align: center;\n}\n\n.show_definitions .type-left,\n.show_definitions .type-definitions{\n    display: table-cell;\n    vertical-align: top;\n    padding: 10px;\n    font-size: 12px;\n}\n\n.sebm-google-map-container {\n    height: 150px;\n}\n\n.dropdown-header{\n    overflow: hidden;\n}"

/***/ },

/***/ 799:
/***/ function(module, exports) {

module.exports = ".input_text {\n    width: 100%;\n    margin-bottom: 20px;\n    height:32px;\n}\n.spacer {\n    height:10px;\n}"

/***/ },

/***/ 800:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 801:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 802:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 803:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 804:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 805:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 806:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 807:
/***/ function(module, exports) {

module.exports = "#navbar{\n    position: fixed;\n}"

/***/ },

/***/ 808:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 809:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 810:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 811:
/***/ function(module, exports) {

module.exports = "textarea {\n    width: 100%;\n    resize: none;\n    border: solid 1px #ddd;\n    margin: 10px 0;\n}\n.user-info {\n    margin-bottom: 10px;\n}\n.u-img {\n    width: 50px;\n    height:50px;\n    overflow: hidden;\n    margin-right: 5px;\n    float: left;\n}\n.u-img img {\n    max-width: 100%;\n}\n.u-name {\n    float: left;\n}\n.select2-container {\n    max-width: 100%;\n}"

/***/ },

/***/ 812:
/***/ function(module, exports) {

module.exports = ".timeline-label .img-holder{\n    height:500px;\n    overflow: hidden;\n}\n\n.timeline-label .img-holder img {\n    height: 100%;\n}\n\n.type-icon-grey img {\n    width:25px;\n    -webkit-filter: grayscale(100%);\n            filter: grayscale(100%);\n}\n@media (max-width: 640px){\n    .timeline-label .img-holder {\n        height: auto;\n    }\n    .timeline-label .img-holder img {\n        height: auto;\n    }\n}"

/***/ },

/***/ 813:
/***/ function(module, exports) {

module.exports = "@media only screen and (max-width: 500px) {\n    .mar-rgt, .mar-lft {\n        font-size: 12px;\n        margin:0 5px;\n    }\n}"

/***/ },

/***/ 814:
/***/ function(module, exports) {

module.exports = ".post-type-panel,\n.mood-type-panel{\n    overflow: hidden;\n}\n\n.post-type-panel label,\n.mood-type-panel label{\n    float: left;\n    width: 33.3%;\n    padding: 15px;\n    text-align: center;\n    cursor: pointer;\n    margin-bottom: 0px;\n    border: 2px solid #ffffff;\n}\n\n.post-type-panel label input,\n.mood-type-panel label input{\n    visibility: hidden;\n    position: absolute;\n    left:0px;\n    top:0px;\n}\n\n.post-type-panel label img{\n    width: 50px;\n}\n\n.mood-type-panel label img{\n    width: 30px;\n    margin-bottom: 4px;\n}\n\n.post-type-panel label span,\n.mood-type-panel label span{\n    display: block;\n    font-size: 12px;\n    color: #888;\n}\n\n.post-type-panel label:hover span,\n.post-type-panel label.active span,\n.mood-type-panel label:hover span,\n.mood-type-panel label.active span{\n    color: #000;\n}\n\n.post-type-panel label.active,\n.mood-type-panel label.active{\n    background: #F2F2F2;\n}\n\n.widget-tabs-contr{\n    overflow: hidden;\n}\n\n.post-type-panel .type-definitions{\n    display: none;\n}\n\n.show_definitions label{\n    display: table;\n    width: 100%;\n    text-align: left;\n}\n\n.show_definitions .type-left{\n    text-align: center;\n}\n\n.show_definitions .type-left,\n.show_definitions .type-definitions{\n    display: table-cell;\n    vertical-align: top;\n    padding: 10px;\n    font-size: 12px;\n}\n\n.sebm-google-map-container {\n    height: 150px;\n}\n#post-images {\n    position: absolute;\n    opacity:0;\n    top:0;\n    left:0;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n.fileinput-button {\n    position: relative;\n}\n.imglisting {\n    padding:0;\n    max-resolution: 10px 0;\n}\n.imglisting li {\n    position: relative;\n}\n.selectimge  .cross {\n    position: absolute;\n    right: 0;\n    top: 0;\n    text-align: center;\n    z-index: 99999;\n    height: 20px;\n    width: 20px;\n    font-weight:bold;\n    line-height: 20px;\n    background: red;\n    color: #fff\n}\n.form-busy{\n    position: relative;\n}\n\n.form-busy:after{\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(138, 138, 138, 0.7);\n    top: 0px;\n    left: 0px;\n}\n.form-busy:before {\n    content: '';\n    background-image: url(\"../../../assets/img/form-loader.svg\");\n    position: absolute;\n    top: 50%;\n    z-index: 100;\n    width: 120px;\n    height: 120px;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    left: 50%;\n}\n"

/***/ },

/***/ 815:
/***/ function(module, exports) {

module.exports = ".spacer {\n    height:10px;\n}\n\n.log-modal .table th {\n    border: none !important;\n}\n.log-modal .table form {\n    text-align: center;\n}\n.log-modal .table form input[type=text] {\n    padding: 5px;\n    vertical-align: top;\n    width: 100%;\n    max-width: 200px;\n}\n\nbutton.btn.info-btn {\n    margin-left: 15px;\n}"

/***/ },

/***/ 816:
/***/ function(module, exports) {

module.exports = ".pad-ver figure{\n    display: block;\n    width: 100px;\n    height: 100px;\n    margin: 0 auto 10px;\n}\n.panel-head{\n    padding: 15px;\n    margin-bottom: 30px;\n    border-bottom: 1px solid #f3f3f3;\n}\n\n.panel-head h3 {\n    color: #344a61;\n    font-size:22px;\n}\n\n.panel-head .demo-panel-ref-btn,\n.panel-head span{\n    font-size: 16px;\n    padding:0px;\n    display: inline-block;\n    vertical-align: middle;\n}\n.panel-head .demo-panel-ref-btn{\n    padding-left: 10px;\n    color: #394f65;\n}\n\n.panel-head .panel-control{\n    padding-right:0px;\n}\n.panel-head span {\n    color: #c5ccd3;\n}\n.panel-head h3 {\n    margin:0px;\n}\n\n.pro-image{\n    margin-bottom: 40px;\n}\n\n.pro-content{\n    padding-bottom: 30px;\n}\n\n.pro-content label {\n    display: block;\n    margin-bottom: 30px;\n    font-size: 16px;\n    color: #344a61;\n}\n\n.pro-content label .color-box{\n    width: 20px;\n    height:20px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n@media (max-width: 414px){\n    .panel-head h3 {\n        font-size:16px;\n    }\n    .panel-head .demo-panel-ref-btn,\n    .panel-head span{\n        font-size:12px;\n    }\n    .pro-content label {\n        font-size:12px;\n        margin-bottom: 20px;\n    }\n    .pro-content label strong,\n    .pro-content label span{\n        display: block;\n    }\n}"

/***/ },

/***/ 817:
/***/ function(module, exports) {

module.exports = ".chose-color{\n    overflow: hidden;\n}\n\n.chose-color label{\n    float: left;\n    width:33.3%;\n    text-align: center;\n    padding:30px;\n    color: #FFF;\n    margin-bottom: 0px;\n    cursor: pointer;\n}\n\n.chose-color label input {\n    visibility: hidden;\n}\n.chose-color  label   input {\n    position: absolute;\n}\n.chose-color   label{\n    padding:30px 0;\n    text-align: center;\n}\n@media(max-width: 767px){\n    .chose-color   label {\n        font-size: 10px;\n    } \n}"

/***/ },

/***/ 818:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 819:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 820:
/***/ function(module, exports) {

module.exports = ".btn-group-justified.cutoms>.btn, .btn-group-justified.cutoms>.btn-group {\n    display: block;\n    float: left;\n    width: 33.33%;\n}\n.btn.active, .btn {\n    border:none !important;\n}\n.btn-group-justified.cutoms > .btn {\n    height:99px;\n}\n.btn.btn-active-highlight img:focus {\n    outline: none;\n}"

/***/ },

/***/ 821:
/***/ function(module, exports) {

module.exports = ".profile-head h3 {\n    display: inline-block;\n}\n.profile-head .panel-control {\n    display: inline-block;\n    width: calc(100% - 75px);\n    float: none;\n    vertical-align: middle;\n}\n.profile-head .panel-control span {\n    width: calc(100% - 70px);\n}\n.pad-ver figure{\n    display: block;\n    width: 100px;\n    height: 100px;\n    margin: 0 auto 10px;\n}\n\n.form-busy{\n    position: relative;\n}\n\n.form-busy:after{\n    content: '';\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: rgba(138, 138, 138, 0.7);\n    top: 0px;\n    left: 0px;\n    z-index:999;\n    overflow: hidden;\n}\n.form-busy:before {\n    content: '';\n    background-image: url(\"http://dev1-social.apptazer.com/assets/img/form-loader.svg\");\n    position: fixed;\n    top: 50%;\n    z-index: 1000;\n    width: 120px;\n    height: 120px;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    left: 50%;\n    overflow: hidden;\n}\n\n.panel-head{\n    padding: 15px;\n    margin-bottom: 30px;\n    border-bottom: 1px solid #f3f3f3;\n}\n\n.panel-head h3 {\n    color: #344a61;\n    font-size:22px;\n}\n\n.panel-head .demo-panel-ref-btn,\n.panel-head span{\n    font-size: 16px;\n    padding:0px;\n    display: inline-block;\n    vertical-align: middle;\n}\n.panel-head .demo-panel-ref-btn{\n    padding-left: 10px;\n    color: #394f65;\n}\n\n.panel-head .panel-control{\n    padding-right:0px;\n}\n.panel-head span {\n    color: #c5ccd3;\n}\n.panel-head h3 {\n    margin:0px;\n}\n\n.pro-image{\n    margin-bottom: 40px;\n}\n\n.pro-content{\n    padding-bottom: 30px;\n}\n\n.pro-content label {\n    display: block;\n    margin-bottom: 30px;\n    font-size: 16px;\n    color: #344a61;\n}\n\n.pro-content label .color-box{\n    width: 20px;\n    height:20px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.chose-color{\n    overflow: hidden;\n}\n\n.chose-color label{\n    float: left;\n    width:33.3%;\n    text-align: center;\n    padding:30px;\n    color: #FFF;\n    margin-bottom: 0px;\n    cursor: pointer;\n}\n\n.chose-color label input {\n    visibility: hidden;\n}\n.chose-color  label   input {\n    position: absolute;\n}\n.chose-color   label{\n    padding:30px 0;\n    text-align: center;\n}\n@media(max-width: 767px){\n    .chose-color   label {\n        font-size: 10px;\n    }\n}\n\n@media (max-width: 414px){\n    .panel-head h3 {\n        font-size:16px;\n    }\n    .panel-head .demo-panel-ref-btn,\n    .panel-head span{\n        font-size:12px;\n    }\n    .pro-content label {\n        font-size:12px;\n        margin-bottom: 20px;\n    }\n    .pro-content label strong,\n    .pro-content label span{\n        display: block;\n    }\n    .profile-head .panel-control {\n        width: calc(100% - 55px);\n    }\n    .profile-head .panel-control span {\n        width: calc(100% - 70px);\n    }\n}"

/***/ },

/***/ 822:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 823:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 824:
/***/ function(module, exports) {

module.exports = ".link {\n    cursor: pointer;\n}\n\n@media (max-width: 414px) {\n    .panel-body {\n        padding-left: 0;\n        padding-right: 0;\n    }\n    .panel-body .mins-width {\n        padding-left: 5px !important;\n        padding-right: 5px !important;\n    }\n}"

/***/ },

/***/ 825:
/***/ function(module, exports) {

module.exports = ".refresh-span i.fa-refresh {\n    margin: 10px;\n    font-size: 20px;\n}"

/***/ },

/***/ 826:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 827:
/***/ function(module, exports) {

module.exports = "<div id=\"container\" class=\"effect aside-float aside-bright mainnav-lg navbar-fixed\" [ngClass]=\"{'aside-in': rightContent.aside_in}\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ },

/***/ 828:
/***/ function(module, exports) {

module.exports = "<a (click)=\"asideToggle()\" href=\"javascript:void(0)\"> <em class=\"fa fa-fw fa-plus\"></em> {{content}} </a>"

/***/ },

/***/ 829:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },

/***/ 830:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },

/***/ 831:
/***/ function(module, exports) {

module.exports = "<nav id=\"mainnav-container\">\n  <div id=\"mainnav\">\n\n    <!--Menu-->\n    <!--================================-->\n    <div id=\"mainnav-menu-wrap\">\n      <div class=\"nano\">\n        <div class=\"nano-content\">\n\n          <!--Profile Widget-->\n          <!--================================-->\n          <div id=\"mainnav-profile\" class=\"mainnav-profile\">\n            <div class=\"profile-wrap\">\n                        <div class=\"pad-btm text-left\"> <img class=\"img-circle img-xs img-border\" [src]=\"(auth.currentUser.ImageURL == '')?app.default_user_profile_pic:auth.currentUser.ImageURL\" alt=\"Profile Picture\"> <span class=\"menu-title text-muted\">{{auth.currentUser.FirstName}} {{auth.currentUser.LastName}} </span> </div>\n              <a href=\"#profile-nav\" class=\"box-block\">\n              </a> </div>\n          </div>\n\n          <!--Profile Widget-->\n          <!--================================-->\n          <div class=\"mainnav-profile\">\n            <div id=\"profile-nav\" class=\"collapse list-group bg-trans\"> <a href=\"#\" class=\"list-group-item\"> <i class=\"demo-pli-male icon-lg icon-fw\"></i> View Profile </a> <a href=\"#\" class=\"list-group-item\"> <i class=\"demo-pli-gear icon-lg icon-fw\"></i> Settings </a> <a href=\"#\" class=\"list-group-item\"> <i class=\"demo-pli-information icon-lg icon-fw\"></i> Help </a> <a href=\"#\" class=\"list-group-item\"> <i class=\"demo-pli-unlock icon-lg icon-fw\"></i> Logout </a> </div>\n          </div>\n          <ul id=\"mainnav-menu\" class=\"list-group\">\n\n            <li class=\"list-divider\"></li>\n            <li class=\"list-header\">View Logs <i (click)=\"refreshTimelines()\" class=\"pull-to-refresh fa fa-refresh\" [ngClass]=\"{'fa-spin': loadingUserStuff}\"  aria-hidden=\"true\"></i></li>\n            <li *ngFor=\"let option of timelineService.userTimelines\"> <a routerLink=\"/log/{{option.Id}}\"> <span class=\"menu-title text-menu\"> <strong>{{option.Name}}</strong> </span> </a> </li>\n            <li routerLinkActive=\"active\"> <a routerLink=\"/create-custom-log\"> <span class=\"menu-title text-menu\"> <strong>Custom View</strong> </span> </a> </li>\n\n            <li class=\"list-divider\"></li>\n\n            <li class=\"list-header\">Manage</li>\n            <li routerLinkActive=\"active\"> <a routerLink=\"/manage-logs\"> <span class=\"menu-title text-menu\"> <strong>Logs</strong> </span> </a> </li>\n\n            <!--Menu list item-->\n            <li routerLinkActive=\"active\"> <a routerLink=\"/manage-profiles\"> <span class=\"menu-title text-menu\"> <strong>My Account</strong> </span> </a> </li>\n            <li class=\"list-divider\"></li>\n            <!--Menu list item-->\n\n            <li> <a href=\"javascript:void(0)\" (click)=\"logout()\"> <span class=\"menu-title text-menu\"> <strong>Logout</strong> </span> </a> </li>\n            <li class=\"list-divider\"></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--================================-->\n    <!--End menu-->\n\n  </div>\n</nav>\n"

/***/ },

/***/ 832:
/***/ function(module, exports) {

module.exports = "<div id=\"content-container\">\n\n  <!--Page content-->\n  <!--===================================================-->\n  <div id=\"page-content\">\n    <ng-content></ng-content>\n  </div>\n  <!--===================================================-->\n  <!--End page content-->\n\n</div>"

/***/ },

/***/ 833:
/***/ function(module, exports) {

module.exports = "<aside id=\"aside-container\">\n  <div id=\"aside\">\n    <div class=\"nano\">\n      <div class=\"nano-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</aside>"

/***/ },

/***/ 834:
/***/ function(module, exports) {

module.exports = "<div class=\"boxed\">\n  <ng-content></ng-content>\n</div>\n"

/***/ },

/***/ 835:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\" (click)=\"viewCustomLog($event)\"> <a href=\"javascript:void(0)\"> <em class=\"fa fa-fw fa-eye\"></em> View </a> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"panel\">\n          <div class=\"panel-heading\">\n            <div class=\"panel-control\">\n              <ul class=\"pager pager-rounded\">\n              </ul>\n            </div>\n            <h3 class=\"panel-title\">Configure Custom View</h3>\n          </div>\n\n          <!--Hover Rows-->\n          <!--===================================================-->\n          <div class=\"panel-body\">\n            <p class=\"mar-btm\">Use these filters to configure a custom view with content from any of your logs. </p>\n            <div class=\"row\">\n              <div class=\"col-sm-4 col-md-3\">\n                <div class=\"mar-btm\">\n                  <p class=\"dropdown-header\">\n                      <span>\n                          <button class=\"btn btn-xs btn-rounded btn-default pull-right\" (click)=\"unselectAllTimelines()\"> None</button>\n                          <button class=\"btn btn-xs btn-rounded btn-default pull-right mar-rgt-sm\" (click)=\"selectAllTimelines()\">All</button>\n                      </span>\n                  </p>\n\n                  <div class=\"form-group pad-hor\">\n                    <span *ngFor=\"let option of timelines\">\n                      <div class=\"checkbox\" >\n                        <input class=\"magic-checkbox\" id=\"demo-form-checkbox{{option.Id}}\" #timeline type=\"checkbox\" value=\"{{option.Id}}\" [checked]=\"isTimelineSelected(option.Id)\" name=\"timeline{{option.Id}}\" (change)=\"timelinesChanged(timeline.checked+','+timeline.value)\" />\n                          <label for=\"demo-form-checkbox{{option.Id}}\"> {{option.Name}}</label>\n                      </div>\n                      <hr class=\"new-section-xs bord-no\">\n                    </span>\n                  </div>\n                </div>\n\n                <div class=\"mar-btm\">\n                  <p class=\"dropdown-header\">View Date<span>\n                                                <button class=\"btn btn-xs btn-rounded btn-default pull-right\">All</button>\n                                                </span>\n                  </p>\n                  <!--Bootstrap Datepicker : Range-->\n                  <!--===================================================-->\n                  <div id=\"demo-dp-range\">\n                    <div class=\"input-daterange input-group\" id=\"datepicker\">\n                      <input type=\"text\" class=\"form-control datepicker\" name=\"start\" id=\"from-date\"/>\n                      <span class=\"input-group-addon\">to</span>\n                      <input type=\"text\" class=\"form-control datepicker\" name=\"end\" id=\"to-date\"/>\n                    </div>\n                  </div>\n                  <!--===================================================-->\n                </div>\n\n                <hr class=\"new-section-xs bord-no\">\n\n              </div>\n              <div class=\"col-sm-4 col-md-3\">\n                <div class=\"mar-btm\">\n                  <p class=\"dropdown-header\">View Categories<span>\n                                                <button class=\"btn btn-xs btn-rounded btn-default pull-right\" (click)=\"unselectAllTypes()\">None</button>\n                                                <button class=\"btn btn-xs btn-rounded btn-default pull-right mar-rgt-sm\" (click)=\"selectAllTypes()\">All</button>\n                                                </span>\n                  </p>\n                  <div class=\"cate-widget\">\n                    <label *ngFor=\"let option of types\" [ngClass]=\"{active: isTypeSelected(option.value)}\">\n                      <input type=\"checkbox\" #type type=\"checkbox\" value=\"{{option.value}}\" [checked]=\"isTypeSelected(option.value)\" (change)=\"typeChanged(type.checked+','+type.value)\" />\n                      <img class=\"category-images\" src=\"assets/img/{{option.img}}\" alt=\"\">\n                      <span>{{option.value}}</span>\n                    </label>\n                  </div>\n                  <!--Justified Button Group-->\n                  <!--===================================================-->\n\n                </div>\n              </div>\n              <div class=\"col-sm-4 col-md-3\">\n                <div class=\"mar-btm\">\n                  <p class=\"dropdown-header\">View Tags<span>\n                                                <button class=\"btn btn-xs btn-rounded btn-default pull-right\" (click)=\"unselectAllTags()\">None</button>\n                                                <button class=\"btn btn-xs btn-rounded btn-default pull-right mar-rgt-sm\" (click)=\"selectAllTags()\">All</button>\n                                                </span>\n                  </p>\n                  <!--Justified Button Group-->\n                  <!--===================================================-->\n                  <!--                  <div class=\"pre-scrollable bord-ver\">\n                  -->\n                  <div class=\"tags-widget clearfix\">\n                    <label *ngFor=\"let option of tags\" [ngClass]=\"{active: isTagSelected(option)}\">\n                      <input type=\"checkbox\" #tag value=\"{{option}}\" [checked]=\"isTagSelected(option)\" (change)=\"tagChanged(tag.checked+','+tag.value)\" />\n                      <span>{{option}}</span>\n                    </label>\n                  </div>\n                  <!--===================================================-->\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-3\">\n                <div class=\"mar-btm\">\n                  <div class=\"clear\"></div>\n                  <p class=\"dropdown-header wide\" >View Moods<span>\n                                                <button class=\"btn btn-xs btn-rounded btn-default pull-right\" (click)=\"unselectAllMoods()\">None</button>\n                                                <button class=\"btn btn-xs btn-rounded btn-default pull-right mar-rgt-sm\" (click)=\"selectAllMoods()\">All</button>\n                                                </span>\n                  </p>\n                  <!--                  <div class=\"pre-scrollable bord-ver\">\n                  -->\t\t\t\t\t                        <!--Justified Button Group-->\n                  <!--===================================================-->\n                  <div class=\"mood-type-panel\">\n                    <label  *ngFor=\"let option of modes\" [ngClass]=\"{active: isModeSelected(option.value)}\">\n                      <input type=\"checkbox\" #mode type=\"checkbox\" value=\"{{option.value}}\" [checked]=\"isModeSelected(option.value)\" (change)=\"modeChanged(mode.checked+','+mode.value)\" >\n                      <img src=\"assets/img/{{option.img}}\" alt=\"\">\n                      <span>{{option.value}}</span>\n                    </label>\n                  </div>\n                  <!--===================================================-->\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n    </div>\n      </div>\n    </div>\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n"

/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\" (click)=\"asideToggle()\"> <a href=\"javascript:void(0)\"> <em class=\"fa fa-fw fa-plus\"></em> Add Content </a> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <div class=\"row\">\n      <div class=\"spacer\"></div>\n      <div  class=\"col-lg-6\">\n        <div class=\"panel\">\n          <div class=\"panel-heading\">\n            <div class=\"panel-control\">\n              <ul class=\"pager pager-rounded\">\n\n              </ul>\n            </div>\n            <h3 class=\"panel-title\">\n              Create new log\n            </h3>\n\n          </div>\n\n\n          <!--Hover Rows-->\n          <!--===================================================-->\n          <div class=\"panel-body\">\n\n\n            <table class=\"table table-hover table-vcenter\">\n              <thead>\n              <tr>\n                <th>\n                  <form (submit)=\"create(f)\" #f=\"ngForm\">\n                    <input type=\"text\" class=\"input_text\" ngModel name=\"Name\" placeholder=\"Enter New Log Name Here..\" required>\n                    <button type=\"submit\" class=\"btn btn-info\">Save</button>\n                    <div class=\"spacer\"></div>\n                  </form>\n                </th>\n              </tr>\n              </thead>\n            </table>\n          </div>\n          <!--===================================================-->\n          <!--End Hover Rows-->\n\n        </div>\n      </div>\n\n\n      <br>\n    </div>\n\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n"

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\"> <a href=\"javascript:void(0)\" > Profile </a> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <app-profile\n            [manualControls]=\"true\"\n            [formBusy]=\"formBusy\"\n            [editMode]=\"true\"\n            [newAccount]=\"true\"\n            (profileUpdated)=\"profileCreated($event)\"\n            (profileUpdating)=\"profileCreating($event)\"\n            [title]='title'\n    ></app-profile>\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n"

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = "<!-- BACKGROUND IMAGE -->\n<!--===================================================-->\n<div id=\"bg-overlay\"></div>\n\n\n<!-- LOGIN FORM -->\n<!--===================================================-->\n<div class=\"cls-content\">\n    <div class=\"cls-content-sm panel\">\n        <div class=\"panel-body\">\n            <div class=\"mar-ver pad-btm\">\n              <h3 class=\"h4 mar-no\">Riza</h3>\n              <p class=\"text-muted\">Create new password.</p>\n            </div>\n            <form action=\"index.html\" (ngSubmit)=\"createNewPassword(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" ngModel name=\"password\" placeholder=\"Enter new password\" autofocus>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" ngModel name=\"confirm_password\" placeholder=\"Confirm new password\">\n                </div>\n                <div class=\"checkbox pad-btm text-left\">\n                    <input id=\"demo-form-checkbox\" class=\"magic-checkbox\" type=\"checkbox\">\n                </div>\n                <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Reset Password</button>\n            </form>\n        </div>\n\n\n    </div>\n</div>\n<!--===================================================-->\n"

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\"> <a href=\"javascript:void(0)\" > Create Profile </a> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <app-profile\n            [user]=\"auth.currentUser\"\n            [manualControls]=\"true\"\n            [editMode]=\"editMode\"\n            (profileUpdating)=\"profileUpdating($event)\"\n            [formBusy]=\"formBusy\"\n            (profileUpdated)=\"profileUpdated($event)\"\n            (someThingWentWrong)=\"someThingWentWrong($event)\"\n    ></app-profile>\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n"

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\"> <a href=\"javascript:void(0)\" > Profile </a> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <app-profile [user]=\"user\" [editMode]=\"true\"></app-profile>\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n"

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <p class=\"pad-lft\">&#0169; 2017 RIZA</p>\n</footer>"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = "<!-- BACKGROUND IMAGE -->\n<!--===================================================-->\n<div id=\"bg-overlay\"></div>\n\n\n<!-- PASSWORD RESETTING FORM -->\n<!--===================================================-->\n<div class=\"cls-content\">\n    <div class=\"cls-content-sm panel\">\n        <div class=\"panel-body\">\n            <div class=\"pad-ver\">\n                <i class=\"pli-mail icon-3x\"></i>\n            </div>\n            <p class=\"text-muted pad-btm\">Enter your email address to recover your password. </p>\n            <form action=\"pages-login.html\" (ngSubmit)=\"sendPasswordResetLink(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" ngModel name=\"email\">\n                </div>\n                <div class=\"form-group text-right\">\n                    <button class=\"btn btn-success btn-block\" type=\"submit\">Reset Password</button>\n                </div>\n            </form>\n            <p style=\"color:red; text-align:center;\">{{errors}}</p>\n            <div class=\"pad-top\">\n                <a routerLink=\"/login\" class=\"btn-link mar-rgt\">Back to Login</a>\n            </div>\n        </div>\n    </div>\n</div>\n<!--===================================================-->\n"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = "<ul class=\"nav navbar-top-links pull-right top-bar-widget\">\n  <ng-content></ng-content>\n</ul>"

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = "<header id=\"navbar\">\n  <div id=\"navbar-container\" class=\"boxed\">\n\n    <!--Brand logo & name-->\n    <!--================================-->\n    <div class=\"navbar-header\"> <a href=\"#\" class=\"navbar-brand\"> <img src=\"assets/img/logo.png\" alt=\"Nifty Logo\" class=\"brand-icon\">\n      <div class=\"brand-title\"> <span class=\"brand-text\">RIZA</span> </div>\n    </a> </div>\n    <!--================================-->\n    <!--End brand logo & name-->\n\n    <!--Navbar Dropdown-->\n    <!--================================-->\n    <div class=\"navbar-content bg-navbar clearfix\">\n      <ul class=\"nav navbar-top-links pull-left\">\n\n        <!--Navigation toogle button-->\n        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n        <li class=\"tgl-menu-btn\"> <a class=\"mainnav-toggle\" href=\"javascript:void(0)\"> <i class=\"fa fa-fw fa-bars\"></i> </a> </li>\n        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n        <!--End Navigation toogle button-->\n\n        <li *ngIf=\"title != ''\"> <a href=\"javascript:void(0)\"> {{title}} </a> </li>\n      </ul>\n        <ng-content></ng-content>\n    </div>\n    <!--================================-->\n    <!--End Navbar Dropdown-->\n\n  </div>\n</header>\n"

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = "<ul class=\"nav navbar-top-links pull-left\">\n  <ng-content></ng-content>\n</ul>"

/***/ },

/***/ 846:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\"> <app-add-content-btn></app-add-content-btn> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <app-profile\n            [user]=\"auth.currentUser\"\n            (profileUpdating)=\"profileUpdating($event)\"\n            (profileUpdated)=\"profileUpdated($event)\"\n    ></app-profile>\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n\n"

/***/ },

/***/ 847:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\"> <a href=\"javascript:void(0)\" > Profile </a> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <app-profile\n            [manualControls]=\"true\"\n            [formBusy]=\"formBusy\"\n            [editMode]=\"true\"\n            [newAccount]=\"true\"\n            (profileUpdated)=\"profileCreated($event)\"\n            (profileUpdating)=\"profileCreating($event)\"\n            [title]='title'\n    ></app-profile>\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n"

/***/ },

/***/ 848:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\"> <app-add-content-btn></app-add-content-btn> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"panel\">\n          <form (submit)=\"invite(f)\" #f=\"ngForm\">\n            <div class=\"panel-heading\">\n              <div class=\"panel-control\">\n                <ul class=\"pager pager-rounded\">\n                </ul>\n              </div>\n              <div class=\"panel-heading\">\n                <div class=\"panel-control\">\n                  <button type=\"submit\" class=\"demo-panel-ref-btn btn btn-default\" data-target=\"#demo-panel-ref\" data-toggle=\"panel-overlay\"> <i class=\"fa fa-share fa-fw\"></i> Invite </button>\n                </div>\n                <h3 class=\"panel-title\">Invite others to join this log</h3>\n              </div>\n            </div>\n            <!--Hover Rows-->\n            <!--===================================================-->\n            <div class=\"panel-body\">\n              <div class=\"mar-ver\">\n                <p class=\"text-main text-bold mar-no\">Add from the directory</p>\n                <p>Invite someone that already uses Riza to join this log.</p>\n                <div class=\"input-group mar-btm col-xs-12 col-md-4\">\n                  <!--===================================================-->\n                  <select class=\"invite-users-multi-select\" multiple style=\"width: 300px;\" ngModel name=\"users\" required=\"required\">\n\n                  </select>\n                  <!--===================================================-->\n                </div>\n              </div>\n\n              <p class=\"text-main text-bold\">Or, enter an email address</p>\n              <!--                                  <p>Enter the email address of the person you would like to invite.</p>\n              -->                                  \t\t\t\t\t                  <div class=\"input-group mar-btm col-xs-12 col-md-3\">\n              <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n            </div>\n              <div class=\"input-group mar-btm col-xs-12 col-md-4\">\n\n                <button *ngIf=\"email != ''\" type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\">Preview Email Invite</button>\n                <!-- Modal -->\n                <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n                  <div class=\"modal-dialog\">\n\n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                        <h4 class=\"modal-title\">Send Invitation</h4>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"user-info clearfix\">\n\n                        <div class=\"u-img\"><img src=\"assets/img/profile-photos/profile-default.png\" alt=\"\"></div>\n                        <div class=\"u-name\">\n                            <strong>{{email}}</strong>\n                        </div>\n                        </div>\n                        <p >\n                          They will see this message when your request is sent\n                        </p>\n                        <p style=\"height: 150px; border:solid 1px #ddd; padding:6px; border-radius:4px\">\n                          Please join my log\n                        </p>\n                      </div>\n                      <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n            <!--===================================================-->\n            <!--End Hover Rows-->\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"panel\">\n          <div class=\"panel-heading\">\n            <div class=\"panel-control\">\n              <ul class=\"pager pager-rounded\">\n              </ul>\n            </div>\n            <h3 class=\"panel-title\">Add someone to this log by creating a profile for them.</h3>\n          </div>\n\n          <!--Hover Rows-->\n          <!--===================================================-->\n          <div class=\"panel-body\">\n            <p class=\"text-main text-bold\">Instead of inviting someone to create their own profile, you can create one for them. This is a great way to go for pets, children, people who have died, or members of your family or friends who are kind of busy or just dropped their phone in the lake.</p>\n            <p> Once you create this person’s profile, you can add content for them too. Since you’ll be the manager of this profile, when other log members suggest content for them, you will be the one to review and add those posts. </p>\n            <p> When you create a profile, you can invite someone to start managing their own profile right away, when they turn 13, or anytime.  You also can transfer the management of this profile to another member of your log. </p>\n            <a class=\"btn btn-info\" routerLink=\"/log/{{timeline.Id}}/invite-users/managed\">Create Managed Profile</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n\n"

/***/ },

/***/ 849:
/***/ function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n  <button type=\"button\" (click)=\"pullToRefresh($event)\">refresh</button>\n  <div *ngIf=\"timeline.Entries.length > 0\" class=\"timeline\">\n    <div class=\"timeline-entry\" *ngFor=\"let entry of timeline.Entries\">\n      <div class=\"timeline-stat\">\n        <div class=\"timeline-icon\"></div>\n        <div class=\"timeline-time\">{{modifiedDate(entry.DateStart)}} {{(entry.DateEnd != '')?'-':''}} {{modifiedDate(entry.DateEnd)}}</div>\n      </div>\n      <div class=\"timeline-label\">\n        <div (click)=\"showDetail(entry)\" *ngIf=\"entry.Files.length > 0\" class=\"img-holder mar-btm\"> <img alt=\"Image\" src=\"{{entry.Files[0].FileURL}}\"> </div>\n        <p>\n          <span class=\"type-icon-grey\" *ngFor=\"let type of getEntryTypes(entry.Type)\"><img src=\"{{app.domain}}/assets/img/{{type.img}}\"></span>\n          <a href=\"javascript:void(0)\" (click)=\"showDetail(entry)\" class=\"text-main btn-link text-semibold\"><i  class=\"fa text-muted\"></i>\n          {{entry.Name}}</a> <a class=\"pull-right btn-link text-semibold\" (click)=\"showUserProfile(entry.UserId)\">{{(entry.NickName == \"\")?entry.User:entry.NickName}}</a></p>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</div>"

/***/ },

/***/ 850:
/***/ function(module, exports) {

module.exports = "<!-- BACKGROUND IMAGE -->\n<!--===================================================-->\n<div id=\"bg-overlay\"></div>\n\n\n<!-- LOGIN FORM -->\n<!--===================================================-->\n<div class=\"cls-content\">\n    <div class=\"cls-content-sm panel\">\n        <div class=\"panel-body\">\n            <div class=\"mar-ver pad-btm\">\n                <h3 class=\"h4 mar-no\">{{title}}</h3>\n                <p class=\"text-muted\">Sign In to your account.</p>\n            </div>\n            <form action=\"index.html\" (ngSubmit)=\"attempt(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" ngModel name=\"Email\" placeholder=\"Email\" autofocus required=\"required\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" ngModel name=\"Password\" placeholder=\"Password\" required>\n                </div>\n                <div class=\"checkbox pad-btm text-left\">\n                    <input id=\"demo-form-checkbox\" class=\"magic-checkbox\" type=\"checkbox\">\n                    <label for=\"demo-form-checkbox\">Remember me</label>\n                </div>\n                <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Sign In</button>\n            </form>\n        </div>\n        <p style=\"color:red; text-align:center;\">{{errors}}</p>\n        <div class=\"pad-all\">\n            <a routerLink=\"/forgotpass\" class=\"btn-link mar-rgt\">Forgot password ?</a>\n            <a routerLink=\"/register\" class=\"btn-link mar-lft\">Create new account</a>\n        </div>\n    </div>\n</div>\n<!--===================================================-->\n"

/***/ },

/***/ 851:
/***/ function(module, exports) {

module.exports = "\n<!-- Bubble Numbers Form Wizard -->\n<!--===================================================-->\n<div id=\"add-entry-form-wizard\" [ngClass]=\"{'form-busy': uploadingPost == true}\">\n\n  <!--Form-->\n  <form class=\"form-horizontal\" onsubmit=\"return false\" #f=\"ngForm\">\n\n    <!--Footer button-->\n\n    <div class=\"wz-heading wz-w-label bg-info\">\n\n      <!--Progress bar-->\n      <div class=\"progress progress-xs\">\n        <div style=\"width: 15%;\" class=\"progress-bar progress-bar-dark\"></div>\n      </div>\n\n      <!--Nav-->\n      <ul class=\"wz-steps wz-icon-bw wz-nav-on text-lg\">\n        <li class=\"col-xs-3\"> <a data-toggle=\"tab\" href=\"#demo-step-tab1\"> <span class=\"icon-wrap icon-wrap-xs icon-circle bg-gray mar-ver\"> <span class=\"wz-icon icon-txt text-bold\">1</span> <em class=\"wz-icon-done demo-psi-like\"></em> </span> <small class=\"wz-desc box-block text-semibold\"></small> </a> </li>\n        <li class=\"col-xs-3\"> <a data-toggle=\"tab\" href=\"#demo-step-tab2\"> <span class=\"icon-wrap icon-wrap-xs icon-circle bg-gray mar-ver\"> <span class=\"wz-icon icon-txt text-bold\">2</span> <i class=\"wz-icon-done demo-psi-like\"></i> </span> <small class=\"wz-desc box-block text-semibold\"></small> </a> </li>\n        <li class=\"col-xs-3\"> <a data-toggle=\"tab\" href=\"#demo-step-tab3\"> <span class=\"icon-wrap icon-wrap-xs icon-circle bg-gray mar-ver\"> <span class=\"wz-icon icon-txt text-bold\">3</span> <i class=\"wz-icon-done demo-psi-like\"></i> </span> <small class=\"wz-desc box-block text-semibold\"></small> </a> </li>\n        <li class=\"col-xs-3\"> <a data-toggle=\"tab\" href=\"#demo-step-tab4\"> <span class=\"icon-wrap icon-wrap-xs icon-circle bg-gray mar-ver\"> <span class=\"wz-icon icon-txt text-bold\">4</span> <i class=\"wz-icon-done demo-psi-like\"></i> </span> <small class=\"wz-desc box-block text-semibold\"></small> </a> </li>\n      </ul>\n    </div>\n    <div class=\"bg-gray bord-btm\">\n      <div class=\"demo-nifty-btn widget-tabs-contr\">\n        <div class=\"col-xs-6 pad-no\">\n          <button type=\"button\" class=\"previous btn btn-block btn-info mar-no pad-ver\" (click)=\"movedToPrevSlide()\">Previous</button>\n        </div>\n        <div class=\"col-xs-6 pad-no\">\n          <button type=\"button\" class=\"next btn btn-block btn-info mar-no pad-ver\" (click)=\"movedToNextSlide()\">Next</button>\n          <button type=\"button\" (click)=\"create(f,$event)\" class=\"finish btn btn-block btn-success mar-no pad-ver\" disabled type=\"submit\">Save</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-body bg-light\">\n      <div class=\"tab-content\">\n\n        <!--First tab-->\n        <div id=\"demo-step-tab1\" class=\"tab-pane\">\n          <div class=\"mar-btm\">\n            <p class=\"text-main text-bold\">Type of content:<span class=\"btn btn-default btn-xs btn-rounded pull-right mar-rgt\" (click)=\"changeTypeOrientation()\"> Show Definitions</span></p>\n            <!--Justified Button Group-->\n            <!--===================================================-->\n\n            <div class=\"post-type-panel\" [ngClass]=\"{show_definitions: showDefinitions === true}\">\n              <label *ngFor=\"let option of types\" [ngClass]=\"{active: isTypeSelected(option.value)}\">\n                <input type=\"checkbox\" #type type=\"checkbox\" value=\"{{option.value}}\" [checked]=\"isTypeSelected(option.value)\" (change)=\"typeChanged(type.checked+','+type.value)\" />\n                <div class=\"type-left\">\n                  <img src=\"assets/img/{{option.img}}\" alt=\"\">\n                  <span>{{option.value}}</span>\n                </div>\n                <div class=\"type-definitions\">\n                  {{option.desc}}\n                </div>\n              </label>\n            </div>\n            <!--===================================================-->\n\n          </div>\n          <hr class=\"new-section-xs bord-no\">\n          <p class=\"text-main text-bold\">Include this content in these timelines:</p>\n          <div class = \"mar-lft mar-top\">\n            <div class=\"form-group pad-hor\">\n              <!-- Checkboxes -->\n                <span  *ngFor=\"let option of timelines\">\n                  <div class=\"checkbox\">\n                        <input class=\"magic-checkbox\" id=\"demo-form-checkbox{{option.Id}}\" #timeline type=\"checkbox\" value=\"{{option.Id}}\" [checked]=\"isTimelineSelected(option.Id)\" name=\"timeline{{option.Id}}\" (change)=\"timelinesChanged(timeline.checked+','+timeline.value)\" />\n                        <label for=\"demo-form-checkbox{{option.Id}}\"> {{option.Name}}</label>\n                    </div>\n                <hr class=\"new-section-xs bord-no\">\n              </span>\n            </div>\n          </div>\n\n          <hr class=\"new-section-xs bord-no\">\n          <hr class=\"new-section-xs\">\n          <div *ngIf=\"existingEntry != null\" class=\"text-danger pad-all\"><span (click)=\"deletePost()\"><i class=\"fa fa-close pad-rgt text-danger\"></i>Delete this Post</span></div>\n        </div>\n\n        <!--Second tab-->\n        <div id=\"demo-step-tab2\" class=\"tab-pane fade\">\n          <hr class=\"new-section-xs bord-no\">\n          <p class=\"text-main text-bold\">Title</p>\n          <div>\n            <input type=\"text\" [(ngModel)]=\"postName\" name=\"Name\" class=\"form-control\">\n          </div>\n          <hr class=\"new-section-xs bord-no\">\n          <p class=\"text-main text-bold\">Date(s)</p>\n\n          <!--Bootstrap Datepicker : Range-->\n          <!--===================================================-->\n          <div id=\"demo-dp-range\">\n            <div class=\"input-daterange input-group\">\n              <input id=\"new-post-start-date\" class=\"form-control datepicker\" [(ngModel)]=\"postDateStart\" name=\"DateStart\" />\n              <span class=\"input-group-addon\">to</span>\n              <input id=\"new-post-end-date\" class=\"form-control datepicker\" [(ngModel)]=\"postDateEnd\" name=\"DateEnd\" />\n            </div>\n          </div>\n          <!--===================================================-->\n\n          <hr class=\"new-section-xs bord-no\">\n          <p class=\"text-main text-bold\">Location</p>\n          <div>\n            <input type=\"text\" [(ngModel)]=\"postLocation\" name=\"Location\" class=\"form-control\" id=\"autocompleteInput\">\n          </div>\n          <hr class=\"new-section-xs bord-no\">\n          <p class=\"text-main text-bold\">Map</p>\n          <div *ngIf=\"showmap\">\n            <sebm-google-map [(latitude)]=\"lat\" [(longitude)]=\"lng\" [zoom]=\"15\">\n              <sebm-google-map-marker [(latitude)]=\"lat\" [(longitude)]=\"lng\"></sebm-google-map-marker>\n            </sebm-google-map>\n          </div>\n          <hr class=\"new-section-xs bord-no\">\n          <p class=\"text-main text-bold\">Add images</p>\n\n          <div>\n            <!--<div class=\"panel-body\">-->\n\n            <!--Dropzonejs using Bootstrap theme-->\n            <!--===================================================-->\n\n            <div class=\"bord-top pad-ver\">\n              <!-- The fileinput-button span is used to style the file input field as button -->\n              <span class=\"btn btn-default fileinput-button dz-clickable\">\n                <i class=\"fa fa-plus\"></i>\n                <span>Add Images<input id=\"post-images\" (change)=\"filesSelected($event)\" type=\"file\" ngModel name=\"images\" accept=\".jpg\" multiple  /></span>\n                <i class=\"fa fa-refresh fa-spin\"></i>\n              </span>\n              <ul class=\"clearfix imglisting\">\n                <li class=\"selectimge\" *ngFor=\"let img of existingFiles; let i = index\" >\n                  <img src=\"{{img.ThumbURL}}\" >\n                  <span class=\"cross\" (click)=\"removeImage(img.Id)\">x</span>\n                </li>\n                <li class=\"selectimge\" *ngFor=\"let img of uploadedFiles; let i = index\" >\n                  <img src=\"{{img.ThumbURL}}\" >\n                  <span class=\"cross\" (click)=\"removeImage(img.Id)\">x</span>\n                </li>\n              </ul>\n              <div class=\"btn-group pull-right\">\n                <!--<button id=\"dz-upload-btn\" class=\"btn btn-default\" type=\"submit\" disabled> <i class=\"fa fa-upload-cloud\"></i> Upload </button>-->\n                <!--<button id=\"dz-remove-btn\" class=\"btn btn-default cancel\" type=\"reset\" disabled> <i class=\"demo-pli-cross\"></i> </button>-->\n              </div>\n            </div>\n            <!--===================================================-->\n            <!--End Dropzonejs using Bootstrap theme-->\n          </div>\n        </div>\n\n        <!--Third tab-->\n        <div id=\"demo-step-tab3\" class=\"tab-pane\">\n\n          <p class=\"text-main text-bold\">I was my <em class=\"text-success\"> best self ?</em></p>\n\n          <!--Range Slider2 : Steps-->\n          <!--===================================================-->\n          <div class=\"pad-hor mar-btm\">\n            <div class=\"mar-btm text-center\"> <span class=\"h1 text-success\">{{BestSelfRating}}</span> </div>\n            <div id=\"test_slider\"></div>\n            <input type=\"hidden\" [ngModel]=\"BestSelfRating\" name=\"BestSelfRating\">\n            <div class=\"mar-all\"><i class=\"pull-left\">Not so much</i><i class=\"pull-right\"> Yes I really was</i> </div>\n          </div>\n          <br><br>\n          <p class=\"text-main text-bold\">About</p>\n          <textarea rows=\"4\" class=\"form-control\" [(ngModel)]=\"postAbout\" name=\"About\" placeholder=\"My experiences, highlights, insights, or whatever comes to mind.\" ></textarea>\n          <hr class=\"new-section-xs bord-no\">\n          <!-- Bootstrap Tags Input -->\n          <!--===================================================-->\n          <input type=\"text\" id=\"what-tags-input\" class=\"form-control\" [ngModel]=\"whatTags\" name=\"Tags\" placeholder=\"What Tags\" value=\"{{whatTags.join(',')}}\" data-role=\"tagsinput\">\n          <!--===================================================-->\n          <hr class=\"new-section-sm bord-no\">\n          <p class=\"text-main text-bold\">What else...</p>\n          <textarea rows=\"1\" [(ngModel)]=\"postWhatelse\" name=\"WhatElse\" class=\"form-control\" placeholder=\"Challenges, additianal comments, etc.\" ></textarea>\n          <hr class=\"new-section-sm bord-no\">\n\n          <!--Range Slider1 : Steps-->\n          <p class=\"text-main text-bold\">How <em class=\"text-success\"> close </em> did I feel to others?</p>\n          <!--                    <hr class=\"new-section-xs bord-no\">\n-->\n\n          <!--===================================================-->\n          <div class=\"pad-hor\">\n            <div class=\"mar-btm text-center\"> <span class=\"h1 text-success\">{{CloseToOthers}}</span> </div>\n            <div id=\"close_to_others_slider\"></div>\n            <input type=\"hidden\" [ngModel]=\"CloseToOthers\" name=\"CloseToOthers\">\n          </div>\n          <div class=\"mar-all\"><i class=\"pull-left\">Not close</i><i class=\"pull-right\"> Very close</i> </div>\n          <hr class=\"new-section-sm bord-no\">\n          <!--===================================================-->\n\n          <!--                      <hr class=\"new-section-xs bord-no\">\n-->\n          <!-- Bootstrap Tags Input -->\n          <!--===================================================-->\n          <input id=\"who-tags-input\" type=\"text\" class=\"form-control\" [ngModel]=\"whoTags\" name=\"WhoTags\" placeholder=\"Who Tags\" value=\"{{whoTags.join(',')}}\" data-role=\"tagsinput\">\n          <!--===================================================-->\n\n          <hr class=\"new-section-xs bord-no\">\n\n          <!--===================================================-->\n        </div>\n\n        <!--Fourth tab-->\n        <div id=\"demo-step-tab4\" class=\"tab-pane\">\n          <hr class=\"new-section-md bord-no\">\n          <p class=\"text-main text-bold\">Tags about me related to this post</p>\n\n          <!-- Bootstrap Tags Input -->\n          <!--===================================================-->\n          <input id=\"you-tags-input\" type=\"text\" class=\"form-control\" [ngModel]=\"youTags\" name=\"YouTags\" placeholder=\"You Tags\" value=\"{{youTags.join(',')}}\" data-role=\"tagsinput\">\n          <!--===================================================-->\n\n          <hr class=\"new-section-sm bord-no\">\n          <p class=\"text-main text-bold\">Mood (select all that apply)</p>\n          <div class=\"mar-btm\">\n\n            <!--Justified Button Group-->\n            <!--===================================================-->\n\n            <div class=\"mood-type-panel\">\n              <label  *ngFor=\"let option of modes\" [ngClass]=\"{active: isModeSelected(option.value)}\">\n                <input type=\"checkbox\" #mode type=\"checkbox\" [checked]=\"isModeSelected(option.value)\" value=\"{{option.value}}\" (change)=\"modeChanged(mode.checked+','+mode.value)\" >\n                <img src=\"assets/img/{{option.img}}\" alt=\"\">\n                <span>{{option.value}}</span>\n              </label>\n            </div>\n            <!--===================================================-->\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<!--===================================================-->\n<!-- End Bubble Numbers Form Wizard -->\n"

/***/ },

/***/ 852:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\"> <app-add-content-btn></app-add-content-btn> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n\n    <div class=\"row\">\n      <div class=\"row\">\n        <button data-toggle=\"modal\" [attr.data-target]=\"'#'+create_log_modal_id\" class=\"btn btn-info info-btn\"><i class=\"fa fa-add\"></i>Create New Log</button>\n      </div>\n      <div id=\"{{create_log_modal_id}}\" class=\"modal fade log-modal\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Create new log</h4>\n            </div>\n            <div class=\"modal-body\">\n              <table class=\"table table-hover table-vcenter\">\n                <thead>\n                <tr>\n                  <th>\n                    <form (submit)=\"createLog(f)\" #f=\"ngForm\">\n                      <input type=\"text\" class=\"input_text\" ngModel name=\"Name\" placeholder=\"Enter New Log Name\" required>\n                      <button type=\"submit\" class=\"btn btn-info\">Save</button>\n                    </form>\n                  </th>\n                </tr>\n                </thead>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"spacer\"></div>\n      <app-timeline-detail *ngFor=\"let timeline of timelines\" [timeline]=\"timeline\"></app-timeline-detail>\n      <br>\n    </div>\n\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n"

/***/ },

/***/ 853:
/***/ function(module, exports) {

module.exports = "<sa-header>\n    <sa-title></sa-title>\n    <sa-action>\n        <li class=\"pad-rgt\"> <a href=\"javascript:void(0)\" > </a> </li>\n    </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n    <sa-body-content>\n        <app-profile [user]=\"auth.currentUser\" (profileUpdated)=\"profileUpdated($event)\" ></app-profile>\n\n        <app-profile\n                *ngFor=\"let user of managedUsers\"\n                    [user]=\"user\"\n                    [managedProfile]=\"true\"\n                    (profileUpdated)=\"managedUserProfileUpdated($event)\"\n        ></app-profile>\n    </sa-body-content>\n    <sa-body-right-content>\n        <sa-manage-entry></sa-manage-entry>\n    </sa-body-right-content>\n    <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n"

/***/ },

/***/ 854:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\"> <a href=\"\" > Profile </a> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"panel\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Choose Color</h3>\n          </div>\n          <div class=\"panel-body\">\n\n            <div class=\"pad-ver mar-btm\">\n              <div class=\"chose-color\">\n                <label  *ngFor=\"let option of colors\" class=\"btn-{{option}}\">\n                  <input #color type=\"radio\" name=\"myColor\" (change)=\"clicked(option)\">\n                  {{option}}\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </sa-body-content>\n  <sa-body-right-content></sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>"

/***/ },

/***/ 855:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },

/***/ 856:
/***/ function(module, exports) {

module.exports = "<!-- BACKGROUND IMAGE -->\n<!--===================================================-->\n<div id=\"bg-overlay\"></div>\n\n\n<!-- LOGIN FORM -->\n<!--===================================================-->\n<div class=\"cls-content\">\n    <div class=\"cls-content-sm panel\">\n        <div class=\"panel-body\">\n            <div class=\"mar-ver pad-btm\">\n              <h3 class=\"h4 mar-no\">Thanks</h3>\n            </div>\n\n                                <div class=\"mar-ver pad-btm\">\n\n              <p class=\"text-muted\">Please check ({{email}}) for a link to reset your password.</p>\n            </div>\n\n\n\n        </div>\n\n    </div>\n</div>\n<!--===================================================-->\n"

/***/ },

/***/ 857:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\"> <app-add-content-btn></app-add-content-btn> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <div *ngIf=\"post != null\">\n      <div class=\"row\" *ngIf=\"post.Files.length > 0\">\n        <div class=\"col-sm-12\">\n\n          <!--Carousel-->\n          <!--===================================================-->\n          <div id=\"demo-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\n            <!--Indicators-->\n            <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n            <ol class=\"carousel-indicators in pad-btm\">\n              <li class=\"active\" *ngFor=\"let file of post.Files\" data-target=\"#demo-carousel\"></li>\n            </ol>\n\n            <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n\n            <div class=\"carousel-inner text-center\" >\n              <!--Item 1-->\n              <div class=\"item\"  *ngFor=\"let file of post.Files; let i = index\" [ngClass]=\"(i == 0)?'active':''\">\n                <div class=\"thumbnail\"> <img src=\"{{file.FileURL}}\" alt=\"Image\"> </div>\n              </div>\n            </div>\n\n            <!--carousel-control-->\n            <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n            <a *ngIf=\"post.Files.length > 1\" class=\"carousel-control left\" data-slide=\"prev\" href=\"#demo-carousel\"><i class=\"text-light demo-pli-arrow-left icon-4x\"></i></a>\n            <a *ngIf=\"post.Files.length > 1\" class=\"carousel-control right\" data-slide=\"next\" href=\"#demo-carousel\"><i class=\"text-light demo-pli-arrow-right icon-4x\"></i></a>\n            <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n\n          </div>\n          <!--===================================================-->\n          <!--End Carousel-->\n\n\n        </div>\n\n\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"panel panel-trans\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\"><em class=\"fa fa-globe pad-rgt\"></em>{{post.Name}}<span class=\"pull-right text-thin\">{{user.FirstName}} {{user.LastName}}</span> </h3>\n            </div>\n            <div class=\"panel-body\">\n              <p class=\"text-lg pad-btm\">{{post.About}}</p>\n              <p><strong>What else? </strong> {{post.WhatElse}}.</p>\n              <p><strong>Location: </strong> <span class=\"text-primary\">{{(post.Location != 'undefined')?post.Location:''}}</span> <i class=\"fa fa-map-marker pad-ver text-primary\"></i></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n\n        <div class=\"col-sm-6\">\n          <div class=\"panel panel-trans\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">Relationships</h3>\n            </div>\n            <div class=\"panel-body\">\n              <p class=\"mar-top\"><strong>Who: </strong>{{post.WhoTags.split(',').join('#')}}</p>\n              <hr class=\"new-section-xs bord-no\">\n              <div> <span class=\"pull-right text-primary\">{{post.CloseToOthers}}%</span> <span class=\"mar-ver\">{{user.Nickname}} felt close to others</span> </div>\n              <div class=\"progress progress-l mar-top bg-white\">\n                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\"\n                     aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width: post.CloseToOthers + '%'}\">\n                  <span class=\"sr-only\">70% Complete</span>\n                </div>\n                <!--<div class=\"progress-bar bg-primary\" data-toggle=\"tooltip\" [attr.data-original-title]=\"(post.CloseToOthers+'%')\" [ngStyle]=\"{width: post.CloseToOthers}\"></div>-->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"panel panel-trans\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">About Me</h3>\n            </div>\n            <div class=\"panel-body\">\n              <p class=\"mar-top\"><strong>Me: </strong>{{post.YouTags.split(',').join('#')}}</p>\n              <hr class=\"new-section-xs bord-no\">\n              <div class=\"\"> <span class=\"pull-right text-info\">{{post.BestSelfRating}}%</span> <span class=\"mar-ver\">Best me</span> </div>\n              <div class=\"progress progress-l mar-top bg-white\">\n                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\"\n                     aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width: post.BestSelfRating + '%'}\">\n                  <span class=\"sr-only\">70% Complete</span>\n                </div>\n                <!--<div class=\"progress-bar bg-info\" data-toggle=\"tooltip\" data-original-title=\"95%\" [ngStyle]=\"{width: post.BestSelfRating}\"></div>-->\n              </div>\n              <hr class=\"new-section-xs bord-no\">\n              <div class=\"btn-group-justified cutoms\" *ngIf=\"post.Mode != ''\">\n                <a *ngFor=\"let option of post.Mode.split(',')\" href=\"javascript:void(0)\" data-toggle=\"button\" class=\"btn btn-md btn-active-highlight pad-top\">\n                  <img class=\"img-sm\" src=\"assets/img/emoji-{{option}}.png\" alt=\"thumbs\">\n                  <p>{{option}}</p>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry (EntryUpdated)=\"updatePost($event)\"></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n\n"

/***/ },

/***/ 858:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"editMode && loggedInUsrCanEdit()\" class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"panel\">\n\n      <form id=\"demo-bvd-notempty\" action=\"#\" class=\"form-horizontal\" (submit)=\"createProfile(f)\" #f=\"ngForm\" [ngClass]=\"{'form-busy': formBusy == true}\">\n        <div class=\"panel-heading\">\n          <div class=\"panel-control\">\n            <button type=\"submit\" class=\"demo-panel-ref-btn btn btn-default\" data-target=\"#demo-panel-ref\" data-toggle=\"panel-overlay\"> <i class=\"fa fa-share fa-fw\"></i> {{getAction()}} </button>\n          </div>\n          <h3 class=\"panel-title\">{{getTitle()}}</h3>\n        </div>\n\n        <div class=\"panel-body\">\n          <div class=\"text-center pad-ver\">\n            <figure (click)=\"chooseFile($event)\">\n              <img alt=\"Avatar\" class=\"img-lg img-circle img-border-aquamarine mar-btm\" [src]=\"(selectedThumbnail != '')?selectedThumbnail:((user.ImageURL == '' || user.ImageURL == undefined)?appService.default_user_profile_pic:user.ImageURL)\">\n            </figure>\n            <p class=\"text-sm\">Add photo <input id=\"{{photo_chooser_id}}\" style=\"display: none;\" type=\"file\" accept=\".jpg\" (change)=\"filesSelected($event)\"></p>\n          </div>\n          <br>\n\n          <div class=\"new-account-section\" *ngIf=\"newAccount\">\n            <p class=\"text-main text-bold\">Account Info</p>\n            <input type=\"email\" placeholder=\"Email Address\"  [ngModel]=\"newUser.email\" required=\"required\" name=\"email\" class=\"form-control input-lg\">\n            <hr class=\"new-section-xs bord-no\">\n            <input type=\"text\" placeholder=\"Password\"  [ngModel]=\"newUser.password\" required=\"required\" name=\"password\" class=\"form-control input-lg\">\n            <hr class=\"new-section-xs bord-no\">\n          </div>\n          <p class=\"text-main text-bold\">Name</p>\n          <input type=\"text\" placeholder=\"First name\" class=\"form-control input-lg\" [ngModel]=\"user.FirstName\" name=\"FirstName\" required>\n          <br>\n          <input type=\"text\" placeholder=\"Last name\" class=\"form-control input-lg\"  [ngModel]=\"user.LastName\" name=\"LastName\" required>\n          <br>\n          <!--                <hr class=\"new-section-xs bord-no\"> -->\n          <input type=\"text\" placeholder=\"Profile name / nickname\"  [ngModel]=\"user.NickName\" required=\"required\" name=\"NickName\" class=\"form-control input-lg\">\n          <hr class=\"new-section-xs bord-no\">\n          <p class=\"text-main text-bold\">Birthday</p>\n\n          <!--Bootstrap Datepicker : Component-->\n          <!--===================================================-->\n          <div id=\"demo-dp-component\">\n            <div class=\"input-group date\">\n              <input required\n                     type=\"text\"\n                     class=\"form-control datepicker\"\n                     [ngModel]=\"user.DateBirthDay\"\n                     name=\"DateBirthDay\">\n              <span class=\"input-group-addon\"><i class=\"demo-pli-calendar-4\"></i></span> </div>\n            <small class=\"text-muted\">Your birthday is used to build your timeline.</small> </div>\n          <!--===================================================-->\n\n          <hr class=\"new-section-xs bord-no\">\n          <p class=\"text-main text-bold\">Location / address</p>\n          <input type=\"text\" placeholder=\" \" class=\"form-control input-lg\"  [ngModel]=\"user.address\" name=\"address\" id=\"demo-is-inputlarge\">\n          <hr class=\"new-section-xs bord-no\">\n          <p class=\"text-main text-bold\">Color</p>\n          <div class=\" mar-btm\">\n            <input type=\"hidden\" [(ngModel)]=\"user.Color\" name=\"Color\">\n            <button type=\"button\" class=\"btn btn-{{user.Color}} fa fa-check pad-all mar-rgt\"> </button>\n            <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" [attr.data-target]=\"'#'+color_picker_modal_id\">Select Color</button>\n          </div>\n        </div>\n      </form>\n      <div id=\"{{color_picker_modal_id}}\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Choose Color</h4>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"chose-color\">\n                <label  *ngFor=\"let option of colors\" class=\"btn-{{option}}\">\n                  <input #color type=\"radio\" value=\"{{option}}\" [(ngModel)]=\"user.Color\" name=\"myColor\" (click)=\"colorPicked($event)\">\n                  {{option}}\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"editMode == false\" class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"panel\">\n      <div class=\"panel-head profile-head\">\n        <h3>Profile</h3>\n        <div class=\"panel-control\">\n\n          <!-- Todo:Decide how to check who is managing this user. -->\n          <span>Managed by {{user.ManagedByUserName}}</span>\n          <button *ngIf=\"loggedInUsrCanEdit()\" class=\"demo-panel-ref-btn btn btn-default\" type=\"button\" (click)=\"enterEditMode()\"> <i class=\"fa fa-pencil fa-fw\"></i> Edit </button>\n        </div>\n\n      </div>\n      <div class=\"text-center pro-image\">\n        <figure>\n          <img alt=\"Avatar\" class=\"img-lg img-circle img-border-aquamarine mar-btm\" [src]=\"(selectedThumbnail != '')?selectedThumbnail:((user.ImageURL == '')?appService.default_user_profile_pic:user.ImageURL)\">\n        </figure>\n      </div>\n      <div class=\"text-center pro-content\">\n        <label>\n          <strong>Name</strong>\n          <span>{{user.FirstName}} {{user.LastName}}</span>\n        </label>\n        <label>\n          <strong>Nick Name</strong>\n          <span>{{user.NickName}}</span>\n        </label>\n        <label>\n          <strong>Birthday</strong>\n          <span>{{user.DateBirthDay}}</span>\n        </label>\n        <label>\n          <strong>Location</strong>\n          <span>{{user.address}}</span>\n        </label>\n        <label>\n          <strong>Color</strong>\n          <span class=\"color-box btn-{{user.Color}}\"></span>\n        </label>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 859:
/***/ function(module, exports) {

module.exports = "\n<!-- BACKGROUND IMAGE -->\n<!--===================================================-->\n<div id=\"bg-overlay\"></div>\n\n\n<!-- REGISTRATION FORM -->\n<!--===================================================-->\n<div class=\"cls-content\">\n    <div class=\"cls-content-sm panel\">\n        <div class=\"panel-body\">\n            <div class=\"mar-ver pad-btm\">\n                <h3 class=\"h4 mar-no\">Welcome to Riza!</h3>\n                <p class=\"text-muted mar-top\">Create an account to start your own personal and family log or join an existing Riza community. </p>\n            </div>\n            <form action=\"pages-login.html\" (ngSubmit)=\"registerUser(f)\" #f=\"ngForm\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" value=\"newuser6@gmail.com\" placeholder=\"E-mail\" name=\"email\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"pass\" name=\"password\" value=\"111\" placeholder=\"Create password\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"passagain\" name=\"confirmpass\" value=\"111\" placeholder=\"Re-type password\" required>\n                        </div>\n                    </div>\n                </div>\n                     <div class=\"mar-ver text-left text-sm\">\n                       <i>The fine print: by creating an account, you agree to our <a href=\"#\" class=\"btn-link\">Terms and Conditions.</a></i>\n                     </div>\n                <button class=\"btn btn-primary btn-block\" type=\"submit\">Register</button>\n            </form>\n        </div>\n        <p style=\"color:red; text-align:center;\">{{errors}}</p>\n        <div class=\"pad-all\">\n            Already have an account ? <a routerLink=\"/login\" class=\"btn-link mar-rgt\">Sign In</a>\n        </div>\n    </div>\n</div>\n<!--===================================================-->\n"

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = "<div class=\"col-lg-6\">\n  <div class=\"panel\">\n    <div class=\"panel-heading\">\n      <div class=\"panel-control\">\n        <ul class=\"pager pager-rounded\">\n          <a routerLink=\"/log/{{timeline.Id}}/invite-users\" id=\"demo-btn-addrow\" class=\"btn\"><i\n                  class=\"fa fa-plus text-info\"></i></a>\n        </ul>\n      </div>\n      <h3 class=\"panel-title\">{{timeline.Name}}<span class=\"text-sm text-muted mar-lft\"> Admin: {{timeline.Users[0].Nickname}}</span>\n        <button data-toggle=\"modal\" [attr.data-target]=\"'#'+edit_log_modal_id\" class=\"btn\"><i class=\"fa fa-pencil text-info\"></i></button>\n      </h3>\n\n    </div>\n\n\n    <!--Hover Rows-->\n    <!--===================================================-->\n    <div class=\"panel-body\">\n\n      <table class=\"table table-hover table-vcenter\">\n        <thead>\n        <tr>\n          <th class=\"mins-width\">Image</th>\n          <th>Name</th>\n          <th class=\"text-center\">Profile managed by</th>\n          <th class=\"text-center\">Profile</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let user of timeline.Users\">\n          <td class=\"text-center\"><img class=\"img-xs img-circle\"\n                                       [src]=\"(user.ImageURL == undefined || user.ImageURL == '')?app.default_user_profile_pic:user.ImageURL\"\n                                       alt=\"Profile picture\"></td>\n          <td>\n            <span class=\"text-main text-semibold\">{{user.FirstName}} {{user.LastName}}</span>\n          </td>\n          <td class=\"text-center\"><span\n                  class=\"text-muted text-semibold\">{{user.FirstName}}</span></td>\n          <td class=\"text-center\">\n            <span *ngIf=\"currentUserCanEditThis(user)\" (click)=\"editUser(user)\" class=\"link text-info text-semibold\">Edit</span>\n            <span *ngIf=\"currentUserCanDeleteThis(user)\" class=\"link text-info text-semibold\" (click)=\"removeUser(user.UserId)\">Del</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <!--===================================================-->\n    <!--End Hover Rows-->\n\n  </div>\n  <div id=\"{{edit_log_modal_id}}\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Create new log</h4>\n        </div>\n        <div class=\"modal-body\">\n          <table class=\"table table-hover table-vcenter\">\n            <thead>\n            <tr>\n              <th>\n                <form (submit)=\"updateLog(f)\" #f=\"ngForm\">\n                  <input type=\"text\" class=\"input_text\" [ngModel]=\"timeline.Name\" name=\"Name\" placeholder=\"Enter New Log Name Here..\" required>\n                  <button type=\"submit\" class=\"btn btn-info\">Save</button>\n                </form>\n              </th>\n            </tr>\n            </thead>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <!--<span class=\"refresh-span\"><i class=\"fa fa-refresh fa-spin\"></i></span>-->\n  <sa-action>\n    <li class=\"pad-rgt\"> <app-add-content-btn></app-add-content-btn> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <div class=\"row\">\n      <app-log [timeline]=\"timeline\"></app-log>\n    </div>\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry #manageEntryComponent\n                     (EntryCreated)=\"timelineUpdated($event)\"\n                     (EntryUpdated)=\"timelineUpdated($event)\"\n            [seletedTimelines]=\"(timeline.Id == '')?[]:[timeline.Id]\"></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n\n"

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = "<sa-header>\n  <sa-title></sa-title>\n  <sa-action>\n    <li class=\"pad-rgt\"> <a href=\"javascript:void(0)\" > Profile </a> </li>\n  </sa-action>\n</sa-header>\n<!--===================================================-->\n<!--END NAVBAR-->\n\n<sa-body>\n  <sa-body-content>\n    <app-profile [user]=\"user\"></app-profile>\n  </sa-body-content>\n  <sa-body-right-content>\n    <sa-manage-entry></sa-manage-entry>\n  </sa-body-right-content>\n  <sa-aside></sa-aside>\n</sa-body>\n<!-- FOOTER -->\n<!--===================================================-->\n<sa-footer></sa-footer>\n"

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserStuff; });



/**
 * Created by officeaccount on 13/02/2017.
 */
var UserStuff = (function () {
    function UserStuff(profile, timelines, managedUsers) {
        if (profile === void 0) { profile = null; }
        if (timelines === void 0) { timelines = []; }
        if (managedUsers === void 0) { managedUsers = []; }
        this.profile = null;
        this.timelines = [];
        this.managedUsers = [];
        var app = new __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]();
        this.profile = app.map(profile, new __WEBPACK_IMPORTED_MODULE_0__User__["a" /* User */]());
        this.timelines = (timelines == null || timelines == undefined) ? [] : timelines;
        this.managedUsers = this.postProcessManagedUsers(app.mapCollection(managedUsers, new __WEBPACK_IMPORTED_MODULE_0__User__["a" /* User */]()));
    }
    UserStuff.prototype.postProcessManagedUsers = function (users) {
        var updatedUsers = [];
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            if (user.ManagedByUserId == this.profile.UserId) {
                user.ManagedByUserName = this.profile.FirstName + ' ' + this.profile.LastName;
                user.ManagedByUserNickName = this.profile.ManagedByUserNickName;
            }
            updatedUsers.push(user);
        }
        return updatedUsers;
    };
    UserStuff.prototype.updateManagedUser = function (user) {
        var managedUsers = [];
        for (var _i = 0, _a = this.managedUsers; _i < _a.length; _i++) {
            var managedUser = _a[_i];
            if (managedUser.UserId == user.UserId) {
                managedUser = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](user);
            }
            managedUsers.push(managedUser);
        }
        this.managedUsers = managedUsers;
        return this;
    };
    return UserStuff;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/UserStuff.js.map

/***/ }

},[1130]);
//# sourceMappingURL=main.bundle.map