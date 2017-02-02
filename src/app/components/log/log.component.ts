import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MediumToPostDetailService} from "../../services/medium-to-post-detail.service";
import {MediumToManageEntryService} from "../../services/medium-to-manage-entry.service";
import {ManageEntryComponent} from "../manage-entry/manage-entry.component";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
    @ViewChild(ManageEntryComponent) manageEntryComponent;
    public timeline = null;
    public user:any = null;
    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private mediumToPostDetail:MediumToPostDetailService,
        private mediumToManageEntry:MediumToManageEntryService,
        private auth:AuthService
    ) {}

    showDetail(entry:any){
        this.mediumToPostDetail.setPost(entry);
        this.router.navigate(['/post/'+entry.EntryId]);
    }

    modifiedDate(date){
        return date.split(' ')[0];
    }
    ngOnInit() {
        this.route.data
            .subscribe((data: { log: any }) => {
                if(data.log == null){ this.router.navigate(['/log/custom']); }
                this.timeline = data.log.json().payload;
                this.manageEntryComponent.setSelectedTimelines([this.timeline.Id]); //seting up timeline id for auto select in add entry component
            }, (error)=>{});
        this.user = this.auth.getUser().profile;
    }
}
