import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MediumToPostDetailService} from "../../services/medium-to-post-detail.service";
import {MediumToManageEntryService} from "../../services/medium-to-manage-entry.service";
import {ManageEntryComponent} from "../manage-entry/manage-entry.component";
import {AuthService} from "../../services/auth.service";
import {TimelineService} from "../../services/timeline.service";
import {AppService} from "../../app.service";
import {HeaderComponent} from "../header/header.component";

@Component({
    selector: 'app-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
    @ViewChild(ManageEntryComponent) manageEntryComponent;
    @ViewChild(HeaderComponent) headerComponent;
    public timeline = null;
    public user:any = null;
    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private mediumToPostDetail:MediumToPostDetailService,
        private mediumToManageEntry:MediumToManageEntryService,
        private auth:AuthService,
        private timelineService:TimelineService,
        public app:AppService
    ) {}

    showDetail(entry:any){
        this.mediumToPostDetail.setPost(entry);
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
                    console.log(error);
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

    ngOnInit() {
        this.route.data
            .subscribe((data: { log: any }) => {
                if(data.log == null){ this.router.navigate(['/log/custom']); }
                this.timeline = data.log.json().payload;
                console.log(this.timeline);
                this.headerComponent.title = this.timeline.Name;
                this.manageEntryComponent.setSelectedTimelines([this.timeline.Id]); //seting up timeline id for auto select in add entry component
            }, (error)=>{});
        this.user = this.auth.getUser().profile;
    }
}
