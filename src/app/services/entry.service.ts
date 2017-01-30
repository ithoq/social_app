import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../app.service";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

declare var $:any;
@Injectable()
export class EntryService {

    constructor(private http:Http,  private appService:AppService, private auth:AuthService) { }

    addEntry(entry, files={}){
        let querystr = "";
        for(let propertyName in entry) {
            querystr+= '&'+propertyName+'='+entry[propertyName];
        }
        return this.http.post(this.appService.api_end_point+'entryAdd/'+this.auth.get_session_token()+"/"+querystr, files);
    }
    updateEntry(entry_id, entry){
        let querystr = "";
        for(let propertyName in entry) {
            querystr+= '&'+propertyName+'='+entry[propertyName];
        }
        return this.http.get(this.appService.api_end_point+'entryUpdate/'+this.auth.get_session_token()+"/&EntryId="+entry_id+querystr);
    }

}
