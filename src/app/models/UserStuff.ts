import {User} from "./User";
import {AppService} from "../app.service";
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
        this.timelines = timelines;
        this.managedUsers = app.mapCollection(managedUsers,new User());
    }
}
