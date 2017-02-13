import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AppService} from "../../app.service";

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
    constructor(private auth:AuthService, public appService:AppService) {}

    profileUpdated(event){
        let userStuff = this.auth.getUser();
        userStuff.profile = event.user;
        this.auth.setUser(JSON.stringify(userStuff));
    }

    ngOnInit() {}
}
