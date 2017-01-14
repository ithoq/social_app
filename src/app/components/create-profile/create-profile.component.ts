import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Response} from "@angular/http";
import {TimelineService} from "../../services/timeline.service";
import {EntryService} from "../../services/entry.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ProfileManagementService} from "../../services/profile-management.service";

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
      private profileManagementService:ProfileManagementService
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
        this.userService.updateSettings(form.value).subscribe((data:Response)=>{
            this.auth.setUser(JSON.stringify({profile:data.json().payload.User,timelines:data.json().payload.Timelines}));
            if(this.auth.getUser().timelines == null){
                this.timelineService.create({Name:'My Private Timeline'}).subscribe((data:Response)=>{

                  let user = this.auth.getUser();
                  user.timelines = [{Id:data.json().payload.TimelineId,Name:'My Private Timeline'}];
                  this.auth.setUser(JSON.stringify(user));

                    let entry = {
                        TimelineId:   data.json().payload.TimelineId,
                        DateStart: form.value.DateBirthDay,
                        Type: 'Celebrations',
                        Name: 'Birthday added'
                    };
                    this.entrySerice.addEntry(entry).subscribe((data:Response)=>{
                        this.router.navigate(['/home']);

                        location.reload();// for the time being
                    });
                },(error) => { });
            }else{
                this.router.navigate(['/home']);
                location.reload();// for the time being
            }

        },(error) => {
            console.log(error.json());
        });
  }

  chooseColor(form:NgForm){
      this.profileManagementService.setProfileData(form.value);
      this.profileManagementService.setAllowColorChooser(true);
      this.router.navigate(['pick-color']);
  }
  ngOnInit() {}

}
