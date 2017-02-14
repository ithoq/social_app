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
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { UsersService } from "../../services/users.service";
import { UserStuff } from "../../models/UserStuff";
export var CreateManagedUserComponent = (function () {
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
            var userStuff = new UserStuff(mapedData.User, mapedData.Timelines, mapedData.ManagedUsers);
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
        Component({
            selector: 'app-create-managed-user',
            templateUrl: './create-managed-user.component.html',
            styleUrls: ['./create-managed-user.component.css']
        }), 
        __metadata('design:paramtypes', [Router, AuthService, UsersService])
    ], CreateManagedUserComponent);
    return CreateManagedUserComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/create-managed-user/create-managed-user.component.js.map