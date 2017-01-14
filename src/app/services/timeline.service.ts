import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../app.service";
import {AuthService} from "./auth.service";

@Injectable()
export class TimelineService {

  constructor(private http:Http, private appService:AppService, private auth:AuthService) { }

  create(data:any){
      let querystr = "";
      for(let propertyName in data) {
          querystr+= '&'+propertyName+'='+data[propertyName];
      }
      return this.http.get(this.appService.api_end_point+'timelineCreate/'+this.auth.get_session_token()+"/"+querystr);
  }

}
