// this service is a guard which protect routes from unauthenticated users.
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
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
                this.router.navigate(['/manage-profile']);
        }
        else {
            this.mediumToPostDetailService.setPost(post);
            return true;
        }
    };
    PostDetailGuardService = __decorate([
        core_1.Injectable()
    ], PostDetailGuardService);
    return PostDetailGuardService;
}());
exports.PostDetailGuardService = PostDetailGuardService;
//# sourceMappingURL=post-detail-guard.service.js.map