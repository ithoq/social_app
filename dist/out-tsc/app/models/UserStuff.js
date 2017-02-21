import { User } from "./User";
import { AppService } from "../app.service";
/**
 * Created by officeaccount on 13/02/2017.
 */
export var UserStuff = (function () {
    function UserStuff(profile, timelines, managedUsers) {
        if (profile === void 0) { profile = null; }
        if (timelines === void 0) { timelines = []; }
        if (managedUsers === void 0) { managedUsers = []; }
        this.profile = null;
        this.timelines = [];
        this.managedUsers = [];
        var app = new AppService();
        this.profile = app.map(profile, new User());
        this.timelines = (timelines == null || timelines == undefined) ? [] : timelines;
        this.managedUsers = app.mapCollection(managedUsers, new User());
    }
    return UserStuff;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/models/UserStuff.js.map