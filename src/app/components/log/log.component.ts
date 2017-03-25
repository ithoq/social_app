import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MediumToPostDetailService} from "../../services/medium-to-post-detail.service";
import {MediumToManageEntryService} from "../../services/medium-to-manage-entry.service";
import {ManageEntryComponent} from "../manage-entry/manage-entry.component";
import {AuthService} from "../../services/auth.service";
import {TimelineService} from "../../services/timeline.service";
import {AppService} from "../../app.service";
import {HeaderComponent} from "../header/header.component";
import {User} from "../../models/User";
import * as _ from 'lodash';
import {Timeline} from "../../models/Timeline";

@Component({
    selector: 'app-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
    @Input() timeline:Timeline = null;
    public user:any = null;
    public refreshingLog:boolean = false;
    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private mediumToPostDetail:MediumToPostDetailService,
        private mediumToManageEntry:MediumToManageEntryService,
        private auth:AuthService,
        public app:AppService,
        public timelineService:TimelineService
    ) {
        this.timeline = new Timeline();
    }

    showDetail(entry:any){
        localStorage.setItem('post', JSON.stringify(entry));
        this.router.navigate(['/post/'+entry.EntryId]);
    }

    modifiedDate(date){
        return date.split(' ')[0];
    }

    timelineUpdated(event){
        this.refreshLog();
    }

    pullToRefresh(event){
        this.refreshingLog = true;
        this.refreshLog().then(()=>{
            this.refreshingLog = false;
        },(error)=>{
            this.refreshingLog = false;
            this.app.show_error_popup(error);
        });
    }

    refreshLog(){
        let auth = this.auth;
        let timelineService = this.timelineService;
        let timelineId = this.timeline.Id;
        return new Promise((resolve, reject)=>{
            if(timelineId == ''){
                reject('timeline id is required');
            }else{
                timelineService.get(timelineId, auth.getUser().profile.UserId).subscribe(
                    (data:any)=> {
                        this.timeline = this.app.map(data.json().payload, new Timeline());
                        this.timeline.Entries = (this.timeline.Entries == null)?[]:this.timeline.Entries;
                        this.timelineService.pushTimelineWithEntires(this.timeline);
                        resolve(this.timeline);
                    },
                    (error)=>{
                        reject('Some thing went wrong with the server');
                    }
                );
            }
        });
    }

    getEntryTypes(givenTypes:string){
        let foundTypes = [];
        for(let givenType of givenTypes.split(',')){
            let givenTypeObj = this.app.find_obj_by_prop('value',givenType,this.app.entryContentCategories);
            if(givenTypeObj != null){
                foundTypes.push(givenTypeObj)
            }
        }
        return foundTypes;
    }

    findUserByIdInTimelineUsers(userId:string){
        if(userId == this.auth.getUser().profile.UserId) {
            return this.auth.getUser().profile;
        }

        for(var user of this.timeline.Users){
            if(user.UserId == userId){
                return user;
            }
        }
        return null;
    }

    showUserProfile(UserId:string){
        let user:User = this.findUserByIdInTimelineUsers(UserId);
        if(user != null){
            let clonedUser:User = _.cloneDeep(user); //TODO: search the actual user. (may be api is not available yet)
            clonedUser.UserId = UserId;
            localStorage.setItem('viewUserProfile',JSON.stringify(clonedUser));
            this.router.navigate(['/profile/'+UserId]);
        }else{
            this.app.show_error_popup('user not found.');
        }
    }
    ngOnInit() {
        this.user = this.auth.getUser().profile;
    }
}
