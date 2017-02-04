"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
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
        core_1.Component({
            selector: 'app-create-log',
            templateUrl: './create-log.component.html',
            styleUrls: ['./create-log.component.css']
        })
    ], CreateLogComponent);
    return CreateLogComponent;
}());
exports.CreateLogComponent = CreateLogComponent;
//# sourceMappingURL=create-log.component.js.map