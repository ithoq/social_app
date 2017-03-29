import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UsersService} from "../../services/users.service";
import {Response} from "@angular/http";
import {UserStuff} from "../../models/UserStuff";
import {TimelineService} from "../../services/timeline.service";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-invite-managed-user',
  templateUrl: './invite-managed-user.component.html',
  styleUrls: ['./invite-managed-user.component.css']
})
export class InviteManagedUserComponent implements OnInit {

  @ViewChild('managedProfile') managedProfile;
  public formBusy:boolean;
  public title:string;
  private timelineId:string = '';
  constructor(
      public router:Router,
      public auth:AuthService,
      public usersService:UsersService,
      public timelineService:TimelineService,
      public activatedRoute:ActivatedRoute,
      public app:AppService
  ){
      this.title = '';
      this.formBusy = false;
  }

  ngOnInit() {
    this.activatedRoute.params
        .map(params => params['id'])
        .subscribe((timelineId) => {
          this.timelineId = timelineId;
          this.managedProfile.setAction('');
        });
  }

  saveUser(){
    this.managedProfile.submitForm();
  }

  profileCreated(event){
    this.usersService.getUserTimelinesAndStuff().subscribe((data:Response)=>{
      let mapedData = data.json().payload;
      let userStuff = new UserStuff(mapedData.User, mapedData.Timelines, mapedData.ManagedUsers);
      this.auth.setUser(JSON.stringify(userStuff));
      this.timelineService.inviteUsers(this.timelineId,event.user.UserId,"").subscribe((data:Response)=>{
        this.app.show_success_popup('Managed user added successfully.');
        this.formBusy = false;
        this.router.navigate(['/manage-logs']);
      });
    });
  }
  profileCreating(event){
    this.formBusy = true;
  }
}
