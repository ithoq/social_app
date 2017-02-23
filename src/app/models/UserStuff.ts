import {User} from "./User";
import {AppService} from "../app.service";
import * as _ from 'lodash';
/**
 * Created by officeaccount on 13/02/2017.
 */
export class UserStuff {
    profile:User = null;
    timelines:Array<any> = [];
    managedUsers:Array<User> = [];
    constructor(profile:User = null, timelines:Array<any> = [], managedUsers:Array<User> = []){
        let app = new AppService();

        this.profile = app.map(profile, new User());
        this.timelines = (timelines == null || timelines == undefined)?[]:timelines;
        this.managedUsers = app.mapCollection(managedUsers,new User());
    }

    updateManagedUser(user:User){
        let managedUsers:Array<User> = [];
        for(let managedUser of this.managedUsers){
            if(managedUser.UserId == user.UserId) {
                managedUser = _.cloneDeep(user);
            }
            managedUsers.push(managedUser);
        }
        this.managedUsers = managedUsers;
        return this;
    }
}
