import {Component, OnInit, ViewChild} from '@angular/core';
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
    @ViewChild(ManageEntryComponent) manageEntryComponent;
    @ViewChild(HeaderComponent) headerComponent;
    public timeline:Timeline = null;
    public user:any = null;
    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private mediumToPostDetail:MediumToPostDetailService,
        private mediumToManageEntry:MediumToManageEntryService,
        private auth:AuthService,
        private timelineService:TimelineService,
        public app:AppService
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

    refreshLog(){
        let auth = this.auth;
        let timelineService = this.timelineService;
        let timelineId = this.timeline.Id;
        return new Promise((resolve, reject)=>{
            timelineService.get(timelineId, auth.getUser().profile.UserId).subscribe(
                (data:any)=> {
                    this.timeline = data.json().payload;
                    resolve(true);
                },
                (error)=>{
                    reject(false);
                }
            );
        });
    }

    getEntryTypes(givenTypes:string){
        let foundTypes = [];
        for(let givenType of givenTypes.split(',')){
            for(let hostedType of this.manageEntryComponent.types){
                if(hostedType.value == givenType)
                    foundTypes.push(hostedType);
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
            alert('user not found.');
        }
    }
    ngOnInit() {
        this.route.data
            .subscribe((data: { log: any }) => {
                if(data.log == null){ this.router.navigate(['/log/custom']); }
                this.timeline = this.app.map(data.log.json().payload, this.timeline);
                this.headerComponent.title = this.timeline.Name;
                this.manageEntryComponent.setSelectedTimelines([this.timeline.Id]); //seting up timeline id for auto select in add entry component
            }, (error)=>{});
        this.user = this.auth.getUser().profile;
    }
}
