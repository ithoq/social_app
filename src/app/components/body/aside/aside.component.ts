import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {Response} from "@angular/http";
import {TimelineService} from "../../../services/timeline.service";
import {AppService} from "../../../app.service";

@Component({
  selector: 'sa-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public user;
  public timelines:any;
  constructor(public auth: AuthService, private appRouter: Router, private timelineService:TimelineService, public app:AppService) {
      this.timelines = this.auth.getUser().timelines;
      this.user = this.auth.getUser().profile;
  }

  ngOnInit() {

  }

  refreshTimelines(){
    this.timelines = this.auth.getUser().timelines;
  }

  logout(){
    this.auth.logout().subscribe(
      (response: Response)=>{
        this.appRouter.navigate(['login']);
      },
      (error)=>{}
    );
  }

}
