import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../app.service";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class TimelineService {

    public userTimelines = [];
    constructor(private http:Http, private appService:AppService, private auth:AuthService) {
        this.setUserTimelines(this.auth.getUser().timelines);
    }

  create(data:any){
      let querystr = "";
      for(let propertyName in data) {
          querystr+= '&'+propertyName+'='+data[propertyName];
      }
      return this.http.get(this.appService.api_end_point+'timelineCreate/'+this.auth.get_session_token()+"/"+querystr);
  }

  get(timeline_id:any, user_id:any){
      return this.http.get(this.appService.api_end_point+'userTimeline/'+this.auth.get_session_token()+"/&TimelineId="+timeline_id+"&UserId="+user_id);
  }

  getUserTimelines(){
      return this.http.get(this.appService.api_end_point+'timelineDetails/'+this.auth.get_session_token()+"/");
  }

  setUserTimelines(timelines){
      this.userTimelines = timelines;
  }
}
