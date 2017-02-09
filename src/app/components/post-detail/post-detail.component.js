"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var add_content_btn_component_1 = require("../add-content-btn/add-content-btn.component");
var header_component_1 = require("../header/header.component");
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
        console.log(event);
        var post = this.post;
        for (var property in event.data) {
            post[property] = event.data[property];
        }
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
        core_1.ViewChild(add_content_btn_component_1.AddContentBtnComponent)
    ], PostDetailComponent.prototype, "addContentBtnComponent");
    __decorate([
        core_1.ViewChild(header_component_1.HeaderComponent)
    ], PostDetailComponent.prototype, "headerComponent");
    PostDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-post-detail',
            templateUrl: './post-detail.component.html',
            styleUrls: ['./post-detail.component.css']
        })
    ], PostDetailComponent);
    return PostDetailComponent;
}());
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=post-detail.component.js.map