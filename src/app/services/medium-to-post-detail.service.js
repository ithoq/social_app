//this service is used to transfer data from any component to login component
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
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
        core_1.Injectable()
    ], MediumToPostDetailService);
    return MediumToPostDetailService;
}());
exports.MediumToPostDetailService = MediumToPostDetailService;
//# sourceMappingURL=medium-to-post-detail.service.js.map