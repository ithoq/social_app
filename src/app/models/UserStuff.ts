import {User} from "./User";
/**
 * Created by officeaccount on 13/02/2017.
 */
export class UserStuff {
    profile:User = null;
    timelines:Array<any> = [];
    managedUsers:Array<User> = [];
    constructor(profile:User = null, timelines:Array<any> = [], managedUsers:Array<User> = []){
        this.profile = profile;
        this.timelines = timelines;
        this.managedUsers = managedUsers;
    }
}
