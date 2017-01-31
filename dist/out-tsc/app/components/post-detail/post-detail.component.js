var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { MediumToManageEntryService } from "../../services/medium-to-manage-entry.service";
import { AddContentBtnComponent } from "../add-content-btn/add-content-btn.component";
export var PostDetailComponent = (function () {
    function PostDetailComponent(route, router, auth, mediumToManageEntry) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.mediumToManageEntry = mediumToManageEntry;
        this.bestSelfRating = 95;
        this.user = this.auth.getUser().profile;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addContentBtnComponent.content = 'Edit Post';
        this.route.data
            .subscribe(function (data) {
            if (data.post == null) {
                _this.router.navigate(['/log/custom']);
            }
            else {
                _this.post = data.post;
                console.log(_this.post);
                _this.mediumToManageEntry.setPost(data.post);
            }
        }, function (error) { });
    };
    __decorate([
        ViewChild(AddContentBtnComponent), 
        __metadata('design:type', Object)
    ], PostDetailComponent.prototype, "addContentBtnComponent", void 0);
    PostDetailComponent = __decorate([
        Component({
            selector: 'app-post-detail',
            templateUrl: './post-detail.component.html',
            styleUrls: ['./post-detail.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router, AuthService, MediumToManageEntryService])
    ], PostDetailComponent);
    return PostDetailComponent;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/post-detail/post-detail.component.js.map