import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../app.service";
import {AuthService} from "./auth.service";

@Injectable()
export class UsersService {

    constructor(private http:Http, private appService:AppService, private auth:AuthService) { }

    register(user){
        return this.http.get(this.appService.api_end_point+'userRegister/'+this.auth.get_session_token()+'/&Email='+user.email+'&Username='+user.username+'&Pass='+user.password+'');
    }

    
    updateSettings(userId:string, settings:any, image=null){
        let querystr = "";
        for(let propertyName in settings) {
            querystr+= '&'+propertyName+'='+settings[propertyName];
        }
        console.log(querystr);
        return this.http.post(this.appService.api_end_point+'userSettings/'+this.auth.get_session_token()+"/&UserId="+userId+'/'+querystr, image);
    }

    searchByKeyword(keyword = "")
    {
        return this.http.get(this.appService.api_end_point+'userSearch/'+this.auth.get_session_token()+"/&SearchFor="+keyword);
    }

}
