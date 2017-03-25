import { User } from "./User";
import { AppService } from "../app.service";
import * as _ from 'lodash';
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
        this.managedUsers = this.postProcessManagedUsers(app.mapCollection(managedUsers, new User()));
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
                managedUser = _.cloneDeep(user);
            }
            managedUsers.push(managedUser);
        }
        this.managedUsers = managedUsers;
        return this;
    };
    return UserStuff;
}());
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/models/UserStuff.js.map