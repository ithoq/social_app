import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Response, Http} from "@angular/http";
import {TimelineService} from "../../services/timeline.service";
import {EntryService} from "../../services/entry.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ProfileManagementService} from "../../services/profile-management.service";
import {AppService} from "../../app.service";
import {Post} from "../../models/Post";

declare var $:any;

@Component({
  selector: 'sa-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
    public user:any = null;
  constructor(
      private userService:UsersService,
      private timelineService:TimelineService,
      private entrySerice:EntryService,
      private auth:AuthService,
      private router:Router,
      private profileManagementService:ProfileManagementService,
      private http:Http,
      private appService:AppService
  ) {

      let profileData = this.profileManagementService.getProfileData();
      if(profileData != null){
          this.user = profileData;
          this.user.Color = this.profileManagementService.getColor();
      }else{

          this.user = this.auth.getUser().profile;
      }

  }

  getTitle(){
    if(this.auth.getUser().timelines == null)
      return 'Create';
    return 'Edit';
  }

  getAction(){
    if(this.auth.getUser().timelines == null)
      return 'Add';
    return 'Save';
  }

  createProfile(form:NgForm){
        let inputData = form.value;
        inputData.DateBirthDay = $('.datepicker').val();
        this.userService.updateSettings(inputData).subscribe((data:Response)=>{
            this.auth.setUser(JSON.stringify({profile:data.json().payload.User,timelines:data.json().payload.Timelines}));
            if(this.auth.getUser().timelines == null){
                this.timelineService.create({Name:'My Private Timeline'}).subscribe((data:Response)=>{

                  let user = this.auth.getUser();
                  user.timelines = [{Id:data.json().payload.TimelineId,Name:'My Private Timeline'}];
                  this.auth.setUser(JSON.stringify(user));

                  let entry = new Post();
                  entry.DateStart = inputData.DateBirthDay;
                  entry.Type = 'Celebration';
                  entry.Name = 'Birthday added';
                  entry['TimelineId'] = data.json().payload.TimelineId;

                    //adding the first entry
                    let querystr = "";
                    for(let propertyName in entry) {
                        querystr+= '&'+propertyName+'='+entry[propertyName];
                    }
                    console.log(querystr);
                    this.http.get(this.appService.api_end_point+'entryAdd/'+this.auth.get_session_token()+"/"+querystr).subscribe((data:Response)=>{
                        this.router.navigate(['/log/'+this.auth.getUser().timelines[0].Id]);
                    });
                },(error) => { });
            }else{
                this.router.navigate(['/log/'+this.auth.getUser().timelines[0].Id]);
            }

        },(error) => {

        });
  }

  chooseColor(form:NgForm){
      this.profileManagementService.setProfileData(form.value);
      this.profileManagementService.setAllowColorChooser(true);
      this.router.navigate(['pick-color']);
  }
  ngOnInit() {
      console.log('in the manage component')
  }

  ngAfterViewInit(){
      $('.datepicker').datepicker();
  }

}
