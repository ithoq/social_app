import {AppService} from "../app.service";
import {User} from "./User";
/**
 * Created by officeaccount on 02/02/2017.
 */

export class TimelineDetail {
    CreatedByUser:string = '';
    CreatedByUserId: string = '';
    DateCreated: string = '';
    Id: string = '';
    Name:string = '';
    Users:Array<User> = [];
}
