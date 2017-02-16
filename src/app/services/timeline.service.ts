import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../app.service";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Timeline} from "../models/Timeline";
import {Post} from "../models/Post";
declare var LZString:any;
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

  get(timeline_id:any, user_id:any = ''){
      return this.http.get(this.appService.api_end_point+'userTimeline/'+this.auth.get_session_token()+"/&TimelineId="+timeline_id);
  }

  getUserTimelines(){
      return this.http.get(this.appService.api_end_point+'timelineDetails/'+this.auth.get_session_token()+"/");
  }

  setUserTimelines(timelines){
      this.userTimelines = timelines;
  }

    inviteUsers(timelineId, users,emails){
        return this.http.get(this.appService.api_end_point+'timelineInviteUsers/'+this.auth.get_session_token()+"/&TimelineId="+timelineId+"&InviteUsers="+users+"&InviteEmails="+emails);
    }

    removeUsers(timelineId, users){
        return this.http.get(this.appService.api_end_point+'timelineInviteUsers/'+this.auth.get_session_token()+"/&TimelineId="+timelineId+"&RemoveUsers="+users);
    }

    update(timelineId:string, data:any){
        let querystr = "";
        for(let propertyName in data) {
            querystr+= '&'+propertyName+'='+data[propertyName];
        }
        return this.http.get(this.appService.api_end_point+'timelineUpdate/'+this.auth.get_session_token()+"/&TimelineId="+timelineId+querystr);
    }

    getAllTimelinesWithEntries(){
        let timelines = JSON.parse(LZString.decompress(localStorage.getItem('allTimelinesWithEntries')));
        return (timelines == null)?[]:timelines;
    }

    pushTimelineWithEntires(timeline:Timeline){
        let existingTimelines:Array<Timeline> = this.getAllTimelinesWithEntries();
        existingTimelines = this.appService.remove_obj_by_property('Id',timeline.Id,existingTimelines);
        existingTimelines.push(timeline);
        localStorage.setItem('allTimelinesWithEntries',LZString.compress(JSON.stringify(existingTimelines)));
        return existingTimelines;
    }

    pushEntryInTimeline(timelineId:string, entry:Post){
        let timeline:Timeline = this.appService.find_obj_by_prop('Id',timelineId,this.getAllTimelinesWithEntries());
        if(timeline != null){
            let entries:Array<Post> = timeline.Entries;
            entries = this.appService.remove_obj_by_property('EntryId',entry.EntryId,timeline.Entries);
            entries.push(entry);
            timeline.Entries = entries;
            this.pushTimelineWithEntires(timeline);
        }
        return this.getAllTimelinesWithEntries();
    }

    removeEntriesFromTimelines(timlines:Array<string>,givenEntries:Array<string>){
        let timelines:Array<Timeline> = this.getAllTimelinesWithEntries();
        let updatedTimelines:Array<Timeline> = [];
        for(let timeline of timelines){
            let entries = [];
            for(let timelineEntry of timeline.Entries){
                for(let givenEntry of givenEntries){
                    if(timelineEntry.EntryId != givenEntry){
                        entries.push(timelineEntry);
                    }
                }
            }
            timeline.Entries = entries;
            updatedTimelines.push(timeline);
        }
        localStorage.setItem('allTimelinesWithEntries', LZString.compress(JSON.stringify(updatedTimelines)));
        return updatedTimelines;
    }
}
