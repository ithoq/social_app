import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {TimelineService} from "../../services/timeline.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-manage-logs',
  templateUrl: './manage-logs.component.html',
  styleUrls: ['./manage-logs.component.css']
})
export class ManageLogsComponent implements OnInit {

  private timelines:any = [];
  public user:any;
  constructor(private auth:AuthService, private route:ActivatedRoute, private timelineService:TimelineService) {
    //this.timelines = this.auth.getUser().timelines;
    this.user = this.auth.getUser().profile;
  }


  removeUser(timelineId, userId){
    this.timelineService.removeUsers(timelineId,userId).subscribe((data:Response)=>{
      console.log(timelineId,userId);
      this.timelineService.getUserTimelines().subscribe((data:Response)=>{
          this.timelines=data.json().payload;
      });
    });
  }

  ngOnInit() {
    this.route.data
        .subscribe((data: { logs: any }) => {
          this.timelines = data.logs.json().payload;
        }, (error)=>{});
  }

}
