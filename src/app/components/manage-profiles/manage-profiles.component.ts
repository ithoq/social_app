import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AppService} from "../../app.service";
import {User} from "../../models/User";
import * as _ from 'lodash';
import {UserStuff} from "../../models/UserStuff";
import {NgForm} from "@angular/forms";
import {Response} from "@angular/http";
import {UsersService} from "../../services/users.service";

declare var $:any;

@Component({
    selector: 'sa-create-profile',
    templateUrl: './manage-profiles.component.html',
    styleUrls: ['./manage-profiles.component.css']
})
export class ManageProfilesComponent implements OnInit {
    public user:any = null;
    public selectedImage:any = null;
    public selectedThumbnail:any = '';
    public formBusy:boolean = false;
    public editMode:boolean = false;
    public managedUsers:Array<User> = [];
    constructor(private auth:AuthService, public appService:AppService, public userService:UsersService) {}

    updateCredentials(f:NgForm){
        this.userService.updateSettings(false, this.auth.currentUser.UserId, f.value).subscribe((data:Response)=>{
            this.appService.show_success_popup('Credentials updated successfully');
        });
    }
    profileUpdated(event){
        let oldUserStuff = this.auth.getUser();
        let userStuff = new UserStuff(event.user, oldUserStuff.timelines, oldUserStuff.managedUsers);
        this.auth.setUser(JSON.stringify(userStuff));
        this.managedUsers = userStuff.managedUsers;
    }

    managedUserProfileUpdated(event){
        let user:any = this.auth.getUser();
        let userStuff:UserStuff = new UserStuff(user.profile, user.timelines, user.managedUsers);
        this.auth.setUser(JSON.stringify(userStuff.updateManagedUser(event.user)));
    }

    ngOnInit() {
        this.managedUsers = _.cloneDeep(this.auth.getUser().managedUsers);
    }
}
