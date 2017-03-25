import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UsersService} from "../../services/users.service";
import {TimelineService} from "../../services/timeline.service";
import {EntryService} from "../../services/entry.service";
import {Router} from "@angular/router";
import {ProfileManagementService} from "../../services/profile-management.service";
import {Http, Response} from "@angular/http";
import {AppService} from "../../app.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  public editMode:boolean = true;
  public formBusy:boolean = false;
  constructor(
      private userService:UsersService,
      private timelineService:TimelineService,
      private entrySerice:EntryService,
      public auth:AuthService,
      private router:Router,
      private profileManagementService:ProfileManagementService,
      private http:Http,
      public appService:AppService
  ) { }

  profileUpdating(event){
    this.formBusy = true;
  }

  profileUpdated(event){
    let inputData = event.user;
    let userStuff = this.auth.getUser();
    userStuff.profile = event.user;
    this.auth.setUser(JSON.stringify(userStuff));
    if(this.auth.getUser().timelines.length == 0){
      this.timelineService.create({Name:'My Private Timeline'}).subscribe((data:Response)=>{

        let user = this.auth.getUser();
        user.timelines = [{Id:data.json().payload.TimelineId,Name:'My Private Timeline'}];
        this.auth.setUser(JSON.stringify(user));

        let entry = new Post();
        entry.DateStart = inputData.DateBirthDay;
        entry.Type = 'Celebration';
        entry.Name = 'Birthday';
        entry['TimelineId'] = data.json().payload.TimelineId;
        //adding the first entry
        let querystr = "";
        for(let propertyName in entry) {
          querystr+= '&'+propertyName+'='+entry[propertyName];
        }
        this.http.get(this.appService.api_end_point+'entryAdd/'+this.auth.get_session_token()+"/"+querystr).subscribe((data:Response)=>{
          this.formBusy = false;
          this.router.navigate(['/log/'+this.auth.getUser().timelines[0].Id]);
        });
      },(error) => {
        this.formBusy = false;
      });
    }else{
      this.formBusy = false;
      this.appService.show_error_popup();
    }
  }

  someThingWentWrong(event){
    this.appService.show_error_popup(event.error.msg);
    this.formBusy = false;
  }

  ngOnInit() {

  }

}
