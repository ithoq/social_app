import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {Response} from "@angular/http";
import {TimelineService} from "../../../services/timeline.service";
import {AppService} from "../../../app.service";
import {UsersService} from "../../../services/users.service";
import {UserStuff} from "../../../models/UserStuff";

@Component({
  selector: 'sa-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public loadingUserStuff:boolean;
  public timelines:any;
  constructor(
      public auth: AuthService,
      private appRouter: Router,
      public timelineService:TimelineService,
      public app:AppService,
      public usersService:UsersService
  ) {}

  ngOnInit() {
    this.timelineService.setUserTimelines(this.auth.getUser().timelines);
  }

  refreshTimelines(){
    this.loadingUserStuff = true;
    this.usersService.getUserTimelinesAndStuff().subscribe((data:Response)=>{
      let mapedData:any = data.json().payload;
      let userStuff = new UserStuff(mapedData.User, mapedData.Timelines, mapedData.ManagedUsers);
      this.timelineService.setUserTimelines(userStuff.timelines);
      this.auth.setUser(JSON.stringify(userStuff));
      this.loadingUserStuff = false;
    });
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
