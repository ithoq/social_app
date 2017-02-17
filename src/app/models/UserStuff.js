"use strict";
var User_1 = require("./User");
var app_service_1 = require("../app.service");
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
        var app = new app_service_1.AppService();
        this.profile = app.map(profile, new User_1.User());
        this.timelines = timelines;
        this.managedUsers = app.mapCollection(managedUsers, new User_1.User());
    }
    return UserStuff;
}());
exports.UserStuff = UserStuff;
//# sourceMappingURL=UserStuff.js.map