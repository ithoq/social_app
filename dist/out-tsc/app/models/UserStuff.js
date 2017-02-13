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
        this.profile = profile;
        this.timelines = timelines;
        this.managedUsers = managedUsers;
    }
    return UserStuff;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/models/UserStuff.js.map