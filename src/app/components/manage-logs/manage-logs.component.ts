import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TimelineService} from "../../services/timeline.service";
import {Response} from "@angular/http";
import {AppService} from "../../app.service";
import {User} from "../../models/User";
import {NgForm} from "@angular/forms";
import * as _ from 'lodash';
import {TimelineDetail} from "../../models/TimelineDetail";

declare var $:any;
@Component({
  selector: 'app-manage-logs',
  templateUrl: './manage-logs.component.html',
  styleUrls: ['./manage-logs.component.css']
})
export class ManageLogsComponent implements OnInit {

  private timelines:any = [];
  public user:any;
  public create_log_modal_id:string = '';
  constructor(
      public auth:AuthService,
      private route:ActivatedRoute,
      public app:AppService,
      public timelineService:TimelineService,
      public router:Router
  ) {
    //this.timelines = this.auth.getUser().timelines;
    this.user = this.auth.getUser().profile;
  }

  createLog(form:NgForm){
    this.timelineService.create({Name:form.value.Name}).subscribe((data:Response)=>{
      let timelineDetails:TimelineDetail = new TimelineDetail();
      timelineDetails.CreatedByUser = this.auth.currentUser.FirstName+' '+this.auth.currentUser.LastName;
      timelineDetails.CreatedByUserId = this.auth.currentUser.UserId;
      timelineDetails.Id = data.json().payload.TimelineId;
      timelineDetails.Name = form.value.Name;
      timelineDetails.Users = [this.auth.currentUser];

      let currentUser = _.cloneDeep(this.auth.getUser());
      currentUser.timelines.push({Id:timelineDetails.Id,Name:timelineDetails.Name});
      this.timelineService.setUserTimelines(currentUser.timelines);
      this.auth.setUser(JSON.stringify(currentUser));
      this.timelines.push(timelineDetails);
      $('#'+this.create_log_modal_id).modal('hide');
    });
  }

  ngOnInit() {
    this.create_log_modal_id = 'edit-log-'+this.app.unique_id();
    this.route.data
        .subscribe((data: { logs: any }) => {
          this.timelines = data.logs.json().payload;
        }, (error)=>{});
  }

}
