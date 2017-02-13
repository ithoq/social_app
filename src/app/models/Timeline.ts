import {Post} from "./Post";
import {User} from "./User";
/**
 * Created by officeaccount on 13/02/2017.
 */
export class Timeline {
    CreatedByUser:string = '';
    CreatedByUserId: string = '';
    DateCreated: string = '';
    Id: string = '';
    Name:string = '';
    Entries:Array<Post> = [];
    Users:Array<User> = [];
}
