import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../../app.service";
import {HeaderComponent} from "../header/header.component";
import {ManageEntryComponent} from "../manage-entry/manage-entry.component";
import {AuthService} from "../../services/auth.service";
import {Timeline} from "../../models/Timeline";
import {TimelineService} from "../../services/timeline.service";
declare var LZString:any;
@Component({
  selector: 'app-view-log',
  templateUrl: './view-log.component.html',
  styleUrls: ['./view-log.component.css']
})
export class ViewLogComponent implements OnInit {
  @ViewChild(ManageEntryComponent) manageEntryComponent;
  @ViewChild(HeaderComponent) headerComponent;
  public timeline:Timeline = null;
  constructor(
      public route:ActivatedRoute,
      public router:Router,
      public app:AppService,
      public auth:AuthService,
      public timelineService:TimelineService
  ) {
    this.timeline = new Timeline();
  }

  timelineUpdated(event){
      if(this.timeline.Id != '')
        this.timeline = this.app.find_obj_by_prop('Id',this.timeline.Id,this.timelineService.getAllTimelinesWithEntries());
  }

  ngOnInit() {
    this.route.data
        .subscribe((data: { log: any }) => {
          if(data.log == null){
              this.router.navigate(['/log/'+this.auth.getUser().timelines[0].Id]);
          }else{
              //TODO: users array is not returned by the api yet.
              this.timeline = data.log;
              console.log(this.timeline);
              this.headerComponent.title = this.timeline.Name;
          }
        }, (error)=>{});
  }

}
